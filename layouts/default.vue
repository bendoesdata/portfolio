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
            <b-dropdown-item to="/artwork" exact>Artwork</b-dropdown-item>
            <b-dropdown-item to="/writing" exact>Writing</b-dropdown-item>
            <b-dropdown-item to="/contact" exact>Contact</b-dropdown-item>
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
      <p class="footer-creds">Ben Cooley archive © 2020</p>
    </b-container>
  </footer>
</div>
</template>
