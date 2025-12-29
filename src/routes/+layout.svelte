<script lang="ts">
	import { page } from "$app/state";
	import blueskyLogo from "$lib/logos/bluesky.svg";
	import githubLogo from "$lib/logos/github.svg";
	import observableLogo from "$lib/logos/observable.svg";
	import scholarLogo from "$lib/logos/scholar.svg";
	let { children } = $props();

	const showHeaderFor = [
		"/",
		"/cv",
		"/work",
		"/thingsimade",
		"/about",
		"/blog",
	];
	const pageUrl = $derived(page.url.pathname);
	const showHeader = $derived(showHeaderFor.some((v) => pageUrl === v));

	const pageTitle = "David Kouřil, a visualization researcher.";
	const pageDescr =
		"Personal page for David Kouřil, a postdoctoral researcher in data visualization";
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescr} />
	<!-- Open Graph (used by Facebook, LinkedIn, Discord, etc.) -->
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescr} />
	<meta
		property="og:image"
		content="https://davidkouril.com/david-og-preview.jpg"
	/>
	<meta property="og:url" content="https://davidkouril.com" />
	<meta property="og:type" content="website" />
</svelte:head>

{#if showHeader}
	<div id="header">
		<div id="name-title">
			<h1>DAVID KOUŘIL.</h1>
			<h2><pre>David Kou\v{"{"}r{"}"}il</pre></h2>

			<div id="links">
				<a
					class="socials-logo"
					href="https://bsky.app/profile/dvdkouril.xyz"
					><img alt="bluesky logo" src={blueskyLogo} /></a
				>
				|
				<a class="socials-logo" href="https://github.com/dvdkouril"
					><img alt="github logo" src={githubLogo} /></a
				>
				|
				<a
					class="socials-logo"
					href="https://scholar.google.com/citations?user=dZxZ__wAAAAJ&hl=en"
					><img alt="google scholar logo" src={scholarLogo} /></a
				>
				|
				<a
					class="socials-logo"
					href="https://observablehq.com/@david-kouril"
					><img alt="observablehq logo" src={observableLogo} /></a
				>
			</div>
		</div>
		<div style="width: 2px; height: 120px; background-color: #000;"></div>
		<nav id="menu">
			<ul>
				<li>
					>
					<a href="/">home.</a>
					<!--<a href="/" class:selected={currentPath === "/"}>home.</a>-->
				</li>
				<li>
					>
					<a href="/cv">cv.</a>
					<!--> <a href="/cv" class:selected={currentPath === "/cv"}>cv.</a>-->
				</li>
				<li>
					>
					<a href="/blog">blog.</a>
					<!--> <a href="/cv" class:selected={currentPath === "/cv"}>cv.</a>-->
				</li>
				<!-- <li> -->
				<!-- 	> -->
				<!-- 	<a href="/about">about.</a> -->
				<!-- </li> -->
				<!--<li>
				<a href="/projects" class:selected={currentPath === "/projects"}
					>projects.</a
				>
			</li>-->
			</ul>
		</nav>
	</div>
{/if}
{@render children()}

<style>
	h1 {
		font-family: "Dosis", sans-serif;
		padding-bottom: 0;
		margin-bottom: 0;
		margin-top: 0;
		font-size: 2.2em;
	}

	h2 {
		font-family: "Dosis", sans-serif;
		color: #aaaaaa;
		padding-top: 0;
		margin-top: 0;
		margin-bottom: 0;
		font-size: 1.65em;
	}
	h2 > pre {
		font-family: "Dosis", sans-serif;
		padding-top: 0;
		margin-top: 0;
		margin-bottom: 0;
	}
	#header {
		display: flex;
		gap: 1em;
	}
	#menu {
		font-family: "Dosis", sans-serif;
		font-size: 1.2em;
	}

	#menu ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	#menu ul li {
		margin: 0;
	}

	#menu a {
		/*background-color: #aaaaaa;*/
		/*color: black;*/
		/*text-decoration: none;*/
	}
	#links {
		/* text-align: center; */
		display: flex;
		align-items: center;
		/* justify-content: center; */
		gap: 5px;
		margin-top: 10px;
	}
	.socials-logo img {
		height: 25px;
	}
	.socials-logo {
		background-color: transparent;
		text-decoration: none;
		padding: 0px 5px 0px 5px;
	}
	.socials-logo:hover {
		background-color: transparent;
		text-decoration: none;
		color: white;
	}
</style>
