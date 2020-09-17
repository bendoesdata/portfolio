<template>
  <div>
    <b-container fluid>
      <b-jumbotron header="Contact" lead="Get in touch">
      </b-jumbotron>
    </b-container>

  <b-container>
    <b-row>
      <b-col md>
        <b-container class="about-text" style="max-width: 700px">
          <p>
            I'm currently working full time as a Visualization Software Engineer at the <a href="https://www.broadinstitute.org/" target="_blank">Broad Instititue</a>, but I'm open to taking commissions for side projects within data visualization, generative art, and civic tech.
          </p>
          <p>
            I am particularly passionate about climate advocacy, sustainable food systems, and wealth inequality. 
          </p>
          <a href="mailto:benjamincooley94@gmail.com" style="text-decoration: underline; color: black; text-align: center">
            <p>Send me an email</p>
          </a>
        </b-container>
      </b-col>
    </b-row>
  </b-container>

  </div>
</template>

<script>
  export default {
    head: {
      title: 'Contact'
    },
    data: function() {
    return {
      loaded: false
    }
  },
  }
</script>
