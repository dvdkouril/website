<script lang="ts">
	import blueskyLogo from "$lib/logos/bluesky.svg";
	import githubLogo from "$lib/logos/github.svg";
	import observableLogo from "$lib/logos/observable.svg";
	import PublicationsGroup from "$lib/components/publicationsgroup.svelte";
	import { pubs } from "$lib/data/publications";
	import { onMount } from "svelte";

	let selectedPubs = $derived(pubs.filter((p) => p.isSelected));

	onMount(async () => {
		await initWebGPU();
	});

	async function initWebGPU() {
		const canvas = document.getElementById("webgpu-canvas");

		// Check if WebGPU is supported
		if (!navigator.gpu) {
			console.error("WebGPU is not supported in this browser");
			canvas.style.background = "white";
			return;
		}

		// Get GPU adapter and device
		const adapter = await navigator.gpu.requestAdapter();
		if (!adapter) {
			console.error("Failed to get GPU adapter");
			return;
		}

		const device = await adapter.requestDevice();
		const context = canvas.getContext("webgpu");

		const presentationFormat = navigator.gpu.getPreferredCanvasFormat();
		context.configure({
			device,
			format: presentationFormat,
			alphaMode: "premultiplied",
		});

		// Create uniform buffer for resolution and time
		const uniformBufferSize = 16; // vec2 resolution + float time + padding
		const uniformBuffer = device.createBuffer({
			size: uniformBufferSize,
			usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
		});

		// Vertex shader - creates a fullscreen triangle
		const vertexShaderCode = `
        @vertex
        fn main(@builtin(vertex_index) vertexIndex: u32) -> @builtin(position) vec4f {
            var pos = array<vec2f, 3>(
                vec2f(-1.0, -1.0),
                vec2f(3.0, -1.0),
                vec2f(-1.0, 3.0)
            );
            return vec4f(pos[vertexIndex], 0.0, 1.0);
        }
    `;

		// Fragment shader - creates continuous gradient between multiple positions
		const fragmentShaderCode = `
        struct Uniforms {
            resolution: vec2f,
            time: f32,
        }

        @group(0) @binding(0) var<uniform> uniforms: Uniforms;

        // Simple hash function for noise generation
        fn hash(p: vec2f) -> f32 {
            let p3 = fract(vec3f(p.x, p.y, p.x) * 0.13);
            let dp = dot(vec3f(p3.x, p3.y, p3.z + p3.x), vec3f(p3.y + 33.33, p3.z + 33.33, p3.x + 33.33));
            return fract((p3.x + p3.y) * dp);
        }

        @fragment
        fn main(@builtin(position) coord: vec4f) -> @location(0) vec4f {
            let t = uniforms.time;

            // Define 4 gradient positions with soft animation
            let pos1 = vec2f(0.75 + sin(t * 0.3) * 0.1, 0.75 + cos(t * 0.4) * 0.1);
            let pos2 = vec2f(0.8 + sin(t * 0.4 + 1.5) * 0.15, 0.2 + cos(t * 0.3 + 1.5) * 0.15);
            let pos3 = vec2f(0.7 + sin(t * 0.35 + 3.0) * 0.15, 0.8 + cos(t * 0.45 + 3.0) * 0.15);
            let pos4 = vec2f(0.3 + sin(t * 0.45 + 4.5) * 0.15, 0.7 + cos(t * 0.35 + 4.5) * 0.15);

            // Define colors for each position
            let color1 = vec3f(0.4, 0.6, 0.95);   // Soft periwinkle blue
            let color2 = vec3f(1.0, 1.0, 1.0);    // White
            let color3 = vec3f(1.0, 1.0, 1.0);    // White
            let color4 = vec3f(1.0, 1.0, 1.0);    // White

            // Convert pixel position to normalized coordinates
            let uv = coord.xy / uniforms.resolution;

            // Calculate aspect ratio to maintain circular shape
            let aspect = uniforms.resolution.x / uniforms.resolution.y;
            let uvCorrected = vec2f(uv.x * aspect, uv.y);
            let pos1Corrected = vec2f(pos1.x * aspect, pos1.y);

            // Define radius for colored point (in normalized coordinates)
            let colorRadius = 0.15; // Approximately 15% of screen
            let gradientFalloff = 0.3; // How far the gradient extends

            // Calculate distance to color point
            let dist1 = length(uvCorrected - pos1Corrected);

            // Calculate color based on distance from colored point
            var finalColor = vec3f(1.0, 1.0, 1.0); // Default white

            if (dist1 < colorRadius) {
                // Inside radius - solid color
                finalColor = color1;
            } else if (dist1 < colorRadius + gradientFalloff) {
                // Outside radius - gradient falloff to white with smooth easing
                let t = (dist1 - colorRadius) / gradientFalloff;
                // Use smoothstep for smoother transition (ease-in-out)
                let gradientStrength = 1.0 - smoothstep(0.0, 1.0, t);
                finalColor = mix(vec3f(1.0, 1.0, 1.0), color1, gradientStrength);
            }

            // Add dithering to reduce banding
            let noise = hash(coord.xy) * 2.0 - 1.0; // Range -1 to 1
            finalColor = finalColor + noise * 0.01; // Add subtle noise

            return vec4f(finalColor, 1.0);
        }
    `;

		const bindGroupLayout = device.createBindGroupLayout({
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.FRAGMENT,
					buffer: { type: "uniform" },
				},
			],
		});

		const bindGroup = device.createBindGroup({
			layout: bindGroupLayout,
			entries: [
				{
					binding: 0,
					resource: { buffer: uniformBuffer },
				},
			],
		});

		const pipelineLayout = device.createPipelineLayout({
			bindGroupLayouts: [bindGroupLayout],
		});

		const pipeline = device.createRenderPipeline({
			layout: pipelineLayout,
			vertex: {
				module: device.createShaderModule({ code: vertexShaderCode }),
				entryPoint: "main",
			},
			fragment: {
				module: device.createShaderModule({ code: fragmentShaderCode }),
				entryPoint: "main",
				targets: [
					{
						format: presentationFormat,
					},
				],
			},
			primitive: {
				topology: "triangle-list",
			},
		});

		function resize() {
			const docHeight = Math.max(
				document.body.scrollHeight,
				document.body.offsetHeight,
				document.documentElement.clientHeight,
				document.documentElement.scrollHeight,
				document.documentElement.offsetHeight,
			);
			canvas.width = window.innerWidth * window.devicePixelRatio;
			canvas.height = docHeight * window.devicePixelRatio;
			canvas.style.width = window.innerWidth + "px";
			canvas.style.height = docHeight + "px";
		}

		function render(time) {
			// Update uniforms
			const uniformData = new Float32Array([
				canvas.width,
				canvas.height,
				time * 0.001, // Convert to seconds
				0, // padding
			]);
			device.queue.writeBuffer(uniformBuffer, 0, uniformData);

			const commandEncoder = device.createCommandEncoder();
			const textureView = context.getCurrentTexture().createView();

			const renderPassDescriptor = {
				colorAttachments: [
					{
						view: textureView,
						clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },
						loadOp: "clear",
						storeOp: "store",
					},
				],
			};

			const passEncoder =
				commandEncoder.beginRenderPass(renderPassDescriptor);
			passEncoder.setPipeline(pipeline);
			passEncoder.setBindGroup(0, bindGroup);
			passEncoder.draw(3);
			passEncoder.end();

			device.queue.submit([commandEncoder.finish()]);
		}

		// Animation loop
		function animate(time) {
			render(time);
			requestAnimationFrame(animate);
		}

		// Handle window resize
		resize();
		window.addEventListener("resize", () => {
			resize();
		});

		// Start animation loop
		requestAnimationFrame(animate);
	}
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<canvas id="webgpu-canvas"></canvas>
<div id="container">
	<p>
		Hi, I'm <em>Postdoctoral Research Fellow</em> at
		<a href="http://hms.harvard.edu">Harvard Medical School</a>
		in Nils Gehlenborg's <a href="http://hidivelab.org">HIDIVE Lab</a>.
	</p>

	<p>
		My research work centers around data visualization, with a special focus
		on data with spatial components. I work at the intersection of
		disciplines, bridging software development, computer graphics, and
		biology. I'm especially interested in developing new interaction
		techniques that make complex or unfamiliar type of data more intuitive
		to grasp and explore.
	</p>

	<p>
		At HIDIVE, I investigate visualization of 3D chromatin structure
		predictions as a complement for the typical chromosome conformation
		capture techniques used for determining spatial organization of genomes.
		This involves developing <a href="https://github.com/hms-dbmi/uchimata"
			>new web-based visualization software</a
		>, as well as an interface for
		<a href="https://github.com/hms-dbmi/uchimata-py"
			>computational notebooks</a
		>.
	</p>

	<p>
		I received a doctoral degree from <a href="https://www.tuwien.at/en/"
			>TU Wien</a
		>. My thesis
		<em
			>Interactive Visualization of Dense and Multi-Scale Data for Science
			Outreach</em
		>
		was awarded the
		<a
			href="https://www.eg.org/wp/eurographics-awards-programme/eurovis-phd-award/"
			>EuroVis PhD Award in 2022</a
		>.
	</p>

	<h3>Selected publications.</h3>

	<PublicationsGroup pubs={selectedPubs} />
</div>

<style>
	:global(html),
	:global(body) {
		overflow-x: hidden;
		max-width: 100vw;
	}

	#container {
		width: 100%;
		max-width: 800px;
		text-align: justify;
		line-height: 1.3;
		font-size: 110%;
	}

	h3 {
		margin-bottom: 0;
		padding-bottom: 0;
		font-size: 140%;
	}

	a {
		color: black;
		font-size: 90%;
		/*background-color: red;*/
		padding: 0px 5px 0px 5px;
		margin-top: 5px;
		text-decoration: underline;
		text-decoration-thickness: 5px;
	}

	a:hover {
		background-color: red;
		text-decoration: underline;
		text-decoration-thickness: 5px;
		text-decoration-color: blue;
		color: white;
	}

	#webgpu-canvas {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}
</style>
