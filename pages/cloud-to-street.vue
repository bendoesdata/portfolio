<template>
  <div class="case-study-wrapper">
    <div class="box">
        <b-img fluid src="/images/c2s/c2s-mockup-top.png"></b-img>
        <div class="header-text">
            <h1 style="color: white">Cloud to Street UX Strategy & Design</h1>
        </div>
    </div>

    <b-container class="project-intro"
    fluid>
        <h3>Cloud to Street offers satellite flood monitoring and remote sensing for flood risk management. They needed to develop a centralized data dashboard that would help local governments and disaster relief groups respond quickly to real-time flood events.</h3>
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
                      This project started because of a blog post I published in 2018: <a href="https://uxdesign.cc/a-new-ux-method-for-building-better-data-visualization-products-22338762b61c" target="_blank">Questions to be Answered</a>. In this article I proposed a new UX method for building and designing dashboards, one which departs in significant ways from the traditional UX user journey model.
                  </p>
                  <p>
                      Cloud to Street approached me to help create a new dashboard based on this concept. They had the science, the data, and even a working prototype to show flood layers from remote sensors on a map. But they were struggling to get user interaction with the platform from customers. 
                  </p>
                  <p>
                      Cloud to Street team members were spending far too long digging out data for customers manually, responding to questions from local governments as floods were starting to break. At the same time, customers were confused as to how they could find this information for themselves through the online portal.
                  </p>
                  <p>
                    We needed to start from the beginning in order to create a UX strategy and design that increased user engagement. We also wanted to create a brand new design and layout for the Cloud to Street flood monitoring dashboard product, one that felt intuitive and natural for first-time users.
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
                <b-img fluid src="/images/c2s/projects_c2s.png"></b-img>
                <p class="caption">A mockup of the new, simplified login page for the dashboard.</p>
            </b-col>
            <b-col md="2"></b-col>
        </b-row>
    </b-container>

    <!-- contributions / detail of solution -->
    <b-container fluid>
        <b-row>
          <b-col md="4"></b-col>
          <b-col cols="12" md="7">
            <transition name="slide-fade">
              <b-container v-if="loaded" class="project-description">
                  <h2>Contributions</h2>
                  <p>
                      Over the course of a few months, I took a phased approach to developing the UX research, strategy, and design behind the new Cloud to Street dashboard. As the lead UX consultant on the project, I was responsible for managing the process from start to finish.
                  </p>
              </b-container>
            </transition>
          </b-col>
          <b-col md="1"></b-col>
        </b-row>

        <b-row>
          <b-col md="1"></b-col>
          <b-col cols="12" md="5">
            <transition name="slide-fade">
              <b-container v-if="loaded" class="project-description">
                  <h3>
                    Research
                  </h3>
                  <ul>
                    <li>
                      Create a UX vision and strategy document to define the Cloud to Street’s users, the problems they solve, and the challenges facing users
                    </li>
                    <li>
                      User journeys for three types of Cloud to Street users based on interviews with staff, local governemnt workers, and disaster relief groups like the World Food Program (WFP).
                    </li>
                    <li>
                      “Insight stories”: an alternative to user stories proposed in my original QTBA article
                    </li>
                  </ul>
              </b-container>
            </transition>
          </b-col>
          <b-col md="5">
            <b-img fluid src="/images/c2s/excel-sheet.png"></b-img>
            <p class="caption">A screenshot of my "insight stories" document. We used this spreadsheet template as a collaborative tool that matched up a user's question with their goal. Then, we matched these with a potential feature in the dashboard which could help to answer the original question.</p>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="4"></b-col>
          <b-col cols="12" md="7">
            <transition name="slide-fade">
              <b-container v-if="loaded" class="project-description">
                  <h3>
                    Wireframes
                  </h3>
                  <ul>
                    <li>
                      Built out wireframes in Figma that started to piece together our solutions from the discovery phase.
                    </li>
                  </ul>
              </b-container>
            </transition>
          </b-col>
          <b-col md="1"></b-col>
        </b-row>

        <b-row no-gutters>
            <b-col md="1"></b-col>
            <b-col md="5">
                <b-img fluid src="/images/c2s/chrome-pin.png"></b-img>
                <p class="caption">New feature that allowed users to drop a "pin" and perform an action at this lat/long point on the map.</p>
            </b-col>
            <b-col md="5">
                <b-img fluid src="/images/c2s/chrome-map-modal.png"></b-img>
                <p class="caption">To encourage user interaction, we wanted to allow users to easily investigate and reach out with questions around areas of interest.</p>
            </b-col>
            <b-col md="1"></b-col>
        </b-row>

        <b-row>
          <b-col md="1"></b-col>
          <b-col cols="12" md="7">
            <transition name="slide-fade">
              <b-container v-if="loaded" class="project-description">
                  <h3>
                    Designs
                  </h3>
                    <ul>
                      <li>
                        Figma designs for key components that the Cloud to Street tech team could use for their Alpha release.
                      </li>
                    </ul>
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
                <b-img fluid src="/images/c2s/c2s-mockup-singlemap.png"></b-img>
                <p class="caption">Flood risk was assigned by district and region, and then shaded on the map.</p>
            </b-col>
            <b-col md="5">
                <b-img fluid src="/images/c2s/c2s-mockup-compare.png"></b-img>
                <p class="caption">Most users wanted to compare a current flood event to a historical one, so we also added a view that allowed for dual-panning across two geospatial datasets.</p>
            </b-col>
            <b-col md="1"></b-col>
        </b-row>
        <b-row style="margin-top: 30px">
            <b-col md="1"></b-col>
            <b-col md="5">
                <b-img fluid src="/images/c2s/dashboard.png"></b-img>
                <p class="caption">The full dashboard mockup. Each card serves to answer a different set of questions from the user.</p>
            </b-col>
            <b-col md="5">
                <b-img fluid src="/images/c2s/dashboard-compared.png"></b-img>
                <p class="caption">The dashboard with "comparison" view turned on.</p>
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
      title: 'Cloud to Street'
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
