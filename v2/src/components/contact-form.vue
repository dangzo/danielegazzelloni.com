<template>
  <form>
    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Name" />
      </div>
    </div>
    <div class="field">
      <div class="control">
        <input class="input" type="email" placeholder="Email" />
      </div>
    </div>
    <div class="field">
      <div class="control">
        <textarea class="textarea" placeholder="Your message"></textarea>
      </div>
    </div>
    <div class="control has-text-right">
      <button class="button is-primary">Submit</button>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class ContactForm extends Vue {}
</script>

<style lang="scss">
form {
  margin-top: 2rem;
  max-width: 600px;
}

.input,
.textarea {
  padding: 1.2rem;
}

.textarea {
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
}
</style>
