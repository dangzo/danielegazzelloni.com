<template>
  <div class="hero is-fullheight">
    <sidebar />
    <div class="hero-body">
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import sidebar from './parts/sidebar.vue';

@Component({
  components: {
    sidebar,
  },
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss" src="@/assets/styles/theme.scss"></style>
