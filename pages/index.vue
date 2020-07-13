<template>
  <div>
    <b-container fluid>
      <b-row class="jumbo-header" no-gutters>
        <!-- <b-col sm="1">
        </b-col> -->
        <b-col md="5" order-md="2">
          <img fluid src="/images/ben-trace.svg" alt="">
        </b-col>

        <b-col md="7" order-md="1">
          <b-container class="mx-auto">
            <h1 class="intro-text">Ben does data visualization<span class="gray-text">, creative coding, information design, visual journalism, UX engineering, and front-end development.</span></h1>
             <!-- Ben is curious<span class="gray-text"> about the world, how to fight climate change, how to communicate with data, and how to make the web more inclusive.</span> -->
          </b-container>
        </b-col>
        
        <!-- <b-col sm="6">
          <div>
            <b-img src="/images/workout-zoom.png" fluid alt="Responsive image"></b-img>
          </div>
        </b-col> -->
      </b-row>
    </b-container>

    <b-container fluid>
      <b-row no-gutters>
        <b-col md class="dark-tile tile">
          <nuxt-link to="/projects">
          <b-container class="mx-auto">
              <h2 class="square-text">Projects</h2>
          </b-container>
          </nuxt-link>
        </b-col>
        <b-col md class="light-tile tile">
          <nuxt-link to="/writing">
            <b-container class="mx-auto">
                <h2 class="square-text">Writing</h2>
            </b-container>
          </nuxt-link>
        </b-col>
        <b-col md class="dark-tile tile">
          <nuxt-link to="/experiments">
            <b-container class="mx-auto">
                <h2 class="square-text">Experiments</h2>
            </b-container>
          </nuxt-link>
        </b-col>
      </b-row>
      <b-row no-gutters>
        <b-col md class="light-tile tile">
          <nuxt-link to="/artwork">
            <b-container class="mx-auto">
                <h2 class="square-text">Artwork</h2>
            </b-container>
          </nuxt-link>
        </b-col>
        <b-col md class="dark-tile tile">
          <nuxt-link to="/about">
            <b-container class="mx-auto">
                <h2 class="square-text">About</h2>
            </b-container>
          </nuxt-link>
        </b-col>
        <b-col md order-md="1" class="light-tile tile">
          <nuxt-link to="/contact">
            <b-container class="mx-auto">
                <h2 class="square-text">Contact</h2>
            </b-container>
          </nuxt-link>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
import '~/assets/globalstyles.css'

  export default {
    head: {
      title: 'Home'
    },
    components: {

    },
  }
</script>


<style lang="css" scoped>

.jumbo-header {
    margin-top: 30px
  }

  .container-fluid {
    padding-left: 0;
    padding-right: 0
  }

  .intro-text {
    margin: auto;
    margin-top: 80px;
    margin-bottom: 10px;
    margin-left: 10px;
    font-size: 3.5vmax;
    padding: 30px;
    max-width: 900px;

  }

  p {
    font-size: 21px;
    font-weight: 300
  }

  h2.square-text {
    text-align: center;
    line-height: 420px;
    font-size: 56px;
    text-decoration: none;
    color: black
  }

  .dark-tile {
    background-color: black;
    color: white;
  }

  .dark-tile h2 {
    color: white;
  }

  .tile a {
    text-decoration: none
  }

  .tile {
    transition: scale 0.5s ease;
    height: 450px
  }

  .tile:hover {
    transition: background-color 0.5s ease;
    background: #53a7ea;
    /* -webkit-transform: scale(1.02);
    -ms-transform: scale(1.02);
    transform: scale(1.02); */
}

@media only screen and (max-width: 800px) {
  h1.intro-text {
    font-size: 30px;
    margin-top: 0px;
    padding: 10px;
  }
}

.gray-text {
  color: rgb(181, 181, 181);
  font-family: "CircReg", sans-serif
}

</style>
