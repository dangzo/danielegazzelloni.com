<template>
  <div class="container section has-text-left">
    <h1 class="home-heading has-text-left">
      <span>Hi,</span>
      <span>I'm <em class="name">Daniele</em>,</span>
      <span>web developer.</span>
    </h1>
    <h2 class="subtitle">Front-end / JavaScript / Vue / CSS3.</h2>
    <a href="#" target="_blank" class="button is-primary">
      Contact me
    </a>
  </div>
</template>

<style lang="scss">
.home-heading {
  font-weight: 800;
  font-size: 4.2rem;
  line-height: 4.5rem;
  color: $light;

  em {
    font-style: italic;

    &.name {
      font-weight: 600;
      color: $accent;
    }
  }

  span {
    display: block;
  }
}
</style>
