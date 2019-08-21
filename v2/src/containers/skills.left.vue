<template>
  <div class="container section">
    <h1>Skills &amp; Experience</h1>
    <h2 class="subtitle">What I'm very good at...</h2>

    <div class="main-content">
      <!-- eslint-disable -->
      <p>
        I mainly do <em>front-end development</em>, building web apps components and interactive layouts.
      </p>

      <p>I love <em>Vue.js</em>, <em>JavaScript</em> (<em>TypeScript</em>) and <em>HTML/CSS</em>.</p>

      <p>
        I have a keen eye for design and I strive for pixel perfection.
      </p>

      <p>
        I like writing good quality code following common best practices: KISS, DRY, code readability, ...
      </p>

      <p>
        I have full-stack experience (<em>Node.js</em>, <em>Meteor.js</em>), and good knowledge of WordPress and React.
      </p>

      <p>
        Any question? Visit my
        <a href="" target="_blank" alt="Daniele's LinkedIn profile" title="Daniele's LinkedIn profile">LinkedIn</a>
        profile or just <nuxt-link to="/contact" alt="Contact me" title="Contact me">drop me a line</nuxt-link>!
      </p>
      <!-- eslint-enable -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class SkillsLeft extends Vue {}
</script>

<style lang="scss" scoped>
p:last-child {
  margin-top: 3em;
}
</style>
