<template>
  <div class="container section has-text-left">
    <h1>Contact Me</h1>
    <h2 class="subtitle">Because every great portfolio website has a cool contact form</h2>

    <div class="main-content">
      <p>Use the following form to get in touch about projects, cooperation or ideas.</p>
      <p>I promise to not bite :)</p>
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
