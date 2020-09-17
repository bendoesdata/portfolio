<template>
  <div>
    <b-container fluid>
      <b-jumbotron header="About" lead="Who is Ben?">
      </b-jumbotron>
    </b-container>

  <b-container>
    <b-row>
      <b-col md>
        <b-container>
          <b-img
          v-on:load="onLoaded"
          v-show="loaded"
          fluid
          class="about-image"
          src="/images/about-pic.jpg"></b-img>
        </b-container>
      </b-col>
      <b-col md>
        <b-container class="about-text">
          <p>
            Ben is a multidisciplinary designer and developer of data visualization products. Most of his work leans on a few core skillsets—most notably data visualization, creative coding, and UX design.
          </p>
          <p>
            Currently, Ben uses these skills at the <a href="https://www.broadinstitute.org/" target="_blank">Broad Instititute</a> as part of the <a href="https://pattern.broadinstitute.org/" target="_blank">Pattern</a> group, a team of designers, engineers, and scientists specializing in the design and development of visualizations. Ben uses Python, Javascript, HTML/CSS, and D3.js to create interactive visualization tools.
          </p>
          <p>
            Ben sees the world through data and through shapes. He enjoys creating pieces of generative art that mimics natural phenomenon with code. Ben is also a climate activist, recovering journalist, and lover of fancy breads.
          </p>
          <h4>Other websites</h4>
          <div class="connect-social-container">
            <a href="https://twitter.com/bendoesdataviz" target="_blank">
              <img src="/icons/twitter.svg" width=60px alt="">
            </a>
            <a href="https://www.linkedin.com/in/benjamincooley/" target="_blank">
              <img src="/icons/linkedin.svg" width=60px alt="">
            </a>
            <a href="https://github.com/bendoesdata" target="_blank">
              <img src="/icons/github.svg" width=60px alt="">
            </a>
            <a href="mailto:benjamincooley94@gmail.com" target="_blank">
              <img src="/icons/minutemailer.svg" width=60px alt="">
            </a>
          </div>
        </b-container>
      </b-col>
    </b-row>
  </b-container>

  </div>
</template>

<script>
  export default {
    head: {
      title: 'About'
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
