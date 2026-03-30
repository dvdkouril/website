<script lang="ts">
	import { slide } from "svelte/transition";
	import ProjectCard from "./ProjectCard.svelte";

	let showSmall = $state(true);

	type MajorProject = {
		title: string;
		description: string;
		image?: string;
		links: { url: string; label: string }[];
		year: number;
		kind: "major";
	};

	type SmallProject = {
		title: string;
		links: { url: string; label: string }[];
		tags: string[];
		year: number;
		image?: string;
		kind: "small";
	};

	type Project = MajorProject | SmallProject;

	const majorProjects: MajorProject[] = [
		{
			title: "uchimata",
			description:
				"A toolkit for visualization of 3D genome structures on the web and in computational notebooks.",
			links: [
				{
					url: "https://github.com/hms-dbmi/uchimata",
					label: "github",
				},
				{
					url: "http://hms-dbmi.github.io/uchimata/",
					label: "landing page",
				},
				{
					url: "https://doi.org/10.1093/bioinformatics/btag035",
					label: "paper @ Bioinformatics",
				},
			],
			image: "projects/uchimata.png",
			year: 2026,
			kind: "major",
		},
		{
			title: "Gosling 3D extension",
			description: "Integrating 3D structures into the Gosling grammar.",
			links: [
				{ url: "https://3d.gosling-lang.org", label: "demo" },
				{
					url: "https://doi.org/10.1109/TVCG.2025.3634654",
					label: "paper @ IEEE VIS 2025",
				},
			],
			image: "projects/gosling3d.png",
			year: 2025,
			kind: "major",
		},
		{
			title: "chromoskein",
			description:
				"[role: manager] A visual analytics system for 3D genomic data.",
			links: [
				{
					url: "https://github.com/hms-dbmi/uchimata",
					label: "github",
				},
				{
					url: "todo",
					label: "preprint",
				},
			],
			// image: "projects/uchimata.png",
			year: 2022,
			kind: "major",
		},
		{
			title: "Molecumentary",
			description:
				"A framework for automated generation of narrated animations about molecular data.",
			links: [
				{
					url: "https://doi.org/10.1109/TVCG.2021.3130670",
					label: "paper @ IEEE TVCG",
				},
			],
			year: 2021,
			kind: "major",
		},
		{
			title: "HyperLabels",
			description:
				"Navigating and multiscale 3D environments with hierarchical labels.",
			links: [
				{
					url: "https://doi.org/10.1109/TVCG.2020.2975583",
					label: "paper @ IEEE TVCG",
				},
			],
			year: 2020,
			kind: "major",
		},
		{
			title: "Labels on Levels",
			description:
				"Real-time textual labeling of multiscale 3D environments.",
			links: [
				{
					url: "https://doi.org/10.1109/TVCG.2018.2864491",
					label: "paper @ IEEE VIS 2018",
				},
			],
			year: 2018,
			kind: "major",
		},
		{
			title: "Master's thesis",
			description:
				"Maya2CellVIEW: Integrated Tool for Creating Large and Complex Molecular Scenes",
			links: [{ url: "", label: "" }],
			year: 2017,
			kind: "major",
		},
		{
			title: "Bachelor's thesis",
			description: "Fast region labeling of binary images",
			links: [],
			year: 2014,
			kind: "major",
		},
	];

	const smallProjects: SmallProject[] = [
		{
			title: "scattered",
			links: [
				{
					url: "https://github.com/dvdkouril/scattered",
					label: "github",
				},
			],
			tags: ["hidive"],
			year: 2026,
			kind: "small",
		},
		{
			title: "HUROS 2024 poster",
			links: [
				{
					url: "https://www.dropbox.com/scl/fi/gegw3bq5kvinyc2eeoa9q/poster-huros_hidivelab.pdf?rlkey=06uopvugnso3pvbk3jvp8ojam&dl=0",
					label: "poster",
				},
			],
			tags: ["hidive"],
			year: 2024,
			kind: "small",
		},
		{
			title: "HUROS 2023 poster",
			links: [
				{
					url: "https://www.dropbox.com/scl/fi/hrvfjf21uch0517z6ya6v/poster-huros_hidivelab.pdf?rlkey=e5n30h65sxwhlymaf8mg23l71&dl=0",
					label: "poster",
				},
			],
			tags: ["hidive"],
			year: 2023,
			kind: "small",
		},
		{
			title: "4DN annual meeting 2024 poster",
			links: [
				{
					url: "https://www.dropbox.com/scl/fi/rrmnmq1vdbtywg32xv5wr/poster-maybe-final2.pdf?rlkey=gk3djgrz17xseohsp9wdgwatq&dl=0",
					label: "poster",
				},
			],
			tags: ["hidive"],
			year: 2024,
			kind: "small",
		},
		{
			title: "HIDIVE zoom background",
			links: [
				{
					url: "http://www.davidkouril.com/hidive-zoom-bg/",
					label: "app",
				},
				{
					url: "https://github.com/dvdkouril/hidive-zoom-bg/",
					label: "code",
				},
			],
			tags: ["hidive"],
			image: "images/thingsimade/zoom-background.png",
			year: 2024,
			kind: "small",
		},
		{
			title: "anywidget setup: developing both the library and the widget",
			links: [
				{
					url: "https://www.youtube.com/watch?v=yL1k2IUA1ps",
					label: "video",
				},
			],
			tags: ["hidive"],
			year: 2025,
			kind: "small",
		},
		{
			title: "3D pie chart from Secret Base video",
			links: [
				{
					url: "https://observablehq.com/d/a6e42e6b6fdfae1b",
					label: "observable",
				},
			],
			tags: ["personal"],
			image: "images/thingsimade/piechart.png",
			year: 2025,
			kind: "small",
		},
		{
			title: "Cambridge and Brno weather comparison",
			links: [
				{
					url: "https://observablehq.com/d/15e1de54529ab5d5",
					label: "observable",
				},
			],
			tags: ["personal"],
			year: 2025,
			kind: "small",
		},
		{
			title: "visualnination: visualization of nina's sleep",
			links: [
				{
					url: "https://github.com/dvdkouril/visualnination",
					label: "code",
				},
			],
			tags: ["personal"],
			year: 2024,
			kind: "small",
		},
		{
			title: "quak: Add hovered value label for Histogram plot",
			links: [
				{ url: "https://github.com/manzt/quak/pull/32", label: "PR" },
			],
			tags: ["hidive"],
			year: 2024,
			kind: "small",
		},
		{
			title: "hierarchical selections in a 3D chromatin model",
			links: [
				{
					url: "https://dvdkouril.github.io/hierarchical-selections/",
					label: "app",
				},
				{
					url: "https://github.com/dvdkouril/hierarchical-selections",
					label: "code",
				},
			],
			tags: ["visitlab"],
			image: "images/thingsimade/hierarchical-selections.png",
			year: 2023,
			kind: "small",
		},
		{
			title: "hyperwindows prototype",
			links: [
				{
					url: "https://dvdkouril.github.io/chromatin-n-out/",
					label: "app",
				},
				{
					url: "https://github.com/dvdkouril/chromatin-n-out",
					label: "code",
				},
			],
			tags: ["visitlab", "hidive"],
			year: 2023,
			kind: "small",
		},
	];

	type Group = {
		label: string;
		major: MajorProject[];
		small: SmallProject[];
	};

	function inRange(year: number, min: number, max: number) {
		return year >= min && year <= max;
	}

	const groups: Group[] = [
		{
			label: "postdoc.",
			major: majorProjects.filter((p) => p.year > 2021),
			small: smallProjects.filter((p) => p.year > 2021),
		},
		{
			label: "phd.",
			major: majorProjects.filter((p) => inRange(p.year, 2018, 2021)),
			small: smallProjects.filter((p) => inRange(p.year, 2018, 2021)),
		},
		{
			label: "undergraduate.",
			major: majorProjects.filter((p) => p.year < 2018),
			small: smallProjects.filter((p) => p.year < 2018),
		},
	];
</script>

<svelte:head>
	<title>work.</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div id="container">
	<h2>work.</h2>
	<!-- <p> -->
	<!-- 	My work is centered on data visualization, mostly around biomedical data -->
	<!-- 	and even more specifically anything that has a spatial component. I -->
	<!-- 	studied computer science with a focus on computer graphics during my -->
	<!-- 	Bachelor's and Master's. My PhD topic was on multiscale 3D visualization -->
	<!-- 	of large and complex molecular models. -->
	<!-- </p> -->

	<label class="toggle">
		<input type="checkbox" bind:checked={showSmall} />
		<span class="slider"></span>
		<span class="toggle-label">show small projects</span>
	</label>

	{#each groups as group}
		{#if group.major.length > 0 || group.small.length > 0}
			<h3>{group.label}</h3>

			{#if group.major.length > 0}
				<div class="grid">
					{#each group.major as project}
						<ProjectCard
							title={project.title}
							description={project.description}
							image={project.image}
							links={project.links}
						/>
					{/each}
				</div>
			{/if}

			{#if showSmall && group.small.length > 0}
				<div transition:slide={{ duration: 300 }}>
					<p>I also made:</p>
					<ul class="small-list">
						{#each group.small as thing}
							<li>
								[{#each thing.links as link, i}{#if link.url !== ""}<a
											href={link.url}>{link.label}</a
										>{/if}{#if i < thing.links.length - 1}{" "}{/if}{/each}]
								{thing.title}
								{#each thing.tags as tag}
									<span class="tag">{tag}</span>
								{/each}
							</li>
						{/each}
					</ul>
				</div>
			{/if}
		{/if}
	{/each}
</div>

<style>
	* {
		font-family: "Dosis", sans-serif;
	}

	#container {
		width: 100%;
		max-width: 800px;
		font-size: 110%;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 16px;
		margin-bottom: 16px;
	}

	.small-list {
		list-style-type: "– ";
		padding-left: 24px;
	}

	.tag {
		border: 1px solid black;
	}

	.toggle {
		display: flex;
		align-items: center;
		gap: 10px;
		cursor: pointer;
		user-select: none;
		margin-bottom: 16px;
	}

	.toggle input {
		display: none;
	}

	.slider {
		position: relative;
		width: 44px;
		height: 24px;
		background: #ccc;
		border-radius: 12px;
		transition: background 0.3s;
		flex-shrink: 0;
	}

	.slider::after {
		content: "";
		position: absolute;
		top: 2px;
		left: 2px;
		width: 20px;
		height: 20px;
		background: white;
		border-radius: 50%;
		transition: transform 0.3s;
	}

	.toggle input:checked + .slider {
		background: #333;
	}

	.toggle input:checked + .slider::after {
		transform: translateX(20px);
	}

	.toggle-label {
		font-size: 90%;
		opacity: 0.7;
	}
</style>
