<template>
  <div class="sidebar">
    <div class="logo">L</div>
    <p class="main">color main</p>
    <p class="secondary">
      color secondary
      <span class="text-secondary">text secondary</span>
      <a href="#" class="accent">accent secondary</a>
    </p>
    <a href="#" class="accent-secondary">accent secondary</a>
    <a href="#" class="accent">accent main</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Sidebar extends Vue {}
</script>

<style lang="scss"></style>
