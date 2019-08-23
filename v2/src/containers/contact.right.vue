<template>
  <div class="container section">
    <div id="map-wrap">
      <no-ssr>
        <!--
        <l-map :zoom="4" :center="[28.062507, -16.7352699]">
          <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
          <l-marker :lat-lng="[28.062507, -16.7352699]"></l-marker>
        </l-map>
        -->
        <v-mapbox access-token="no-token" map-style="mapbox://styles/mapbox/satellite-streets-v10"></v-mapbox>
      </no-ssr>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
// import Vue2MapboxGL from 'vue2mapbox-gl';

@Component
export default class ContactRight extends Vue {}
</script>

<style lang="scss" scoped>
.container,
.section {
  padding: 0;

  .mapboxgl-map {
    width: 100%;
    height: 100%;
  }

  /deep/.leaflet-control-container {
    display: none;
  }

  #map-wrap {
    height: 100vh;
    margin-top: -3rem;
    margin-right: -4rem;
    margin-bottom: -3rem;

    @media (max-width: 1100px) {
      height: 400px;
      margin: 0;
    }
  }
}
</style>
