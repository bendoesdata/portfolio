<template>
  <div>
    <b-container fluid>
      <b-jumbotron header="Projects" lead="Highlights of my favorite work">
      </b-jumbotron>
    </b-container>

      <project-highlight
      title="2019 in Review"
      summary="A visual look back on the data I generated in 2019, and what it says about me."
      image="/images/projects_2019.png"
      imageside="left"
      caseStudy="true"
      v-bind:projectTags="['p5.js','design']"
      />

    <project-highlight
      title="Spotify Conceptual Design"
      summary="A conceptua data design project for Spotify's insight team."
      image="/images/projects_spotify.png"
      imageside="right"
      />

    <project-highlight
      title="vue title"
      summary="my project"
      image="/images/projects_r2f.png"
      imageside="left"
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

<style lang="css">
  .jumbotron h1 {
    padding-left: 50px
  }

  .jumbotron p.lead {
    padding-left: 50px;
    margin-top: 0px
  }

  .jumbotron {
    background-color: white
  }

  .case-study-btn {
    margin-left: 10px
  }
</style>
