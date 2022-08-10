<script>
	export let image;
	export let title;
	export let credit;
	export let description;
	export let link;
	export let imgAlt;
	export let tags = "";
	export let imgSide = "right";

	let width, imageSideAfterWidthCheck;

	if (tags != "") {
		tags = tags.split(",");
	}

	$: if (width < 800) {
		imageSideAfterWidthCheck = "right";
	} else {
		imageSideAfterWidthCheck = imgSide;
	}
</script>

<svelte:window bind:innerWidth={width} />

<div>
	<div class="row project-row">
		{#if imageSideAfterWidthCheck == "right"}
			<div class="column _30">
				<div class="project-text">
					<h2>{title}</h2>
					<p class="credits">{credit}</p>
					<slot />
					<div class="tag-container">
						{#each tags as tag}
							<span>{tag}</span>
						{/each}
					</div>
				</div>
			</div>
			<div class="column _50">
				<div class="img-holder">
					<a href={link} target="_blank">
						<img src={image} alt={imgAlt} />
						<div class="img-overlay" />
					</a>
				</div>
			</div>
		{:else}
			<div class="column _50">
				<div class="img-holder">
					<a href={link} target="_blank">
						<img src={image} alt={imgAlt} />
						<div class="img-overlay" />
					</a>
				</div>
			</div>
			<div class="column _30">
				<div class="project-text">
					<h2>{title}</h2>
					<p class="credits">{credit}</p>
					<slot />
					<div class="tag-container">
						{#each tags as tag}
							<span>{tag}</span>
						{/each}
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.project-row {
		background-color: #fff;
		height: 50vh;
		margin-bottom: 100px;
	}

	.tag-container {
		margin-top: 0px;
	}

	span {
		border-radius: 8px;
		background-color: rgb(194, 194, 194);
		color: black;
		padding-left: 12px;
		padding-right: 12px;
		padding-top: 4px;
		padding-bottom: 4px;
		margin: 4px;
		font-size: 14px;
	}

	.img-holder {
		position: relative;
	}

	.img-overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: #d2d2d2;
		opacity: 0.1;
		transition: 1s;
	}

	.img-overlay:hover {
		transition: 1s;
		opacity: 0;
	}

	.img-holder img {
		object-fit: cover;
		object-position: 20% 30%;
		width: 100%;
		height: 50vh;
	}

	.project-text {
		padding: 10px;
		max-width: 400px;
		margin: 0 auto;
		margin-top: 10px;
		margin-bottom: 0px;
	}

	.project-text h2 {
		margin-top: -10px;
		font-size: 36px;
	}

	p {
		font-size: 21px;
		line-height: 1.6;
	}

	.credits {
		font-size: 16px;
		font-style: italic;
		margin-top: -10px;
	}

	@media screen and (max-width: 800px) {
		.column {
			/* height: 500px; */
			display: block;
		}

		.project-row {
			height: 100%;
			margin-top: 100px;
		}

		h2 {
			font-size: 26px;
		}

		.tag-container {
			margin-bottom: 15px;
		}
	}
</style>
