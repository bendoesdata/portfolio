<template>
  <div>
    <b-container fluid class="markdown-holder">
      <div class="header-holder">
        <h1 class="blog-title">{{ title }}</h1>
        <h4 class="blog-subtitle">{{ subtitle }}</h4>
        <div class="tag-holder blog-tag-holder">
          <b-badge
          v-for="tag in tags"
          :key="tag.tags"
          variant="dark"
          >
            {{ tag }}
          </b-badge>
        </div>
      </div>
      <b-img fluid :src="bannerimg" class="blog-banner-image" alt=""/>
      <div style="margin: auto; text-align: center">
        <b-button v-if="projectLink"
              :href="projectLink"
              variant="outline-info"
              size="md"
              target="_blank"
              style="margin-bottom: 30px; text-align: center"
              >
                Explore the project
      </b-button>
      </div>
      <component :is="singlePostComponent" />
      <hr>
      <b-container style="margin: auto">
        <h3 style="text-align: center; margin-top: 20px">Share</h3>
      <!-- can use hashtag array as prop too -->
      <social-sharing :url="shareUrl"
                      :title="title"
                      :description="subtitle"
                      :quote="subtitle"
                      twitter-user="bendoesdata"
                      inline-template
                      class="sharing-holder">
        <div>
          <network network="facebook">
            <img src="/icons/facebook.svg" width=30px alt="">
          </network>
          <network network="linkedin">
            <img src="/icons/linkedin.svg" width=30px alt="">
          </network>
          <network network="twitter">
            <img src="/icons/twitter.svg" width=30px alt="">
          </network>
          <network network="whatsapp">
            <img src="/icons/whatsapp.svg" width=30px alt="">
          </network>
        </div>
      </social-sharing>
      </b-container>
    </b-container>
  </div>
</template>
<script>
import SocialSharing from 'vue-social-sharing'

export default {
  components: {
      SocialSharing
    },
  computed: {
    shareUrl() {
      const currentUrl = 'https://bendoesdataviz.com' + this.$route.fullPath + '/';

      return currentUrl
    }
  },
  async asyncData({ params }) {
    try {
      console.info(params.slug);
      let post = await import(`~/content/${params.slug}.md`);
      return {
        title: post.attributes.title,
        subtitle: post.attributes.subtitle,
        tags: post.attributes.tags,
        bannerimg: post.attributes.bannerimg,
        projectLink: post.attributes.projectLink,
        singlePostComponent: post.vue.component
      };
    } catch (err) {
      console.debug(err);
      return false;
    }
  }
};
</script>

<style lang="css" scoped>
  .markdown-holder {
    max-width:850px;
    margin-top: 200px;
    margin: auto
  }

  .frontmatter-markdown p img {
    width: 300px
  }

  h1.blog-title {
    font-size: 56px;
    margin-top: 100px;
    max-width: 850px;
    margin-bottom: 10px
  }

  .blog-subtitle {
    color: rgb(140, 140, 140);
    margin-bottom: 50px;
    font-family: "CircReg", sans-serif;
  }

  .blog-banner-image {
    margin-bottom: 40px;
  }

  .blog-tag-holder {
    margin-top: -20px;
    margin-bottom: 30px;
  }

  .blog-tag-holder span.badge {
    margin-right: 10px
  }

  .header-holder {
    max-width: 850px;
    margin: auto;
  }

  .header-holder h1 {
    margin-left: -5px
  }

  h2 {
    margin-bottom: 300px
  }

  p {
    font-size: 20px
  }

  .sharing-holder {
    margin: auto;
    margin-top: 30px;
    text-align: center;
  }

  .sharing-holder span {
    margin-left: 30px;
    padding: 30px
  }
</style>
