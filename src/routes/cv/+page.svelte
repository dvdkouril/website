<script lang="ts">
	import Publications from "$lib/components/publications.svelte";
	import Reviewingplot from "$lib/components/reviewingplot.svelte";
</script>

<svelte:head>
	<title>cv.</title>
	<!--<meta
		name="description"
		content="This is where the description goes for SEO"
	/>-->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div id="container">
	<p class="pdf-downloads">
		Most recent version of my academic CV (as PDF) available at: <a
			href="https://assets.dvdkouril.xyz/cv.pdf"
			target="_blank">assets.dvdkouril.xyz/cv.pdf</a
		>
	</p>

	<h2>basic information.</h2>
	<div style="margin-left: 40px">
		<p>Full name: <strong>Dr.techn. Mgr. David Kouřil</strong>.</p>
		<p>Nationality: <strong>Czech</strong>.</p>
		<p>
			Contact: <strong
				><mark>$&lbrace;firstname&rbrace;</mark>.<mark
					>$&lbrace;lastname-without-accent&rbrace;</mark
				>@gmail.com</strong
			>
		</p>

		<p>
			Links: <a href="https://bsky.app/profile/dvdkouril.xyz">bsky</a>,
			<a href="https://github.com/dvdkouril">github</a>,
			<a href="https://observablehq.com/@david-kouril">observable</a>,
			<a
				href="https://scholar.google.com/citations?user=dZxZ__wAAAAJ&hl=en"
				>scholar</a
			>.
		</p>
	</div>

	<h2>education.</h2>
	<ul>
		<li class="cv-item">
			<div class="date-column">Mar 2017 - Apr 2021:</div>
			<div class="item-details">
				<strong>Doctoral Degree (Dr.techn.)</strong> @ TU Wien (AT) 🇦🇹
				<br />
				Thesis:
				<i
					>“Interactive Visualization of Dense and Multi-Scale Data
					for Science Outreach”</i
				>
			</div>
		</li>
		<li class="cv-item">
			<div class="date-column">Sep 2014 - Feb 2017:</div>
			<div class="item-details">
				<strong>Master's Degree (Mgr.)</strong> @ Masaryk University
				(CZ) 🇨🇿
				<br />
				Field: Computer Graphics, Thesis:
				<i
					>"Maya2CellVIEW: Integrated Tool for Creating Large and
					Complex Molecular Scenes"</i
				>
			</div>
		</li>
		<li class="cv-item">
			<div class="date-column">Sep 2011 - Jun 2014:</div>
			<div class="item-details">
				<strong>Bachelor's Degree (Bc.)</strong> @ Masaryk University
				(CZ) 🇨🇿
				<br />
				Field: Computer Graphics and Image Processing, Thesis:
				<i>"Fast region labeling of binary images"</i>
			</div>
		</li>
	</ul>

	<h2>research experience.</h2>
	<ul>
		<li class="cv-item">
			<div class="date-column">Jul 2023 - present:</div>
			<div class="item-details">
				<strong>Postdoctoral Research Fellow</strong> @ Harvard Medical
				School (USA) 🇺🇸

				<ul>
					<li>
						Investigating visualization of 3D genome models in the
						context of visualization grammars.
					</li>
					<li>
						Developed novel domain-specific software tools for both
						web and computational notebooks.
					</li>
				</ul>
			</div>
		</li>
		<li class="cv-item">
			<div class="date-column">Jul 2021 - Jun 2023:</div>
			<div class="item-details">
				<strong>Postdoctoral Researcher</strong> @ Masaryk University
				(CZ) 🇨🇿

				<ul>
					<li>
						Leading role in a project dealing with visualization of
						three-dimensional chromatin models.
					</li>
					<li>
						Advising doctoral students at the visualization group
						VisitLab.
					</li>
					<li>
						Contributed to grant proposal submitted to GAČR (Czech
						Science Foundation), funded in Dec 2022.
					</li>
				</ul>
			</div>
		</li>
		<li class="cv-item">
			<div class="date-column">Mar 2017 - Feb 2021:</div>
			<div class="item-details">
				<strong>Project Assistant</strong> @ TU Wien (AT) 🇦🇹

				<ul>
					<li>
						Lead author for 3 research projects <i
							>Labels on Levels</i
						>
						(labeling for molecular scenes), <i>HyperLabels</i>
						(multi-scale navigation), <i>Molecumentary</i> (virtual tours
						of molecular models).
					</li>
					<li>
						Provided support to students and external collaborators
						with the Marion library.
					</li>
					<li>
						Collaborated with international experts from both
						visualization and biology domain.
					</li>
				</ul>
			</div>
		</li>
		<li class="cv-item">
			<div class="date-column">Jul 2016 - Feb 2017:</div>
			<div class="item-details">
				<strong>Project Assistant Without Degree</strong> @ TU Wien 🇦🇹
				<ul>
					<li>
						Integrated past research prototypes into a unified demo
						submitted to the VIZZIES challenge (organized by
						National Science Foundation).
					</li>
					<li>
						Ported a high-performance molecular rendering technique
						(cellVIEW) from DirectX to OpenGL for a new proprietary
						library (called Marion). This code was later used in
						commercialized by a spin-off company, Nanographics GmbH.
					</li>
					<li>
						Implemented nano-scale rendering of microtubules for a
						project contracted by Allen Institute For Cell Science.
					</li>
				</ul>
			</div>
		</li>
	</ul>

	<h2>awards.</h2>
	<ul class="basic-list">
		<li>
			<a
				href="https://ieeevis.org/year/2018/info/awards/best-paper-awards#scivis"
				>IEEE Vis 2018 Best Paper Honorable Mention (SciVis)</a
			>
		</li>
		<li>
			<a
				href="https://www.eg.org/wp/eurographics-awards-programme/eurovis-phd-award/"
				>EuroVis Best PhD Award 2022</a
			>
		</li>
	</ul>

	<h2>professional service.</h2>
	<h3>reviewing.</h3>
	<Reviewingplot />

	<h3>other.</h3>
	<ul class="basic-list">
		<li>EuroVis 2018: Fast Forward Chair, Student Volunteer</li>
		<li>
			PacificVis 2025: <a
				href="https://pacificvis2025.github.io/pages/Committees.html"
				>Journal Track Program Committee</a
			>
		</li>
		<li>
			IEEE VIS 2025: <a
				href="https://ieeevis.org/year/2025/info/committees/program-committees"
				>Full Papers Program Committee</a
			>
		</li>
	</ul>

	<h2>talks.</h2>
	<ul class="basic-list">
		<li>
			<i
				>The story of visualizing 3D genome data as a path toward
				composable visualization tools</i
			>
			(invited talk) @
			<strong>Konversatorium</strong>, TU Wien (AT), May 2025.
		</li>
		<li>
			<i
				>You’ve Visualized It but Now What? Navigating and Making Sense
				of Large 3D Visualizations</i
			>
			(invited talk) @
			<strong>CNS Research Showcase</strong>, Indiana University (US),
			January 2023 (given remotely).
		</li>
		<li>
			<i
				>Navigating and Making Sense of Large 3D Visualizations of
				Biological Data</i
			>
			(invited talk) @
			<strong>ISCBacademy Webinar, hosted by BioVis</strong>, online,
			March 2023.
			<a href="https://www.youtube.com/watch?v=rThqgeu09ZE">[recording]</a
			>
		</li>
		<li>
			<i
				>You’ve Visualized It but Now What? Navigating and Making Sense
				of Large 3D Visualizations</i
			>
			(invited talk) @ <strong>Bio+Med+Vis Summer School</strong>, Masaryk
			University, Brno (CZ), September 2022.
		</li>
		<li>
			<i
				>HyperLabels: Browsing of Dense and Hierarchical Molecular 3D
				Models</i
			>
			(conference paper presentation) @ <strong>IEEE Vis 2020</strong>,
			Salt Lake City (USA), October 2020 (given remotely).
			<a href="https://youtu.be/GVfO0F-4T7g?t=630">[recording]</a>
		</li>
		<li>
			<i>Navigating and Exploring 3D Biological Environments</i> @
			<strong>CellVis Summit</strong>, KAUST (Saudi Arabia), November
			2019.
			<a
				href="https://webcast.kaust.edu.sa/Mediasite/Showcase/default/Presentation/e8772073b7e343e09ace32a9a2d186251d"
				>[recording]</a
			>
		</li>
		<li>
			<i
				>Labels on Levels: Labeling of Multi-Scale Multi-Instance and
				Crowded 3D Biological Environments</i
			>
			(conference paper presentation) @ <strong>IEEE Vis 2018</strong>,
			Berlin (DE), October 2018.
			<a href="https://vimeo.com/303245396">[recording]</a>
		</li>
		<li>
			<i
				>Challenges and advances in multi-scale biology data
				visualization</i
			>
			(invited talk), <strong>Czech Technical University</strong>, Prague
			(CZ), November 2017.
		</li>
	</ul>
	<!--<h2>teaching.</h2>-->
	<h2>publications.</h2>
	<div style="margin-left: 40px">
		<Publications />
	</div>
</div>

<style>
	* {
		font-family: "Dosis", sans-serif;
	}

	/*h2 {*/
	/*	margin-top: 0;*/
	/*}*/

	#container {
		width: 100%;
		max-width: 800px;
		font-size: 110%;
	}

	h3 {
		margin-left: 40px;
	}

	.cv-item {
		/*background-color: red;*/
		margin: 10px 0 10px 0;
		display: flex;
		gap: 1rem;
	}
	.date-column {
		/*background-color: red;*/
		flex: 1;
	}
	.item-details {
		flex: 4;
	}
	.item-details ul {
		list-style-type: none;
		margin-left: 0;
		padding-left: 0;
	}
	.basic-list {
		list-style-type: none;
	}
	.basic-list li {
		margin: 10px 0 10px 0;
	}

	mark {
		background-color: #e0e7ff;
	}

	.pdf-downloads {
		margin-top: 2rem;
		padding: 0.75rem 1rem;
		border: 1px solid #ddd;
	}
</style>
