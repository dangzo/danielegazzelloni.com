<template>
  <form>
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" />
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class ContactForm extends Vue {}
</script>
