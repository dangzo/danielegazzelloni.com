<template>
  <section class="hero-body">
    <AboutLeft />
    <AboutRight />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import AboutLeft from '@/containers/about.left.vue';
import AboutRight from '@/containers/about.right.vue';

@Component({
  components: {
    AboutLeft,
    AboutRight,
  },
})
export default class About extends Vue {}
</script>
