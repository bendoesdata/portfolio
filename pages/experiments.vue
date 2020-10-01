<template>
  <div>
    <b-container fluid>
      <b-jumbotron header="Experiments" lead="Things I've built for fun, learning, curiosity and kicks.">
      </b-jumbotron>
    </b-container>

  <b-container class="experiment-cards-holder">
    <b-card-group columns>
        <b-card>
          <a href="/experimental-projects/frequency-flowers">
            <b-card-img src="/images/flowers.png" alt="Frequency Flowers" class="rounded-1"></b-card-img>
          </a>
            <b-card-text>
              <p>
                <span class="experiment-title">Frequency Flowers</span>.
                A user customizable audio visualization that transfroms a song into a flower.
              </p>
            </b-card-text>
        </b-card>
        <b-card>
          <a href="/experimental-projects/asteroids.html">
            <b-card-img src="/images/asteroids.png" alt="Near Earth Asteroids" class="rounded-1"></b-card-img>
          </a>
            <b-card-text>
              <p>
                <span class="experiment-title">Near Earth Asteroids</span>.
                A live visualization of near earth objects (mostly asteroids) passing earth today.
              </p>
            </b-card-text>
        </b-card>
        <b-card>
          <a href="/experimental-projects/codevember">
            <b-card-img src="/images/codevember-header.png" alt="Codevember2019" class="rounded-1"></b-card-img>
          </a>
            <b-card-text>
              <p>
              <span class="experiment-title">Codevember 2019</span>.
                That one month in 2019 I spent every day of November writing a new piece of creative code. Browse the 30 designs that came from it here .
              </p>
            </b-card-text>
        </b-card>
        <b-card>
          <a href="https://towardsdatascience.com/how-twitter-responded-an-hour-after-the-westminster-attacks-bd2823a31195">
            <b-card-img src="/images/gephi-graphic.png" alt="Codevember2019" class="rounded-1"></b-card-img>
          </a>
            <b-card-text>
              <p>
                <span class="experiment-title">How Terror Spreads</span>.
                A network analysis and diagram of Twitter activity in the hour folowing the 2018 Westminster stabbings.
              </p>
            </b-card-text>
        </b-card>
        <b-card>
        <a href="/experimental-projects/codevember/game-dash">
            <b-card-img src="/images/game-dash.png" alt="Codevember2019" class="rounded-1"></b-card-img>
          </a>
            <b-card-text>
              <p>
                <span class="experiment-title">Game Dash</span>.
                A little game built for #codevember using p5.js and p5.play.
              </p>
            </b-card-text>
        </b-card>
        <b-card>
        <a href="http://igor.gold.ac.uk/~bcool001/portfolio/trump-cabinet-conflicts/index.html">
            <b-card-img src="/experimental-projects/trump-network.png" alt="Trump Network Graph" class="rounded-1"></b-card-img>
          </a>
            <b-card-text>
              <p>
                <span class="experiment-title">Trump Cabinet Conflicts</span>.
                Using Buzzfeed's amazing Trumpworld dataset, I created an interactive data visualisation and scrollable story to analyze the connections between Trump's cabinet members and other sources.
              </p>
            </b-card-text>
        </b-card>
    </b-card-group>
  </b-container>
  </div>
</template>

<script>
import ProjectHighlight from '~/components/ProjectHighlight.vue'

  export default {
    head: {
      title: 'Experiments'
    },
    components: {
      ProjectHighlight
    },
  }
</script>
