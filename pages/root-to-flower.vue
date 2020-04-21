<template>
  <div class="case-study-wrapper">
    <div class="box">
        <b-img fluid src="/images/projects_r2f.png"></b-img>
        <div class="header-text" style="top: 15%">
            <h1 style="color: black">Root-to-Flower AR Experience</h1>
        </div>
    </div>

    <b-container class="project-intro"
    fluid>
        <h3>A data-driven augmented reality experience that visually explains the effects of food waste on our environment. The custom app also included a set of AR recipe cards showing how to cook each dish at the event.</h3>
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
                      In collaboration with <a href="https://www.spearheadinteractive.com/" target="_blank">Spearhead Interactive</a> and <a href="http://www.joesarahphotography.com" target="_blank">Joe Sarah Photography</a>, I led the team at <a href="www.infogr8.com">infogr8</a> to create a series of custom infographics to view in augmented reality.
                  </p>
                  <p>
                      After downloading a mobile app, guests were invited to discover these infographics by exploring their surroundings and finding specific trigger images to point their phone camera at. Guests could also point their cameras at the large-scale food photography hanging on the walls to view the recipes that would be served that evening.
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
                <b-img fluid src="/images/r2f/r2f-mockup-01.png"></b-img>
                <p class="caption">AR infographic showing parts of plants that can be eaten, but are often thrown away.</p>
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
                      Before starting the design process, I researched and analyzed data on global food waste to find the most impactful facts to feature at the event. These stats were then contextualised alongside other data to help people put the numbers in perspective.
                  </p>
                  <p>
                      For example: did you know that the amount of global food waste is 4x the amount needed to feed all the malnourished people in the world?
                  </p>
                  <p>
                    I then collaborated with a team of designers to take these facts and produce a series of visualisations that weaved together a narrative around food waste for dinner guests to explore.
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
            <b-col md="8">
                <b-img fluid src="/images/r2f/r2f-mockup-02.png"></b-img>
            </b-col>
            <b-col md="3">

            </b-col>
            <b-col md="1"></b-col>
        </b-row>
        <!-- <b-row style="margin-top: 30px">
            <b-col md="1"></b-col>
            <b-col md="5">
                <b-img fluid src="/images/spotify/bubbles.png"></b-img>
            </b-col>
            <b-col md="5">
                <b-img fluid src="/images/spotify/triangle.png"></b-img>
            </b-col>
            <b-col md="1"></b-col>
        </b-row> -->
        <b-row>
          <b-col>
            <p class="caption">A still taken from inside the AR app during the event.</p>
          </b-col>
        </b-row>
    </b-container>

  </div>
</template>

<script>
  export default {
    head: {
      title: 'Root to Flower Case Study'
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
