<template>
  <section class="hero-body">
    <ElectricNetEffect />
    <HomeLeft />
    <HomeRight />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import HomeLeft from '@/containers/home.left.vue';
import HomeRight from '@/containers/home.right.vue';
import ElectricNetEffect from '@/components/electric-net-effect.vue';

@Component({
  components: {
    HomeLeft,
    HomeRight,
    ElectricNetEffect,
  },
})
export default class Home extends Vue {}
</script>
