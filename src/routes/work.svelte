<script>
    import work from '../../static/data/projects.js';
    import { fade } from 'svelte/transition';

    let projects = work.projects;
</script>

<style>
    img {
        width: 100%;
        height: auto
    }

    .grid-box {
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(200px, 450px));
        justify-content: center;
        width: 100%
    }

    /* On mouse-over, add a deeper shadow */
    .project-card:hover {
    box-shadow: 0 12px 20px 0 rgba(0,0,0,0.2);
    }

    .project-card {
        border: 0.5px solid rgb(205, 205, 205);
        border-radius: 0px 0px 15px 15px;
        padding: 0px;
        margin: 10px;
        /* Add shadows to create the "card" effect */
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
    }

    .project-text {
        padding: 15px;
    }

    a {
        text-decoration: none;
        color: black;
    }
</style>

<svelte:head>
	<title>Work</title>
</svelte:head>

<h1>Work</h1>

<div class="grid-box">
    {#each projects as project, i}
    <div in:fade>
        <a href={project.link} target="_blank">
        <div class="project-card">
            <img src={project.image} alt="">
            <div class="project-text">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
            </div>
        </div>
        </a>
    </div>
    {/each}    
</div>

