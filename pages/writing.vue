<template>
  <div class="post-container mx-auto">
    <b-container class="">
    <h1 class="mb-3">My writing</h1>
    <br>
      
        <b-container fluid>
          <b-card no-body class="overflow-hidden mb-3 blog-preview">
            <b-row no-gutters>
              <b-col md="4">
                <b-card-img fluid src="/images/projects_2019.png" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="8">
                <b-card-body title="My Visual Year in Data">
                  <h6 class="card-subtitle text-muted">
                    Exploring my data from 2019 through a series of data visualization posters.
                  </h6>
                  <div class="tag-holder">
                    <b-badge variant="dark">
                        tags
                    </b-badge>
                </div>
                    <b-button
                    variant="outline-info"
                    size="md" class="blog-read-link"
                    to="link"
                    >
                    Read
                    </b-button>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-container>


        <b-container fluid>
          <b-card no-body class="overflow-hidden mb-3 blog-preview">
            <b-row no-gutters>
              <b-col md="4">
                <b-card-img fluid src="/images/projects_2019.png" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="8">
                <b-card-body title="a title">
                  <h6 class="card-subtitle text-muted">
                    My Visual Year in Data
                  </h6>
                  <div class="tag-holder">
                    <b-badge variant="dark">
                        tags
                    </b-badge>
                </div>
                    <b-button
                    variant="outline-info"
                    size="md" class="blog-read-link"
                    to="link"
                    >
                    Read
                    </b-button>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-container>
      
  </b-container>
  </div>
</template>
<script>

export default {
    head: {
        title: 'Writing'
    },
    data() {
        return {
        
        }
    },
};
</script>

<style lang="css">
  .post-container {
    max-width: 800px;
    margin-top: 50px
  }

  .blog-read-link {
    margin-top: 0px
  }

  .blog-preview img {
    display: block;
    width: 100%;
    height: auto
  }

  .card-title {
    margin-top:10px
  }

  h4.card-title {
    font-size: 32px;
    margin-bottom: 10px
  }

  h6.card-subtitle.text-muted {
    color: rgb(185) !important;
    font-size: 18px;
    margin-top:20px;
    font-family: "CircReg", sans-serif
  }
</style>
