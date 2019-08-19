<template>
  <section class="hero-body">
    <SkillsLeft />
    <SkillsRight />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import SkillsLeft from '@/containers/skills.left.vue';
import SkillsRight from '@/containers/skills.right.vue';

@Component({
  components: {
    SkillsLeft,
    SkillsRight,
  },
})
export default class Skills extends Vue {}
</script>
