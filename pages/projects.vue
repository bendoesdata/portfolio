<template>
  <div>
    <b-container fluid>
      <b-jumbotron header="Projects">
      </b-jumbotron>
    </b-container>

    <b-container style="margin-bottom: 100px; text-align: center; max-width: 550px">
      <p>A few of my favorite projects from over the years. You can also view my latest coding experiments <nuxt-link to="/experiments">here</nuxt-link>.</p>
    </b-container>

      <project-highlight
        title="Tiny Algae and the Political Theater of Planting One Trillion Trees"
        summary="An interactive data essay written for the Parametric Press issue on climate change."
        image="/images/projects_algae-trees.png"
        imageside="left"
        :projectTags="['journalism','data visualization','interactive essay']"
        caseStudyLink="algae-essay"
        />

      <project-highlight
        title="Cloud to Street UX Design"
        summary="A UX strategy and design project to create a new dashboard for flood monitoring and disaster relief."
        image="/images/c2s/c2s-mockup-top.png"
        imageside="right"
        :projectTags="['UX design','UX strategy','data visualization']"
        caseStudyLink="cloud-to-street"
        />

      <project-highlight
      title="2019 in Review"
      summary="A visual look back on the data I generated in 2019, and what it says about me."
      image="/images/projects_2019.png"
      imageside="left"
      :projectTags="['design','development','p5.js',]"
      caseStudyLink="2019-year-in-data"
      projectLink="https://bendoesdata.com/experimental-projects/2019-review/"
      />

    <project-highlight
      title="Spotify Conceptual Design"
      summary="A conceptual data design project for Spotify's insight team."
      image="/images/projects_spotify.png"
      imageside="right"
      :projectTags="['data analysis','creative direction','data visualization']"
      caseStudyLink="spotify-data-design"
      />

    <project-highlight
      title="Root to Flower"
      summary="A data-driven augmented reality experience that visually explains the effects of food waste on our environment."
      image="/images/projects_r2f.png"
      imageside="left"
      :projectTags="['data analysis','creative direction']"
      caseStudyLink="root-to-flower"
      />

  </div>
</template>

<script>
import ProjectHighlight from '~/components/ProjectHighlight.vue'

  export default {
    head: {
      title: 'Projects'
    },
    components: {
      ProjectHighlight
    },
  }
</script>
