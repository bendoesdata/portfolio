<template>
  <div class="case-study-wrapper">
    <div class="box">
        <b-img fluid src="/images/projects_2019.png"></b-img>
        <div class="header-text">
            <h1 style="color: white">My 2019 in Data</h1>
        </div>
    </div>

    <b-container class="project-intro"
    fluid>
        <h3>I spent most of 2019 tracking my personal data. In January of 2020, I spent some time visualizing it using only Javascript and the p5.js library.</h3>
    </b-container>

    <!-- description of project -->
    <b-container fluid>
        <b-row>
          <b-col md="1"></b-col>
          <b-col cols="12" md="7">
            <transition name="slide-fade">
              <b-container v-if="loaded" class="project-description">
                  <h2>The Project</h2>
                  <p>
                      This was a self-initiated project. I wanted to design data visualizations that felt modern and fun. Most times the charts I make at work are highly technical in nature and focus on analytics. I wanted these visualizations to feel more like a poster you would hang on a wall.
                  </p>
                  <p>
                      I learned a lot from the experience. So much so that I wrote this retrospective blog on Medium. Here's a <a href="https://medium.com/nightingale/my-year-in-data-a-visual-reflection-on-2019-e1545be7d680?source=friends_link&sk=94f45721736dd8686008ba43153700c6" target="_blank">friend link to the story</a>.
                  </p>
                  <b-button
                  href="https://bendoesdata.com/experimental-projects/2019-review/"
                  variant="outline-info"
                  target="_blank"
                  size="lg"
                  style="margin-top: 20px">
                    Explore the visualizations
              </b-button>
              </b-container>
            </transition>
          </b-col>
          <b-col md="4"></b-col>
        </b-row>
    </b-container>

  </div>
</template>

<script>
  export default {
    head: {
      title: 'Spotify Data Design'
    },
    data: function() {
    return {
      loaded: false
    }
  },
  mounted() {
    this.loaded = true;
  },
  methods: {
    onLoaded() {
      this.loaded = true;
    }
  }
  }
</script>
