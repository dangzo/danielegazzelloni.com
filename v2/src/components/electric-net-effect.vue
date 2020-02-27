<template>
  <div id="electric-net-container">
    <canvas id="canvas-container"></canvas>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import ElectricNet from '@/libraries/js/electric-net';

@Component
export default class VantaJSEffect extends Vue {
  /* eslint-disable-next-line class-methods-use-this */
  mounted(): void {
    ElectricNet.startAnimation();
  }
}
</script>

<style lang="scss" scoped>
#electric-net-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background: transparent;
  overflow: hidden;
  background-size: cover;
  background-position: center center;
  z-index: 1;
}
</style>
