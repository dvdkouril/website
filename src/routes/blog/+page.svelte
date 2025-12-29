<script lang="ts">
	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();
</script>

<h2>blogggg</h2>
{#each data.posts as d}
	<h3>{d.frontmatter.title}</h3>
	<p>{d.content}</p>
{/each}
