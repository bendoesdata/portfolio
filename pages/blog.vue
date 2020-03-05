<template>
  <div class="post-container mx-auto">
    <b-container class="">
    <h1 class="mb-3">My blog posts</h1>
    <br>
      <div v-for="post in posts" :key="post.attributes.title">
        <b-container fluid>
          <b-card
          :title="post.attributes.title"
          :sub-title="post.attributes.subtitle"
          :img-src="post.attributes.bannerimg"
          img-left
          :to="getPermalink(post)"
          class="mb-3 blog-preview">
          <div class="tag-holder">
            <b-badge
                v-for="tag in post.attributes.tags"
                :key="tag.tags"
                variant="dark"
                >
                  {{ tag }}
            </b-badge>
          </div>
            <b-button
            variant="outline-info"
            size="md" class="blog-read-link"
            :to="getPermalink(post)"
            >
            Read
            </b-button>
            <!-- <b-link href="#" class="card-link">Another link</b-link> -->
          </b-card>
        </b-container>
      </div>
  </b-container>
  </div>
</template>
<script>
const path = require("path");

export default {
  async asyncData() {
    const resolve = require.context("~/content/", true, /\.md$/);
    const imports = resolve.keys().map(key => {
      const [, name] = key.match(/\/(.+)\.md$/);
      return resolve(key);
    });
    return {
      posts: imports
    };
  },
  data() {
    return {
      prefix: 'posts'
    }
  },
  methods: {
    getPermalink(post) {
      if(post.attributes.hasOwnProperty('permalink')) {
        return `${this.prefix}/${post.attributes.permalink}`;
      } else {
        return  `${this.prefix}/${post.meta.resourcePath.split('\\').pop().split('/').pop().split('.')[0]}`;
        //return  `${this.prefix}/${path.basename(post.meta.resourcePath, ".md")}`;
      }
    }
  }
};
</script>

<style lang="css">
  .post-container {
    max-width: 700px;
    margin-top: 50px
  }

  .blog-read-link {
    margin-top: 0px
  }

  .blog-preview img {
    display: block;
    max-width:230px;
    width: auto;
    height: auto
  }

  h4.card-title {
    font-size: 32px;
    margin-bottom: 20px
  }

  h6.card-subtitle.text-muted {
    color: rgb(185) !important;
    font-size: 18px;
    font-family: "CircReg", sans-serif
  }
</style>
