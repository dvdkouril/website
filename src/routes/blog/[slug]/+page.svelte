<script lang="ts">
	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();

	const nicefyDate = (dateStr: string) => {
		const date = new Date(dateStr);
		return date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};
</script>

<div>&lt; back to <a href="/blog">all posts</a>.</div>

<div id="container">
	<h2>{data.frontmatter.title}</h2>
	<p class="subtitle">
		<i
			>Written in {data.frontmatter.place} and published on {nicefyDate(
				data.frontmatter.date,
			)}</i
		>
	</p>
	{@html data.contentHtml}
</div>

<style>
	#container {
		width: 100%;
		max-width: 630px;
		font-size: 110%;
		/* text-align: justify; */
		line-height: 1.3;
	}

	.subtitle {
		font-size: 0.8em;
		margin-top: 0;
		text-align: right;
	}

	h2 {
		margin-bottom: 5px;
	}
</style>
