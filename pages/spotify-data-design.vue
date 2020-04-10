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
        <h2>Music labels and artists want to know the value of Spotify. The insights team at Spotify needed new visual methods to discover, share and communicate findings from streaming data.</h2>
    </b-container>

    <b-container fluid>
        <b-row no-gutters>
            <b-col md>
                <b-container>
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
            </b-col>
            <b-col md>
                <b-img fluid src="/images/projects_spotify.png"></b-img>
            </b-col>
        </b-row>
    </b-container>

    <b-container fluid>
        <b-row no-gutters>
            <b-col order-md="1" md>
                <b-container>
                    <h2>The Solution</h2>
                </b-container>
            </b-col>
            <b-col md>
                <b-img fluid src="/images/projects_spotify.png"></b-img>
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

  .jumbotron h1 {
      font-family: "CircMed", sans-serif
    }

  .about-image {
    margin-bottom: 30px
  }

  .about-text {
    padding: 10px
  }

  .about-text p {
    padding: 10px;
    font-size: 21px
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

    .header-text h1 {
        font-size: 5rem;
    }

    .project-intro {
        height: 300px;
        text-align: center;
        margin-top: 100px;
        top: 30%
    }

    p {
        font-size: 21px;
        max-width: 550px;
        
    }

</style>
