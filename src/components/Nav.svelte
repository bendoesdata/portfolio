<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(230, 230, 230, 0.3);
		font-weight: 300;
		padding: 0 1em;
	}

	a {
		color: #fff
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: right;
	}

	.left-logo {
		display: block;
		float:left;
		margin-top: 10px;
		font-size: 26px;
		font-weight: 600
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(240, 240, 240);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 0em 0.5em;
		display: block;
		font-size: 18px;
	}
</style>

<nav>
	<ul>
		<a class="left-logo" href=".">BC</a>
		
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>
		<!-- <li><a aria-current="{segment === 'work' ? 'page' : undefined}" href="work">work</a></li> -->

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		
			 <!-- <li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li> -->
	</ul>
</nav>
