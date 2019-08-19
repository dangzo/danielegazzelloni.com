<template>
  <section class="hero-body">
    <HomeLeft />
    <HomeRight />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import HomeLeft from '@/containers/home.left.vue';
import HomeRight from '@/containers/home.right.vue';

@Component({
  components: {
    HomeLeft,
    HomeRight,
  },
})
export default class Home extends Vue {}
</script>
