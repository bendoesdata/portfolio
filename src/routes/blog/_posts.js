// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'hiiii',
		slug: 'test',
		html: `
		<div class="blog">
        <h1 id="interactive-essay-on-climate-change">Interactive Essay on Climate Change</h1>
<img src="/images/projects/projects_algae-trees.png" class="fullwidth" alt="image of algae project">
<h4 id="parametric-press-is-an-interactive-digital-magazine-that-unpacks-complex-topics-using-data-stories-for-their-issue-on-climate-change-i-reported-wrote-designed-and-coded-an-interactive-article-on-the-carbon-sequestration-potential-of-algae-technology">Parametric Press is an interactive digital magazine that unpacks complex topics using data stories. For their issue on climate change, I reported, wrote, designed, and coded an interactive article on the carbon sequestration potential of algae technology.</h4>
<h2 id="the-project">The Project</h2>
<p>I started this project out by wanting to write about the carbon removal potential of algae (it's so small! so efficient! so green!). But the deeper I got into the science, I realized that to make a convincing argument I also needed to address other, better-known methods of natural carbon removal (like trees).</p>
<p>What started as a niche idea on algae carbon sequestration turned into a giant piece of reporting on the state of our climate pathway, the limitations of trees, the promise of algae, and the reality that there's no perfect solution...</p>
<p>Trees became the giant, environmental elephant in the room: everybody loves them, even President Trump, who has otherwise been notoriously anti-climate-action. You may remember <a href="https://science.sciencemag.org/content/365/6448/76">the study</a> that broke every headline last year claiming that planting 1.2 trillion tree saplings on 1.7 billion hectares could remove 2/3rds of all human emissions. Trees have huge potential for helping to cool our planet and regulate levels of carbon dioxide.</p>
<p>So who needs algae if we can just plant a bunch of trees? sounds great, except this plan is plagued with problems from the start. We need land (running out of), we need time (not much left of it), we need to keep forests from burning (not a great time for forests recently).</p>
<p>I went searching for data to show why it was so risky to put all our hopes on trees. I searched for hours and hours for that perfect, tidy CSV file which would contain conclusive proof to even one question: &quot;how much land is left? how much time is left?&quot;. This magical dataset never came.</p>
<p>So I talked to some smart people about it. Turns out there are rarely any simple answers with climate change. Depends on who you ask, what they study, what methodology they used, how many assumptions. TL;DR it's complicated, and anyone who says otherwise likely has an agenda.</p>
<p>So I had an answer, even if it wasn't very satisfying: if our climate change problems are complex, then our solutions should be equally thoughtful, interwoven, and interconnected. But I still had a story to tell, and I wanted to make the science more digestable...so I went to work creating an explorable essay that could really communicate this message with impact.</p>
<div>
<img src="/images/projects/projects_algae-trees.png" class="text-aligned" alt="image of algae project">
</div>
<h2 id="process">Process</h2>
<p>Over the course of a few months, I delved into many research papers on the benefits and limits of tree planting for carbon removal. I also read about massive algae farms placed next to power plants in order to suck out CO2 from the air. I then synthesized this research into what I hoped was simpler language.</p>
<p>To communicate the problem of tree planting, instead of visualizing some data, I went with a simulation. The estimates are real, but the implementation is sped up and altered for a better user experience. I wanted to show the circular process: if trees die, you lose all the carbon once removed.</p>
<p>I learned that to communicate this science, there would have to be tradeoffs. It's a strange argument to make: trees are too complicated, let's pour millions of $ into algae research and start a bunch of algae farms! This is not a great takeaway. We need both. We need everything.</p>
<p>Communicating this kind of science is difficult. But it's more important than ever. We are running out of time to avoid irreversible changes to our environment. My hope is that, however imperfect the implementation, interactive storytelling can help to better spread the science that could save us.</p>
<p><a href="https://parametric.press/issue-02/algae/">Read the story</a></p>
</div>
		`
	},
	{
		title: 'What is Sapper?',
		slug: 'what-is-sapper',
		html: `
			<p>First, you have to know what <a href='https://svelte.dev'>Svelte</a> is. Svelte is a UI framework with a bold new idea: rather than providing a library that you write code with (like React or Vue, for example), it's a compiler that turns your components into highly optimized vanilla JavaScript. If you haven't already read the <a href='https://svelte.dev/blog/frameworks-without-the-framework'>introductory blog post</a>, you should!</p>

			<p>Sapper is a Next.js-style framework (<a href='blog/how-is-sapper-different-from-next'>more on that here</a>) built around Svelte. It makes it embarrassingly easy to create extremely high performance web apps. Out of the box, you get:</p>

			<ul>
				<li>Code-splitting, dynamic imports and hot module replacement, powered by webpack</li>
				<li>Server-side rendering (SSR) with client-side hydration</li>
				<li>Service worker for offline support, and all the PWA bells and whistles</li>
				<li>The nicest development experience you've ever had, or your money back</li>
			</ul>

			<p>It's implemented as Express middleware. Everything is set up and waiting for you to get started, but you keep complete control over the server, service worker, webpack config and everything else, so it's as flexible as you need it to be.</p>
		`
	},

	{
		title: 'How to use Sapper',
		slug: 'how-to-use-sapper',
		html: `
			<h2>Step one</h2>
			<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>

			<pre><code>npx degit "sveltejs/sapper-template#rollup" my-app
			cd my-app
			npm install # or yarn!
			npm run dev
			</code></pre>

			<h2>Step two</h2>
			<p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>src/routes</code> directory or add new ones.</p>

			<h2>Step three</h2>
			<p>...</p>

			<h2>Step four</h2>
			<p>Resist overdone joke formats.</p>
		`
	},

	{
		title: 'Why the name?',
		slug: 'why-the-name',
		html: `
			<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>

			<p>For web developers, the stakes are generally lower than those for combat engineers. But we face our own hostile environment: underpowered devices, poor network connections, and the complexity inherent in front-end engineering. Sapper, which is short for <strong>S</strong>velte <strong>app</strong> mak<strong>er</strong>, is your courageous and dutiful ally.</p>
		`
	},

	{
		title: 'How is Sapper different from Next.js?',
		slug: 'how-is-sapper-different-from-next',
		html: `
			<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://vercel.com/'>Vercel</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

			<ul>
				<li>It's powered by <a href='https://svelte.dev'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
				<li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].svelte</code></li>
				<li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
				<li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
			</ul>
		`
	},

	{
		title: 'How can I get involved?',
		slug: 'how-can-i-get-involved',
		html: `
			<p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos, and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
