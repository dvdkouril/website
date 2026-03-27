<script lang="ts">
	let { title, description, image = undefined, links = [] }: {
		title: string;
		description: string;
		image?: string;
		links?: { url: string; label: string }[];
	} = $props();

	// Generate initials for placeholder
	const initials = title
		.split(/[\s-]+/)
		.map((w) => w[0])
		.join("")
		.toUpperCase()
		.slice(0, 2);

	// Deterministic color from title
	let hash = 0;
	for (const ch of title) hash = ch.charCodeAt(0) + ((hash << 5) - hash);
	const hue = ((hash % 360) + 360) % 360;
</script>

<div class="card">
	<div class="image-area">
		{#if image}
			<img src={image} alt="{title} screenshot" />
		{:else}
			<div class="placeholder" style="background-color: hsl({hue}, 40%, 85%);">
				<span>{initials}</span>
			</div>
		{/if}
	</div>
	<div class="text-area">
		<h4>{title}</h4>
		<p class="description">{description}</p>
		{#if links.length > 0}
			<div class="links">
				{#each links as link}
					{#if link.url}
						<a href={link.url} target="_blank" rel="noopener noreferrer">[{link.label}]</a>
					{/if}
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	.card {
		overflow: hidden;
	}

	.image-area {
		aspect-ratio: 16 / 9;
		overflow: hidden;
		background: #f5f5f5;
		border-radius: 6px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
	}

	.image-area img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.placeholder {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 6px;
	}

	.placeholder span {
		font-size: 2rem;
		font-weight: 600;
		color: rgba(0, 0, 0, 0.3);
		user-select: none;
	}

	.text-area {
		padding: 6px 2px;
	}

	h4 {
		margin: 0 0 2px 0;
		font-size: 1rem;
		font-weight: 600;
	}

	.description {
		margin: 0 0 4px 0;
		font-size: 0.9rem;
		color: #555;
		line-height: 1.4;
	}

	.links {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
	}

	.links a {
		font-size: 0.85rem;
		color: #333;
		text-decoration: underline;
		text-underline-offset: 2px;
	}

	.links a:hover {
		color: #000;
	}
</style>
