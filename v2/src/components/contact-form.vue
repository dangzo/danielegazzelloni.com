<template>
  <form>
    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Name" />
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class ContactForm extends Vue {}
</script>
