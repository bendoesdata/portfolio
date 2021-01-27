<script>
	import { fade } from 'svelte/transition';
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

	.intro-text {
		margin: auto;
	}

	.intro-text h1 {
		margin-top: 3em;
		margin-bottom: 10px;
		margin-left: 0.5em;
		font-size: 3.2vmax;
		padding: 0px;
	}

	.gray-text {
		color: rgb(130, 130, 130)		
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<main>
	<div in:fade class="row">
		<div class="column _5">
			<div class="intro-text">
			<h1>Ben does data visualization<span class="gray-text">, creative coding, information design, visual journalism, UX engineering, and front-end development.</span></h1>
			<a class="pulsate" href="/work">View projects</a>
			</div>
		</div>
		<div class="column _5">
			<img width="100%" src="/images/ben-trace.svg" alt="">
		</div>
	</div>
</main>
