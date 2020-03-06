<template>
  <div>
    <b-container fluid>
      <b-jumbotron header="About" lead="Who is Ben?">
      </b-jumbotron>
    </b-container>

  <b-container>
    <b-row>
      <b-col>
        <b-container>
          <b-img
          v-on:load="onLoaded"
          v-show="loaded"
          fluid
          src="/images/about-pic.jpg"></b-img>
        </b-container>
      </b-col>
      <b-col>
        <b-container>
          <p>
            Ben is a multidisciplinary designer and developer of data visualization products. Most of his work leans on a few core skillsets—most notably data visualization, creative coding, and UX design.
          </p>
          <p>
            Ben is also a climate activist, recovering journalist, and lover of fine breads.
          </p>
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

<style lang="css" scoped>
  .container {
    margin: auto
  }
</style>
