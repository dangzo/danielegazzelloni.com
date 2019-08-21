<template>
  <div class="container section">
    <h1>About</h1>
    <h2 class="subtitle">Some insights of who's this guy</h2>
    <div class="main-content">
      <p>
        I'm an Italian developer with a passion for <em>frontend dev</em> and JavaScript technologies, like
        <em>Vue.js</em> and <em>TypeScript</em>.
      </p>
      <p>
        I got my first office job in 2013 and I fired myself after only 3 months: I simply couldn't work that way. Since
        then I decided to follow the path of <em>remote working</em>, forging by myself the person I am now.
      </p>

      <ul>
        <li>Graduated in Computer Engineering in 2012</li>
        <li>Full-stack background but addicted to front-end</li>
        <li>Worked in many startup environments and small teams</li>
        <li>Built and maintained a business web/mobile app for 3 years as a single product developer</li>
        <li>Speaking fluently English, Spanish and Italian</li>
        <li>Loving cats and pandas <span class="emoji">🤷🏻‍♂️</span></li>
      </ul>
      <p>I also love life so much!</p>
      <p>
        That's why when I'm not coding I'm usually <em>running</em>, <em>hiking</em>, <em>rock climbing</em>,
        <em>playing tennis</em>, <em>gaming</em>, <em>watching movies</em>, <em>cooking</em> or just
        <em>eating a lot</em>.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
p:last-child {
  em {
    color: $light;
  }
}
ul {
  margin-top: 2.5rem;
  margin-bottom: 3rem;
  border-left: 5px $primary solid;

  li {
    color: $light;
    font-style: italic;

    &:last-child {
      margin-top: -0.5rem;

      .emoji {
        position: relative;
        top: 0.25rem;
        left: 0.2rem;
        font-size: 1.4rem;
        font-style: normal;
      }
    }
  }
}
</style>
