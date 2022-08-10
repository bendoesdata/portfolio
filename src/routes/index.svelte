<script>
	import { fade } from "svelte/transition";
	import Highlight from "../components/ProjectHighlight.svelte";
</script>

<svelte:head>
	<title>Benjamin Cooley</title>
</svelte:head>

<main>
	<div class="row header-row">
		<div class="column _60">
			<div in:fade class="intro-text">
				<h1>
					Ben<span class="gray-text"
					>jamin</span> Cooley is a creative technologist focusing on visualization and human-computer interaction.
					
				</h1>
				<!-- <div class="btn-holder">
				<a href="/work">
				<button>Explore</button>
				</a>
			</div> -->
			</div>
		</div>
		<div class="column _40 img-container" />
	</div>
	<div class="project-intro">
		<p>Here's some recent work.</p>
	</div>
	<Highlight
		imgSide="right"
		title="3d UMAP for genetic modeling analysis"
		credit="Published in Cell Systems"
		link="https://broadinstitute.github.io/webster-umap-minisite/#/"
		tags="data viz, design, dev"
		image="/images/projects/webster.png"
		imgAlt="Screenshot of a UMAP dashboard."
	>
		<p>
			A 3d visualization tool that shows the correlation of certain biological functions to sets of genes. <a
				class="description-link"
				href="https://broadinstitute.github.io/webster-umap-minisite/#/"
				target="_blank">View the tool</a
			>
			and read the 
			<a
				class="description-link"
				href="https://medium.com/@patternvizlab/introducing-a-novel-approach-to-3d-umap-visualization-for-single-cell-genomic-analysis-b79cf09f1af6"
				target="_blank">design write-up</a
			> for more details.
		</p>
	</Highlight>
	<Highlight
		imgSide="left"
		title="Global Flood Database"
		credit="Published in Nature"
		link="http://global-flood-database.cloudtostreet.info/"
		tags="data viz, design"
		image="/images/front-page/gfd.png"
		imgAlt="Screenshot of a flood dashboard. A map is on the left, with various charts on the right showing rainfall, population exposed, and duration for each flood event in a given region."
	>
		<p>
			Dashboard of the world’s largest collection of flood
			maps. In collaboration with <a
				class="description-link"
				href="https://www.cloudtostreet.ai/"
				target="_blank">Cloud to Street</a
			>
			and in support of original research
			<a
				class="description-link"
				href="https://www.nature.com/articles/s41586-021-03695-w"
				target="_blank">published in Nature</a
			>.
		</p>
	</Highlight>
	<Highlight
		title="MA K-12 COVID Testing Dashboard"
		credit="Published in Cell"
		link="https://ma-k12testingcollaborative.org/"
		tags="data viz, dev"
		image="/images/front-page/k12-map.png"
		imgAlt="Map of MA showing districts in shades of red, yellow, and green."
	>
		<p>
			Dashboard to track the COVID-19 testing strategies of school
			districts in MA. In support of the <a
				href="https://www.wgbh.org/news/education/2020/10/14/mass-school-districts-parent-scientists-take-covid-19-testing-into-their-own-hands"
				target="_blank"
				class="description-link">STSS collaborative</a
			>.
		</p>
	</Highlight>
	<Highlight
		imgSide="left"
		title="To All the Books I Read in 2020"
		credit="Self-published"
		link="https://objective-wiles-09a6fb.netlify.app/"
		tags="data viz, dev, essay"
		image="/images/front-page/books2.png"
		imgAlt="A cluster of colorful bubbles grouped by linear number rating, with 1 on the left and 5 on the right."
	>
		<p>Data viz essay looking back on the books I read in 2020.</p>
	</Highlight>

	<Highlight
		title="Tiny Algae and the Theater of Planting 1 Trillion Trees"
		credit="Parametric Press"
		link="https://parametric.press/issue-02/algae/"
		tags="data viz, dev, essay"
		image="/images/front-page/algae-radar.png"
		imgAlt="A radar chart comparing metrics such as land use, water use, and CO2 across multiple carbon capture methods."
	>
		<p>
			An interactive data essay written for the Parametric Press issue on
			climate change.
		</p>
	</Highlight>
	<Highlight
		imgSide="left"
		title="2019 - A Year in Data"
		credit="Self-published"
		link="/experimental-projects/2019-review"
		tags="data viz, dev, design"
		image="/images/front-page/workouts.png"
		imgAlt="A data table showing drug compounds from the Repusposing Hub, with charts on the right hande side to summarize the compounds available."
	>
		<p>
			A retrospective of the data I tracked during 2019. Each category of
			data became a data viz poster to highlight and remember stats from
			the year.
		</p>
	</Highlight>
</main>
<style>
	main {
		/* max-width: 1800px; */
		margin: 0px auto;
	}

	a {
		color: rgb(29, 29, 29);
		font-size: 32px;
	}

	a.description-link {
		font-size: inherit;
	}

	.cta {
		text-align: left;
		margin-left: 0.5em;
	}

	.header-row {
		height: 90vh;
	}

	.intro-text {
		margin: auto;
		margin-bottom: 10px;
		padding: 20px;
		margin-left: 10px;
	}

	.intro-text h1 {
		margin-top: 3em;
		font-size: 3.4vmax;
		padding: 0px;
		color: #333;
		font-weight: 500;
	}

	.gray-text {
		color: #c4c4c4;
	}

	.btn-holder {
		width: 200px;
		margin: 0px auto;
	}

	@media screen and (max-width: 800px) {
		.header-row {
			margin-bottom: 80px;
		}
	}

	.img-container {
		width: 100%;
		background-image: url("/images/untitled.svg");
		height: 750px;
		background-position: left;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		margin: auto 0;
	}

	.project-intro p {
		height: 200px;
		text-align: center;
		font-size: 28px;
		font-weight: "regular";
		padding-top: 150px;
		position: bottom;
	}
</style>
