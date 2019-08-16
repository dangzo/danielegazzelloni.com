<template>
  <section class="container">
    <div>
      <h1 class="main-heading">
        <span>Hi,</span>
        <span>I'm Daniele Gazzelloni,</span>
        <span>front-end developer.</span>
      </h1>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green bg-accent">
          Documentation
        </a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">
          GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss">
.main-heading {
  span {
    display: block;
    text-align: left;
  }
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.links {
  padding-top: 15px;
}
</style>
