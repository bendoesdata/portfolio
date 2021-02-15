<script>
	import { fade } from 'svelte/transition';
	import Highlight from '../components/ProjectHighlight.svelte';

</script>

<style>
	main {
		/* max-width: 1800px; */
		margin: 0px auto;
	}

	a {
		color: rgb(29, 29, 29);
		font-size: 32px;
	}

	.cta {
		text-align: left;
		margin-left: 0.5em;
	}

	.header-row {
		height: 90vh
	}

	.intro-text {
		margin: auto;
		margin-bottom: 10px;
		padding: 20px;
		margin-left: 10px
	}

	.intro-text h1 {
		margin-top: 3em;
		font-size: 3.4vmax;
		padding: 0px;
		color: #fff
	}

	.gray-text {
		color: #a7a7a7	
	}

	.btn-holder {
		width: 200px;
		margin: 0px auto;
	}

	@media screen and (max-width: 800px) {
		.header-row {
			margin-bottom: 80px
		}
	}

</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<main>
	<div class="row header-row">
		<div class="column _50">
			<div in:fade class="intro-text">
			<h1>Ben does data visualization<span class="gray-text">, creative coding, information design, visual journalism, UX engineering, and front-end development.</span></h1>
			<!-- <div class="btn-holder">
				<a href="/work">
				<button>Explore</button>
				</a>
			</div> -->
			</div>
		</div>
		<div class="column _50">
				<img src="/images/ben-trace.svg" alt="">
		</div>
	</div>
	<div>
	</div>
	<Highlight 
	title="MA K-12 COVID Testing Dashboard"
	description="Dashboard to track the COVID-19 testing strategies of school districts in MA."
	link="https://ma-k12testingcollaborative.org/"
	tags="data viz, dev"
	image="/images/front-page/k12-map.png"
	imgAlt="Map of MA showing districts in shades of red, yellow, and green." />
	<Highlight imgSide="left"
	title="To All the Books I Read in 2020"
	description="Data viz essay looking back on the books I read in 2020."
	link="https://objective-wiles-09a6fb.netlify.app/"
	tags="data viz, dev, essay"
	image="/images/front-page/book-sort.png"
	imgAlt="A cluster of colorful bubbles grouped by linear number rating, with 1 on the left and 5 on the right." />
	<Highlight 
	title="Tiny Algae and the Political Theater of Planting 1 Trillion Trees" 
	description="An interactive data essay written for the Parametric Press issue on climate change."
	link="https://parametric.press/issue-02/algae/"
	tags="data viz, dev, essay"
	image="/images/front-page/algae-radar.png"
	imgAlt="A radar chart comparing metrics such as land use, water use, and CO2 across multiple carbon capture methods." />
	<Highlight imgSide="left"
	title="Repurposing Hub"
	description="Development for the Drug Repurposing Hub, a database to accelerate drug discovery and treatments through compound analysis."
	link="https://dev.clue.io/repurposing-app"
	tags="data viz, dev"
	image="/images/front-page/rephub.png"
	imgAlt="A data table showing drug compounds from the Repusposing Hub, with charts on the right hande side to summarize the compounds available." />
</main>
