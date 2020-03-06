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
      :projectTags="['design','development','p5.js',]"
      projectLink="/experimental-projects/2019-review"
      caseStudyLink="posts/2019-year-in-review"
      />

    <project-highlight
      title="Spotify Conceptual Design"
      summary="A conceptual data design project for Spotify's insight team."
      image="/images/projects_spotify.png"
      imageside="right"
      :projectTags="['data analysis','creative direction','data visualization']"
      projectLink="posts/spotify-case-study"
      />

    <project-highlight
      title="Root to Flower"
      summary="A data-driven augmented reality experience that visually explains the effects of food waste on our environment."
      image="/images/projects_r2f.png"
      imageside="left"
      :projectTags="['data analysis','creative direction']"
      projectLink="posts/root-to-flower"
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


  .case-study-btn {
    margin-left: 10px
  }

</style>
