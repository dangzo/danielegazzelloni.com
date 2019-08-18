<template>
  <div class="container is-fluid">
    <h1 class="home-heading has-text-left">
      <span>Hi,</span>
      <span>I'm Daniele,</span>
      <span>web developer.</span>
    </h1>
    <h2 class="subtitle">Front-end developer / Vue / CSS3.</h2>
    <h1>Simple h1</h1>
    <h2>Simple h2</h2>

    <div class="columns">
      <div class="column">
        <a href="#" target="_blank" class="button is-primary">
          Primary button
        </a>
        <a href="#" target="_blank" class="button is-accent">
          Accent button
        </a>
        <a href="#" target="_blank">
          Default link
        </a>
        <p class="main">color main</p>
        <a href="#" class="has-text-accent">accent link</a>
        <span class="has-background-accent">accent span</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss">
.home-heading {
  font-weight: 800;
  font-size: 4.2rem;
  line-height: 4.5rem;
  color: $light;

  span {
    display: block;
  }
}

.coulmns {
  padding-top: 15px;
}
</style>
