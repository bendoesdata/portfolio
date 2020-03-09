<template>
  <div>
    <b-container fluid class="markdown-holder">
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
    </b-container>
  </div>
</template>
<script>
export default {
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
    max-width:750px;
    margin-top: 200px;
    margin: auto
  }

  .frontmatter-markdown p img {
    width: 300px
  }

  .blog-title {
    font-size: 56px;
    margin-top: 100px
  }

  .blog-subtitle {
    color: rgb(140, 140, 140);
    margin-bottom: 50px;
    font-family: "CircReg", sans-serif
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

  h2 {
    margin-bottom: 300px
  }

  p {
    font-size: 20px
  }
</style>
