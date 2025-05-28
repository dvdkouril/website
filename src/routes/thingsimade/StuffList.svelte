<script lang="ts">
	export let stuff;
</script>

<ul>
	{#each stuff as thing}
		<li>
			[{#each thing.links as link}
				{#if link.link !== ""}
					<a href={link.link}>{link.name}</a>
				{/if}
			{/each}] {thing.title}
			{#each thing.tags as tag}
				<span style="border: 1px solid black;">{tag}</span>
			{/each}

			{#if thing.image}
				<br />
				<img src={thing.image} />
			{/if}
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style-type: none;
	}
</style>
