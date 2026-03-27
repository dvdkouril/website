<script lang="ts">
	import ProjectCard from "./ProjectCard.svelte";

	type Project = {
		title: string;
		description: string;
		image?: string;
		links: { url: string; label: string }[];
		category: "postdoc" | "phd" | "undergrad";
	};

	const projects: Project[] = [
		{
			title: "Gosling 3D extension",
			description: "Integrating 3D structures into the Gosling grammar.",
			links: [
				{
					url: "https://3d.gosling-lang.org",
					label: "demo",
				},
				{
					url: "https://doi.org/10.1109/TVCG.2025.3634654",
					label: "paper @ IEEE VIS 2025",
				},
			],
			image: "projects/gosling3d.png",
			category: "postdoc",
		},
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
			category: "postdoc",
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
			category: "phd",
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
			category: "phd",
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
			category: "phd",
		},
		{
			title: "Master's thesis",
			description:
				"Maya2CellVIEW: Integrated Tool for Creating Large and Complex Molecular Scenes",
			links: [{ url: "", label: "" }],
			category: "undergrad",
		},
		{
			title: "Bachelor's thesis",
			description: "Fast region labeling of binary images",
			links: [],
			category: "undergrad",
		},
	];

	const postdoc = projects.filter((p) => p.category === "postdoc");
	const phd = projects.filter((p) => p.category === "phd");
	const undergrad = projects.filter((p) => p.category === "undergrad");
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
	<p>
		My work is centered on data visualization, mostly around biomedical data
		and even more specifically anything that has a spatial component. I
		studied computer science with a focus on computer graphics during my
		Bachelor's and Master's. My PhD topic was on multiscale 3D visualization
		of large and complex molecular models.
	</p>
	<p>
		Besides these larger projects, I keep <a href="/thingsimade"
			>a list of smaller things I've made</a
		>
	</p>

	{#if postdoc.length > 0}
		<h3>postdoc.</h3>
		<div class="grid">
			{#each postdoc as project}
				<ProjectCard
					title={project.title}
					description={project.description}
					image={project.image}
					links={project.links}
				/>
			{/each}
		</div>
	{/if}

	{#if phd.length > 0}
		<h3>phd.</h3>
		<div class="grid">
			{#each phd as project}
				<ProjectCard
					title={project.title}
					description={project.description}
					image={project.image}
					links={project.links}
				/>
			{/each}
		</div>
	{/if}

	{#if undergrad.length > 0}
		<h3>undergraduate.</h3>
		<div class="grid">
			{#each undergrad as project}
				<ProjectCard
					title={project.title}
					description={project.description}
					image={project.image}
					links={project.links}
				/>
			{/each}
		</div>
	{/if}
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
		margin-bottom: 32px;
	}
</style>
