<template>
  <div class="case-study-wrapper">
    <div class="box">
        <b-img fluid src="/images/projects_algae-trees.png"></b-img>
        <div class="header-text">
            <h1 style="color: white">Interactive Essay on Climate Change</h1>
        </div>
    </div>

    <b-container class="project-intro"
    fluid>
        <h3>Parametric Press is an interactive digital magazine that unpacks complex topics using data stories. For their issue on climate change, I reported, wrote, designed, and coded an interactive article on the carbon sequestration potential of algae technology.</h3>
    </b-container>

    <!-- description of project -->
    <b-container fluid>
        <b-row>
          <b-col md="1"></b-col>
          <b-col cols="12" md="7">
            <transition name="slide-fade">
              <b-container v-if="loaded" class="project-description">
                  <h2>The Project</h2>
                  <p>
                      I started this project out by wanting to write about the carbon removal potential of algae (it's so small! so efficient! so green!). But the deeper I got into the science, I realized that to make a convincing argument I also needed to address other, better-known methods of natural carbon removal (like trees).
                  </p>
                  <p>
                       What started as a niche idea on algae carbon sequestration turned into a giant piece of reporting on the state of our climate pathway, the limitations of trees, the promise of algae, and the reality that there's no perfect solution...
                  </p>
                  <p>
                      Trees became the giant, environmental elephant in the room: everybody loves them, even President Trump, who has otherwise been notoriously anti-climate-action. You may remember <a href="https://science.sciencemag.org/content/365/6448/76" target="_blank">the study</a> that broke every headline last year claiming that planting 1.2 trillion tree saplings on 1.7 billion hectares could remove 2/3rds of all human emissions. Trees have huge potential for helping to cool our planet and regulate levels of carbon dioxide.
                  </p>
                  <p>
                      So who needs algae if we can just plant a bunch of trees? sounds great, except this plan is plagued with problems from the start. We need land (running out of), we need time (not much left of it), we need to keep forests from burning (not a great time for forests recently). 
                </p>
                <p>
                    I went searching for data to show why it was so risky to put all our hopes on trees. I searched for hours and hours for that perfect, tidy CSV file which would contain conclusive proof to even one question: "how much land is left? how much time is left?". This magical dataset never came.
                </p>
                <p>
                    So I talked to some smart people about it. Turns out there are rarely any simple answers with climate change. Depends on who you ask, what they study, what methodology they used, how many assumptions. TL;DR it's complicated, and anyone who says otherwise likely has an agenda.
                </p>
                <p>
                    So I had an answer, even if it wasn't very satisfying: if our climate change problems are complex, then our solutions should be equally thoughtful, interwoven, and interconnected.  But I still had a story to tell, and I wanted to make the science more digestable...so I went to work creating an explorable essay that could really communicate this message with impact.
                </p>
              </b-container>
            </transition>
          </b-col>
          <b-col md="4"></b-col>
        </b-row>
    </b-container>

    <!-- insert some photos or grid of photos -->
    <b-container fluid>
        <b-row no-gutters>
            <b-col md="2"></b-col>
            <b-col md="8">
                <b-img fluid src="/images/algae/projects_algae-title.png"></b-img>
                <!-- <p class="caption">A mockup of the new, simplified login page for the dashboard.</p> -->
            </b-col>
            <b-col md="2"></b-col>
        </b-row>
    </b-container>

    <!-- contributions / detail of solution -->
    <b-container fluid>
        <b-row>
            <b-col md="1"></b-col>
          <b-col md="4" style="margin-top: 30%">
              <b-img fluid src="/images/algae/projects_algae-trees-mobile.png"></b-img>
            <p class="caption">Mobile version of a simulation I created to show how trees, when left unprotected, can contribuet to a circular feedback loop of recycling the same CO2 back into the air (instead of removing it from the air permanently).</p>
            </b-col>
          <b-col cols="12" md="7">
            <transition name="slide-fade">
              <b-container v-if="loaded" class="project-description">
                  <h2>Process</h2>
                  <p>
                      Over the course of a few months, I delved into many research papers on the benefits and limits of tree planting for carbon removal. I also read about massive algae farms placed next to power plants in order to suck out CO2 from the air. I then synthesized this research into what I hoped was simpler language.
                  </p>
                  <p>
                      To communicate the problem of tree planting, instead of visualizing some data, I went with a simulation. The estimates are real, but the implementation is sped up and altered for a better user experience. I wanted to show the circular process: if trees die, you lose all the carbon once removed.
                  </p>
                  <p>
                       I learned that to communicate this science, there would have to be tradeoffs. It's a strange argument to make: trees are too complicated, let's pour millions of $ into algae research and start a bunch of algae farms! This is not a great takeaway. We need both. We need everything.
                  </p>
                  <p>
                      Communicating this kind of science is difficult. But it's more important than ever. We are running out of time to avoid irreversible changes to our environment. My hope is that, however imperfect the implementation, interactive storytelling can help to better spread the science that could save us.
                  </p>

                  <b-button
                  href="https://parametric.press/issue-02/algae/"
                  variant="outline-info"
                  target="_blank"
                  size="lg"
                  style="margin-top: 20px">
                    Read the story
                    </b-button>
              </b-container>
            </transition>
          </b-col>
          <b-col md="1"></b-col>
        </b-row>

        <b-row no-gutters>
            <b-col md="1"></b-col>
            <b-col md="5">
                <b-img fluid style="max-width: 600px; margin-left: 10%" src="/images/algae/tree-screenshot-0.png"></b-img>
                <p class="caption">This tree simulation proved one of the trickiest parts of the piece: when a user clicks start, bubbles of CO2 begin to disappear into the trees.</p>
            </b-col>
            <b-col md="5">
                <b-img fluid style="max-width: 600px; margin-left: 10%" src="/images/algae/tree-screenshot-2.png"></b-img>
                <p class="caption">But as time goes on, trees die and release these blue dots (sequestered) back into the atmosphere of red dots.</p>
            </b-col>
            <b-col md="1"></b-col>
        </b-row>

        <b-row>
          <b-col md="1"></b-col>
          <b-col cols="12" md="7">
            <transition name="slide-fade">
              <b-container v-if="loaded" class="project-description">
                  <h3>
                    Visual highlights
                  </h3>
              </b-container>
            </transition>
          </b-col>
          <b-col md="4"></b-col>
        </b-row>
    </b-container>

    <b-container fluid>
        <b-row>
            <b-col md="1"></b-col>
            <b-col md="5">
                <b-img fluid src="/images/algae/radar.png"></b-img>
                <p class="caption">A radar chart comparing Algae as a BECCS method with other methods of carbon capture..</p>
            </b-col>
            <b-col md="5">
                <b-img fluid src="/images/algae/line-chart.png"></b-img>
                <p class="caption">A line chart showing the 4 RCP pathways of carbon emissions esimated by the IPCC.</p>
            </b-col>
            <b-col md="1"></b-col>
        </b-row>
        <b-row style="margin-top: 30px">
            <b-col md="1"></b-col>
            <b-col md="5">
                <b-img fluid src="/images/algae/map.png"></b-img>
                <p class="caption">A map from the Global Forest Watch showing tree cover loss over the past decade.</p>
            </b-col>
            <b-col md="5">
                <b-img fluid src="/images/algae/icons.png"></b-img>
                <p class="caption">Custom drawn icons to show the multiple uses of algae byproduct.</p>
            </b-col>
            <b-col md="1"></b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-container style="margin-top: 50px">
              <h3>
                Want to talk about this work? <a href="mailto:benjamincooley94@gmail.com" target="_blank">Get in touch</a>.
              </h3>
            </b-container>
          </b-col>
        </b-row>
    </b-container>

  </div>
</template>

<script>
  export default {
    head: {
      title: 'Algae Essay'
    },
    data: function() {
    return {
      loaded: false
    }
  },
  mounted() {
    this.loaded = true;
  },
  methods: {
    onLoaded() {
      this.loaded = true;
    }
  }
  }
</script>
