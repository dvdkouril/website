<script lang="ts">
	import StuffList from "./StuffList.svelte";

	type Item = {
		title: string;
		links: {
			link: string;
			name: string;
		}[];
		tags: Tags[];
		year: number;
	};

	type Tags = "hidive" | "personal" | "visitlab";

	const stuff: Item[] = [
		{
			title: "HUROS 2024 poster",
			links: [
				{
					link: "https://www.dropbox.com/scl/fi/gegw3bq5kvinyc2eeoa9q/poster-huros_hidivelab.pdf?rlkey=06uopvugnso3pvbk3jvp8ojam&dl=0",
					name: "poster",
				},
			],
			tags: ["hidive"],
			year: 2024,
		},
		{
			title: "HUROS 2023 poster",
			links: [
				{
					link: "https://www.dropbox.com/scl/fi/hrvfjf21uch0517z6ya6v/poster-huros_hidivelab.pdf?rlkey=e5n30h65sxwhlymaf8mg23l71&dl=0",
					name: "poster",
				},
			],
			tags: ["hidive"],
			year: 2024,
		},
		{
			title: "4DN annual meeting 2024 poster",
			links: [
				{
					link: "https://www.dropbox.com/scl/fi/rrmnmq1vdbtywg32xv5wr/poster-maybe-final2.pdf?rlkey=gk3djgrz17xseohsp9wdgwatq&dl=0",
					name: "poster",
				},
			],
			tags: ["hidive"],
			year: 2024,
		},
		{
			title: "HIDIVE zoom background",
			links: [
				{
					link: "http://www.davidkouril.com/hidive-zoom-bg/",
					name: "app",
				},
				{
					link: "https://github.com/dvdkouril/hidive-zoom-bg/",
					name: "code",
				},
			],
			tags: ["hidive"],
			year: 2024,
		},
		{
			title: "anywidget setup: developing both the library and the widget",
			links: [
				{
					link: "https://www.youtube.com/watch?v=yL1k2IUA1ps",
					name: "video",
				},
			],
			tags: ["hidive"],
			year: 2025,
		},
		{
			title: "3D pie chart from Secret Base video",
			links: [
				{
					link: "https://observablehq.com/d/a6e42e6b6fdfae1b",
					name: "observable",
				},
			],
			tags: ["personal"],
			year: 2025,
		},
		{
			title: "visualnination: visualization of nina's sleep",
			links: [
				{
					link: "https://github.com/dvdkouril/visualnination",
					name: "code",
				},
			],
			tags: ["personal"],
			year: 2024,
		},
		{
			title: "quak: Add hovered value label for Histogram plot",
			links: [
				{
					link: "https://github.com/manzt/quak/pull/32",
					name: "PR",
				},
			],
			tags: ["hidive"],
			year: 2024,
		},
		{
			title: "hierarchical selections in a 3D chromatin model",
			links: [
				{
					link: "https://dvdkouril.github.io/hierarchical-selections/",
					name: "app",
				},
				{
					link: "https://github.com/dvdkouril/hierarchical-selections",
					name: "code",
				},
			],
			tags: ["visitlab"],
			year: 2023,
		},
		{
			title: "hyperwindows prototype",
			links: [
				{
					link: "https://dvdkouril.github.io/chromatin-n-out/",
					name: "app",
				},
				{
					link: "https://github.com/dvdkouril/chromatin-n-out",
					name: "code",
				},
			],
			tags: ["visitlab", "hidive"],
			year: 2023,
		},
	];

	const stuff2023 = stuff.filter((i) => i.year === 2023);
	const stuff2024 = stuff.filter((i) => i.year === 2024);
	const stuff2025 = stuff.filter((i) => i.year === 2025);
</script>

<h1>small things i've made</h1>
<p>
	<b>i love chasing little ideas and creating stuff.</b> this is a list of small
	(or big) things i've created recently.
</p>
<p>
	mostly things that were not my main work projects, but i'm still proud of.
	some personal stuff omitted.
</p>
<h2>2025</h2>
<StuffList stuff={stuff2025} />
<h2>2024</h2>
<StuffList stuff={stuff2024} />
<h2>2023</h2>
<StuffList stuff={stuff2023} />
