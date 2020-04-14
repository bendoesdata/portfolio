<template>
  <div>
    <div class="box">
        <b-img fluid src="/images/projects_spotify.png"></b-img>
        <div class="header-text">
            <h1 style="color: white">Spotify Data Design</h1>
        </div>
    </div>

    <b-container class="project-intro"
    fluid>
        <h3>Music labels and artists want to know the value of Spotify. The insights team at Spotify needed new visual methods to discover, share and communicate findings from streaming data.</h3>
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
                      The insights team at Spotify London had questions: what is the point of maximum ROI for programmed streams per song? How much should music managers invest before putting on the brakes? When are the most important boost times?
                  </p>
                  <p>
                      To answer these questions, Spotify used their analytic models to investigate. But they kept running into a problem: how do we effectively communicate our findings in a way that both informs and excites people?
                  </p>
                  <p>
                      In addition, Spotify was interested in using visualization as a way to not only answer questions, but to <strong style="font-weight: 600">ask new questions in the process</strong>.
                  </p>
              </b-container>
            </transition>
          </b-col>
          <b-col md="4"></b-col>
        </b-row>
    </b-container>

    <!-- insert some photos or grid of photos -->
    <b-container fluid>
        <b-row no-gutters>
            <b-col md="2"></b-col>
            <b-col md="8">
                <b-img fluid src="/images/spotify/spotify-01.png"></b-img>
                <p class="caption">The core visual variable used in our concepts stemmed from a question: what is the shape of a song? I visualized the source of streaming revenue for each song as the point of a triangle. We then gave each "shape" a memorable name that suggests how the song will perform based on the types of streaming listens it is receiving.</p>
            </b-col>
            <b-col md="2"></b-col>
        </b-row>
    </b-container>

    <!-- contributions / detail of solution -->
    <b-container fluid>
        <b-row>
          <b-col md="4"></b-col>
          <b-col cols="12" md="7">
            <transition name="slide-fade">
              <b-container v-if="loaded" class="project-description">
                  <h2>Contributions</h2>
                  <p>
                      To start, I analyzed an anonymized dataset provided by Spotify. This data contained variables like date of song release, number of streams, artist, genre, and source of streaming. From this analysis, I created the visual metaphor of the shape of a song.
                  </p>
                  <p>
                      I then exported each song triangle and worked with a team of designers to build different concepts around each. We wanted to paint a picture for Spotify of what their future analytics platform could be. Because Spotify works with music managers, labels, and often the artists themselves, we wanted the methods of visualization to be both informative and exciting in a way that matched Spotify's brand.
                  </p>
              </b-container>
            </transition>
          </b-col>
          <b-col md="1"></b-col>
        </b-row>
    </b-container>

    <b-container fluid>
        <b-row>
            <b-col md="1"></b-col>
            <b-col md="5">
                <b-img fluid src="/images/spotify/spotify-02.png"></b-img>
            </b-col>
            <b-col md="5">
                <b-img fluid src="/images/spotify/spotify-03.png"></b-img>
            </b-col>
            <b-col md="1"></b-col>
        </b-row>
        <b-row style="margin-top: 30px">
            <b-col md="1"></b-col>
            <b-col md="5">
                <b-img fluid src="/images/spotify/bubbles.png"></b-img>
            </b-col>
            <b-col md="5">
                <b-img fluid src="/images/spotify/triangle.png"></b-img>
            </b-col>
            <b-col md="1"></b-col>
        </b-row>
        <b-row>
          <b-col>
            <p class="caption">More designs that resulted from the project.</p>
          </b-col>
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

<style lang="css" scoped>
  .container {
    margin: auto
  }

  .box{
    position: relative;
    display: inline-block; /* Make the width of box same as image */
  }
  
  .box .header-text{
      position: absolute;
      z-index: 999;
      margin: 0 auto;
      left: 0;
      right: 0;
      color: white;
      top: 10%; /* Adjust this value to move the positioned div up and down */
      text-align: center;
      width: 60%; /* Set the width of the positioned div */
    }

    h1 {
        font-size: 5rem;
    }

    h2 {
      font-size: 3rem
    }

    h3 {
      font-size: 2rem
    }

    .project-intro {
        height: 300px;
        text-align: center;
        margin-top: 100px;
        top: 30%;
        max-width: 800px
    }

    .project-description {
      margin-bottom: 300px;
      margin-top: 150px
    }

    p {
        font-size: 21px;
    }

    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .slide-fade-enter-active {
      transition: all .6s ease;
    }
    .slide-fade-leave-active {
      transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
      transform: translateX(10px);
      opacity: 0;
    }

    .caption {
      margin-top: 30px;
      max-width: 800px;
      margin-top: 30px;
      margin-left: auto;
      margin-right: auto
    }

</style>
