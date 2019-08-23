<template>
  <div class="container section">
    <div class="timeline is-centered">
      <div class="timeline-item is-primary">
        <div class="timeline-marker is-primary"></div>
        <div class="timeline-content">
          <p class="heading">November 2012</p>
          <p>Graduated in Computer Engineering.</p>
          <p>I didn't want to see any kind of book for 4 months.</p>
        </div>
      </div>
      <div class="timeline-item is-primary">
        <div class="timeline-marker is-primary"></div>
        <div class="timeline-content">
          <p class="heading">April 2013</p>
          <p>First in-office job, quitting after 3 months.</p>
          <p>Read about remote work for the first time.</p>
          <p>Started making websites: jQuery, PHP, CSS, ...</p>
        </div>
      </div>
      <div class="timeline-item is-primary">
        <div class="timeline-marker is-primary"></div>
        <div class="timeline-content">
          <p class="heading">February 2014</p>
          <p>First telecommute job: half remote, half in-office.</p>
          <p>Backend developer: Node.js, OracleDB, ...</p>
        </div>
      </div>
      <div class="timeline-item is-primary">
        <div class="timeline-marker is-primary"></div>
        <div class="timeline-content">
          <p class="heading">February 2015</p>
          <p>Freelancing at Elance/Upwork.</p>
          <p>MEAN stack: Node.js, Express, Angular, MongoDB.</p>
        </div>
      </div>
      <div class="timeline-item is-primary">
        <div class="timeline-marker is-primary"></div>
        <div class="timeline-content">
          <p class="heading">May 2015</p>
          <p>Moved to Tenerife, started living by myself.</p>
          <p>Hard beginning: no money after only 2 months 😅</p>
        </div>
      </div>
      <div class="timeline-item is-primary">
        <div class="timeline-marker is-primary"></div>
        <div class="timeline-content">
          <p class="heading">December 2015</p>
          <p>First real remote job.</p>
          <p>3 years of full-stack JavaScript with Meteor.js.</p>
        </div>
      </div>
      <div class="timeline-item is-primary">
        <div class="timeline-marker is-primary"></div>
        <div class="timeline-content">
          <p class="heading">November 2018</p>
          <p>Real startup environment, real startup problems.</p>
          <p>Full-stack dev: Vue, Node, PostreSQL, ...</p>
        </div>
      </div>
      <div class="timeline-item is-primary">
        <div class="timeline-marker is-primary"></div>
        <div class="timeline-content">
          <p class="heading">July 2019</p>
          <p>Full focus on frontend: Vue.js.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class AboutRight extends Vue {}
</script>

<style lang="scss" scoped>
@import 'node_modules/bulma-timeline/dist/css/bulma-timeline.sass';

.container,
.section {
  margin-top: 0;
  margin-bottom: 0;

  .timeline-content {
    font-size: 0.85rem;

    .heading {
      margin-right: 0;
      margin-left: 0;
    }

    p:nth-child(n + 2) {
      margin: 0;

      @media (max-width: 768px) {
        margin: 0.4rem 0;
      }
    }
  }
}
</style>
