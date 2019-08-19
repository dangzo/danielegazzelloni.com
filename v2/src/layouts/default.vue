<template>
  <section class="hero is-fullheight">
    <sidebar />
    <section class="hero-body">
      <nuxt />
    </section>
  </section>
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
