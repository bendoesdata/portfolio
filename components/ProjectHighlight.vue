<template>
  <div style="margin: 0">
    <b-container fluid>
      <b-row no-gutters>
        <b-col :order-md="setOrder" md>
          <b-container>
            <div class="project-summary mx-auto">
              <h2>{{ title }}</h2>
              <p>{{ summary }}</p>
              <b-button v-if="projectLink"
              :href="projectLink"
              variant="outline-info"
              size="md">
                Explore
              </b-button>
              <b-button v-if="caseStudyLink"
              :to="caseStudyLink"
              variant="outline-info"
              class="case-study-btn"
              size="md">
                Case study
              </b-button>
              <div class="tag-holder">
                <b-badge
                v-for="tag in projectTags"
                :key="tag.tags"
                variant="dark"
                >
                  {{ tag }}
                </b-badge>
              </div>
            </div>
          </b-container>
        </b-col>
        <b-col order-md="1" md>
          <div class="grow-img container">
            <transition name="fade">
              <b-img class="image"
              :src="image"
              fluid
              alt="Responsive image"
              v-on:load="onLoaded"
              v-show="loaded"></b-img>
            </transition>

          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ProjectHighlight',
  props: {
    title: {
      type: String,
      default: null
    },
    summary: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    },
    imageside: {
      type: String,
      default: "left"
    },
    caseStudy: {
      type: String,
      default: null,
      required: false
    },
    projectTags: {
      type: Array,
      required: false
    },
    caseStudyLink: {
      type: String,
      requred: false
    },
    projectLink: {
      type: String,
      requred: false
    }
  },
  data: function() {
    return {
      loaded: false
    }
  },
  computed: {
    setOrder() {
      if (this.imageside === "left") {
        return "1"
      } else {
        return "2"
      }
    }
  },
  methods: {
    onLoaded() {
      this.loaded = true;
    }
  }
}
</script>

<style lang="css">
  .project-summary {
    max-width: 450px;
    margin-top: 20%
  }

  .project-summary h2 {
    font-size: 3.5vmax
  }

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.container {
  position: relative;
  margin: 0;
  padding: 0
}

.container:hover .image {
  opacity: 0.5;
}

.container:hover .middle {
  opacity: 1;
}

.tag-holder {
  margin-bottom: 20px;
  margin-top: 20px;
}

.badge {
  padding: 5px;
  margin-right: 10px
}

.fade-enter-active {
  transition: opacity 2s ease-in-out;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter {
  opacity: 0;
}
</style>
