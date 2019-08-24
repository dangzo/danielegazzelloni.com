<template>
  <div class="container">
    <AboutTimeline />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import AboutTimeline from '@/components/about-timeline.vue';

@Component({
  components: {
    AboutTimeline,
  },
})
export default class AboutRight extends Vue {}
</script>
