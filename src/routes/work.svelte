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
        color: black;
        font-size: 18px;
        font-weight: 600;
        text-transform: uppercase;
        padding: 10px;
        text-decoration: none;
        cursor: pointer
    }

    .btn-holder {
        margin:auto 0;
        padding: 15px;
        margin-bottom: 10px
    }

    a:hover {
        background-color: rgb(201, 201, 201);
        transition: 0.3s;
    }

    span {
        border-radius: 6px;
        background-color:antiquewhite;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 4px;
        padding-bottom: 4px;
        margin: 6px;
        font-size: 14px;
    }
</style>

<svelte:head>
	<title>Work</title>
</svelte:head>

<h1>Work</h1>

<div class="grid-box">
    {#each projects as project}
    <div in:fade out:fade>
        <div class="project-card">
            <img src={project.image} alt="">
            <div class="project-text">
                <h2>{project.name}</h2>
                <div>
                    {#each project.tags as tag}
                    <span>{tag}</span>
                    {/each}
                    
                </div>
                <p>{project.description}</p>
            </div>
            <div class="btn-holder">
            {#if project.caseStudyLink}
                <a href={project.caseStudyLink}>Case study &#9998</a>
            {/if}
            <a href={project.link} target="_blank">Explore &#10142</a>
            </div>
        </div>
        
    </div>
    {/each}    
</div>

