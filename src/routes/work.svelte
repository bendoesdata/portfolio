<script>
    import work from '../../static/data/projects.js';
    import { fade } from 'svelte/transition';
    import Select from 'svelte-select';

    let projectCategories = ['blog', 'UX', 'tutorial', 'design', 'data viz']

    let selectedCategories = projectCategories;

    $: projects = work.projects.filter(item => item.tags.some(r=> selectedCategories.includes(r)));

    $: if (projects.length < 1) {
        projects = work.projects
    } else {
        projects = work.projects.filter(item => item.tags.some(r=> selectedCategories.includes(r)));
    }

    function handleSelect(event) {
        selectedCategories = [];
        if (event.detail != null) {
            event.detail.forEach(d => {
                selectedCategories.push(d.value)
            })
        }
    }
    
    selectedCategories=[]
</script>

<svelte:head>
	<title>Work</title>
</svelte:head>

<main>
<h1 style="padding: 10px">An archive of past work</h1>

<div class="select-holder">
    <p>filter work by </p>
    <div class="auto-select-holder">
    <Select items={projectCategories} selectedValue={selectedCategories} isMulti={true} on:select={handleSelect}></Select>
    </div>
    {#if selectedCategories}
    <p class="projects-selected">
        {projects.length} projects selected
    </p>
    {/if}
</div>
<div class="grid-box">
    {#each projects as project}
    <div in:fade>
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

    h1 {
        font-size: 36px
    }

    main {
        padding: 10px;
        background-color: black;
    }

    h2 {
        color: #fff
    }

    .grid-box {
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(200px, 420px));
        justify-content: center;
        width: 100%
    }

    /* On mouse-over, add a deeper shadow */
    .project-card:hover {
        box-shadow: 0 16px 26px 0 rgba(244, 244, 244, 0.2);
    }

    .project-card {
        border: 0px solid rgb(205, 205, 205);
        border-radius: 10px 10px 15px 15px;
        padding: 0px;
        margin: 10px;
        /* Add shadows to create the "card" effect */
        box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.1);
        background-color: #222323;
        color: #17191D;
        transition: 0.3s;
    }

    .project-text {
        padding: 15px;
    }

    a {
        color: #fff;
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
        margin-bottom: 20px
    }

    .img-holder img {
        object-fit: cover;
        object-position: 20% 30%;
        max-width: 450px;
        height: 330px;
    }
    
    a:hover {
        background-color: rgb(130, 130, 130);
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

    .select-holder {
        padding: 20px;
        display: flex;
        max-width: 800px;
        margin: 0 auto
    }

    .select-holder p {
        flex: 0.5;
        text-align: right
    }

    .auto-select-holder {
        width: 100%;
        flex: 1.4;
        margin: 0 auto;
        padding: 10px
    }

    .projects-selected {
        font-size: 14px;
        
    }
</style>