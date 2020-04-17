<template>
  <div id="page-container">
  <div id="content-wrap">
  <b-navbar variant="faded" type="light">
    <b-navbar-brand href="/">BC</b-navbar-brand>
      <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Menu" right>
            <b-dropdown-item to="/projects" exact>Projects</b-dropdown-item>
            <b-dropdown-item to="/experiments" exact>Experiments</b-dropdown-item>
            <b-dropdown-item to="/writing" exact>Writing</b-dropdown-item>
            <b-dropdown-item to="/about" exact>About</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
  </b-navbar>

  <!-- start NUXT index -->
  <nuxt></nuxt>

  </div>
  <div class="pre-footer">

  </div>
  <footer class="footer-holder">
    <b-container class="mx-auto">
      <p class="footer-creds">Ben Cooley © 2020</p>
    </b-container>
  </footer>
</div>
</template>

<style lang="css">
  .nav-link a {
    color: gray
  }

  .navbar {
    -webkit-box-shadow: 0 4px 6px -6px #999;
    -moz-box-shadow: 0 4px 6px -6px #999;
    box-shadow: 0 4px 6px -6px #999;
  }

  a.nuxt-link-exact-active {
    color: black
  }

  #page-container {
    position: relative;
    min-height: 100vh;
  }

  #content-wrap {
  padding-bottom: 2.5rem;    /* Footer height */
}

  footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: rgb(235, 235, 235);
  color: black;
  text-align: center;

}

.pre-footer {
  height: 200px
}

.footer-creds {
  margin-top: 20px;
  font-family: "CircReg", sans-serif;
}

 .jumbotron h1 {
    /* padding-left: 20px; */
    font-family: "CircBold", sans-serif;
    margin-left: 10px;
  }



  @media only screen and (max-width: 600px) {
  .jumbotron h1 {
    font-size: 42px
  }
}

  .jumbotron p.lead {
    padding-left: 20px;
    margin-top: 0px
  }

  .jumbotron {
    background-color: white
  }
</style>
