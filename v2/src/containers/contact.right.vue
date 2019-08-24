<template>
  <div class="container section">
    <div id="map-wrap">
      <no-ssr>
        <l-map :zoom="6" :center="[30.062507, -14.7352699]">
          <!-- prettier-ignore -->
          <l-tile-layer url="https://api.mapbox.com/styles/v1/danielegazzelloni/cjzq1lylk20dx1cp83ida1vzy/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGFuaWVsZWdhenplbGxvbmkiLCJhIjoiY2p6cTFqZ3FrMHFvNzNicjFucjIyYzRneiJ9.5kBll0lcY_zIVtZBk8WIBA"></l-tile-layer>
          <l-marker :lat-lng="[28.0575094, -16.7354284]"></l-marker>
        </l-map>
      </no-ssr>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class ContactRight extends Vue {}
</script>

<style lang="scss" scoped>
.container,
.section {
  padding: 0;

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
