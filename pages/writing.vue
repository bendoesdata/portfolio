<template>
  <div class="post-container mx-auto">
    <b-container class="">
    <h1 class="mb-3">My writing</h1>
    <br>
      <div v-for="post in myWriting" :key="post.title">
        <b-container fluid>
          <b-card no-body class="overflow-hidden mb-3 blog-preview">
            <b-row no-gutters>
              <b-col md="4">
                <b-card-img fluid :src="post.imageLink" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="8">
                <b-card-body :title="post.title">
                  <h6 class="card-subtitle text-muted">
                    {{ post.description }}
                  </h6>
                  <div class="tag-holder">
                    <b-badge
                        v-for="tag in post.tags"
                        :key="tag"
                        variant="dark"
                        >
                        {{ tag }}
                    </b-badge>
                    </div>
                    <b-button
                    variant="outline-info"
                    size="md" class="blog-read-link"
                    :to="post.link"
                    >
                    Read
                    </b-button>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-container>
      </div>
  </b-container>
  </div>
</template>
<script>
import writings from "../static/writings.json"

export default {
    head: {
        title: 'Writing'
    },
    data() {
        return {
            myWriting: writings
        }
    },
    mounted() {
        console.log(writings)
    },
    methods: {

    }
};
</script>

<style lang="css">
  .post-container {
    max-width: 800px;
    margin-top: 50px
  }

  .tag-holder {
      padding-top: 20px;
      padding-bottom: 20px
  }

  .tag-holder .badge-dark {
      margin: 3px;
      padding: 5px
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
