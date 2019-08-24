<template>
  <div class="container section">
    <div class="skills-container">
      <h5 class="is-uppercase">Skills</h5>
      <div class="skills-box">
        <h5 class="heading">Modern JavaScript</h5>
        <progress class="progress is-line is-primary" value="90" max="100">90%</progress>

        <h5 class="heading">TypeScript</h5>
        <progress class="progress is-line is-primary" value="97" max="100">97%</progress>
      </div>
    </div>
    <div class="skills-container">
      <h5 class="is-uppercase">Front-end</h5>
      <div class="skills-box">
        <h5 class="heading">Vue.js</h5>
        <progress class="progress is-line is-primary" value="97" max="100">97%</progress>

        <h5 class="heading">React</h5>
        <progress class="progress is-line is-primary" value="70" max="100">70%</progress>

        <h5 class="heading">HTML/CSS</h5>
        <progress class="progress is-line is-primary" value="100" max="100">100%</progress>
      </div>
    </div>
    <div class="skills-container">
      <h5 class="is-uppercase">Back-end</h5>
      <div class="skills-box">
        <h5 class="heading">Node.js</h5>
        <progress class="progress is-line is-primary" value="85" max="100">85%</progress>

        <h5 class="heading">Meteor.js</h5>
        <progress class="progress is-line is-primary" value="85" max="100">85%</progress>

        <h5 class="heading">WordPress dev</h5>
        <progress class="progress is-line is-primary" value="60" max="100">60%</progress>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.skills-container {
  max-width: 500px;
  margin: 2.5rem auto;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 1100px) {
    max-width: none;
  }

  .skills-box {
    margin-top: 1rem;

    .heading {
      font-weight: 800;
    }
    .progress {
      &.is-line {
        height: 2px !important;
        border-radius: 2px !important;
      }
    }
  }
}
</style>
