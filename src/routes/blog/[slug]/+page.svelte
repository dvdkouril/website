<script lang="ts">
	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();
</script>

<div>
	<h2>{data.frontmatter.title}</h2>
	{@html data.contentHtml}
</div>

<style>
	* {
		font-family: "Dosis", sans-serif;
	}
</style>
