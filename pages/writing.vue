<template>
  <div class="post-container mx-auto">
    <b-container class="">
    <h1 class="mb-4" style="padding-left: 10px">Blogs, articles and tutorials</h1>
    <p style="padding-left: 10px; margin-top: -20px">I also write a semi-weekly newsletter called <a href="https://mailchi.mp/7029eac7f34a/data-curious-signup" target="_blank">Data Curious</a>.</p>
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

    },
    methods: {

    }
};
</script>