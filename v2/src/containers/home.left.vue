<template>
  <div class="container section">
    <h1 class="home-heading">
      <span>Hi,</span>
      <span>I'm <em class="name">Daniele</em>,</span>
      <span>web developer.</span>
    </h1>
    <h2 class="subtitle">Front-end / JavaScript / Vue / CSS3.</h2>
    <a href="/contact" class="button is-primary">
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

  @media (max-width: 1550px) {
    font-size: 3.7rem;
    line-height: 3.9rem;
  }

  @media (max-width: 1150px) {
    font-size: 3.5rem;
    line-height: 3.7rem;
  }

  @media (max-width: 580px) {
    font-size: 3.5rem;
    line-height: 3.8rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
    line-height: 2.8rem;
  }

  .name {
    font-weight: 600;
  }

  span {
    display: block;
  }
}
</style>
