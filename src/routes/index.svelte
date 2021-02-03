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
		margin-bottom: 10px;
		padding: 20px;
	}

	.intro-text h1 {
		margin-top: 3em;
		font-size: 3.2vmax;
		padding: 0px;
	}

	.gray-text {
		color: rgb(130, 130, 130)		
	}

	.btn-holder {
		width: 300px;
		margin: 0px auto;
	}

	@media screen and (max-width: 800px) {
		button {
			font-size: 18px;
		}

		.btn-holder {
			width: 280px
		}
	}

</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<main>
	<div class="row">
		<div class="column _5">
			<div in:fade class="intro-text">
			<h1>Ben does data visualization<span class="gray-text">, creative coding, information design, visual journalism, UX engineering, and front-end development.</span></h1>
			<div class="btn-holder">
			<a href="/work">
				<button>Explore</button>
			</a>
			</div>
			</div>
		</div>
		<div class="column _5">
				<img src="/images/ben-trace.svg" alt="">
		</div>
	</div>
</main>
