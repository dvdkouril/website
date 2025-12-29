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

<h2>posts.</h2>
<ul>
	{#each data.posts as d}
		<li>
			<a href={`/blog/${d.slug}`}>{d.frontmatter.title}</a>
			{d.frontmatter.date}
		</li>
	{/each}
</ul>

<style>
	* {
		font-family: "Dosis", sans-serif;
	}
</style>
