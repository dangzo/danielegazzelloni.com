<template>
  <section class="hero-body">
    <ContactLeft />
    <ContactRight />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import ContactLeft from '@/containers/contact.left.vue';
import ContactRight from '@/containers/contact.right.vue';

@Component({
  components: {
    ContactLeft,
    ContactRight,
  },
})
export default class Contact extends Vue {}
</script>
