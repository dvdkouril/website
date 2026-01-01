<script lang="ts">
	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>blog.</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div id="container">
	<h2>blog.</h2>
	<ul>
		{#each data.posts as d}
			<li>
				<a href={`/blog/${d.slug}`}>{d.frontmatter.title}</a>
				{d.frontmatter.date}
			</li>
		{/each}
	</ul>
</div>

<style>
	#container {
		width: 100%;
		max-width: 630px;
		font-size: 110%;
		line-height: 1.3;
	}
</style>
