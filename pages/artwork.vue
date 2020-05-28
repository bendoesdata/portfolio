<template>
  <div>
    <b-container fluid>
      <b-jumbotron header="Artwork" lead="Visual art made from code and data.">
      </b-jumbotron>
    </b-container>

  <b-container style="max-width: 1400px">
    <b-card-group columns>
        <b-card v-for="art in artwork" :key="art.name">
            <b-card-img :src="art.imageLink" alt="artwork-print" class="rounded-0"></b-card-img>
        </b-card>
    </b-card-group>
  </b-container>
  </div>
</template>

<script>
import ProjectHighlight from '~/components/ProjectHighlight.vue';
import artwork from '../static/art.json';

  export default {
    head: {
      title: 'Experiments'
    },
    data() {
        return {
            artwork: artwork
        }
    },
    mounted() {
        // console.log()
    }
  }
</script>
