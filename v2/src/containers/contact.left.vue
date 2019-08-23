<template>
  <div class="container section">
    <h1>Contact Me</h1>
    <h2 class="subtitle">Because every great portfolio website has a cool contact form</h2>

    <div class="main-content">
      <p>Use the form below to get in touch about projects, cooperation or ideas. I promise to not bite :)</p>
      <ContactForm />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import ContactForm from '@/components/contact-form.vue';

@Component({
  components: {
    ContactForm,
  },
})
export default class ContactLeft extends Vue {}
</script>

<style lang="scss" scoped>
.container,
.section {
  position: relative;
  top: 6rem;

  @media (max-width: 1100px) {
    top: 0rem;
  }

  .main-content {
    max-width: 600px;
  }
}
</style>
