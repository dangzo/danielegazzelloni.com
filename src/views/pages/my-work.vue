<template>
  <section class="hero-body">
    <MyWorkLeft />
    <MyWorkRight />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import MyWorkLeft from '@/containers/my-work.left.vue';
import MyWorkRight from '@/containers/my-work.right.vue';

@Component({
  components: {
    MyWorkLeft,
    MyWorkRight,
  },
})
export default class MyWork extends Vue {}
</script>
