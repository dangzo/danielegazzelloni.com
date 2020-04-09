<template>
  <section class="hero-body">
    <!-- <ElectricNetEffect /> -->
    <HomeLeft />
    <HomeRight />
  </section>
</template>

<script>
import HomeLeft from "@/containers/Home.left.vue";
import HomeRight from "@/containers/Home.right.vue";
// import ElectricNetEffect from '@/components/electric-net-effect.vue';

export default {
  name: "Home",
  components: {
    HomeLeft,
    HomeRight
    // ElectricNetEffect,
  }
};
</script>
