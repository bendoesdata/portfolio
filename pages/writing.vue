<template>
  <div class="post-container mx-auto">
    <b-container class="">
    <h1 class="mb-4">Blogs, articles and tutorials</h1>
    <br>
      <div v-for="post in myWriting" :key="post.title">
        <b-container fluid>
          <b-card no-body class="overflow-hidden mb-4 blog-preview">
            <b-row no-gutters>
              <b-col md="4">
                <a :href="post.link" target="_blank">
                  <b-card-img fluid :src="post.imageLink" class="rounded-0"></b-card-img>
                </a>
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
                    :href="post.link"
                    target="_blank"
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
    max-width: 900px;
    margin-top: 40px;
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
    margin-top:5px
  }

  h4.card-title {
    font-size: 26px;
    margin-bottom: 10px
  }

  h6.card-subtitle.text-muted {
    color: rgb(185) !important;
    font-size: 18px;
    margin-top:20px;
    font-family: "CircReg", sans-serif
  }
</style>
