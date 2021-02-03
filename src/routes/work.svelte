<script>
    import work from '../../static/data/projects.js';
    import { fade } from 'svelte/transition';
    import Select from 'svelte-select';

    let projectCategories = ['blog', 'UX', 'tutorial', 'design', 'data viz']

    let selectedCategories = projectCategories;

    $: projects = work.projects.filter(item => item.tags.some(r=> selectedCategories.includes(r)));

    function handleSelect(event) {
        selectedCategories = [];
        if (event.detail != null) {
            event.detail.forEach(d => {
                selectedCategories.push(d.value)
            })
        }
	}
</script>

<svelte:head>
	<title>Work</title>
</svelte:head>

<main>
<h1>Work</h1>

<Select items={projectCategories} selectedValue={projectCategories} isMulti={true} on:select={handleSelect}></Select>

{#if selectedCategories}
<p>
    {projects.length} projects selected
</p>
{:else}
<p>No projects available</p>
{/if}
<div class="grid-box">
    {#each projects as project}
    <div in:fade out:fade>
        <div class="project-card">
            <div class="img-holder">
                <img src={project.image} alt="">
            </div>
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
</main>

<style>
    img {
        width: 100%;
        height: auto
    }

    main {
        padding: 10px
    }

    .grid-box {
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(200px, 420px));
        justify-content: center;
        width: 100%
    }

    /* On mouse-over, add a deeper shadow */
    .project-card:hover {
        box-shadow: 0 16px 26px 0 rgba(0,0,0,0.4);
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

    .img-holder img {
        object-fit: cover;
        object-position: 20% 30%;
        max-width: 450px;
        height: 330px;
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