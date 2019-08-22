<template>
  <div
    :class="{
      'has-text-primary': type === 'primary' || type === 'success',
      'has-text-accent': type === 'accent' || type === 'error',
    }"
    class="box has-background-dark has-text-primary"
  >
    {{ text }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component
export default class MessageBox extends Vue {
  @Prop({ type: String, required: true })
  text!: string;

  @Prop({ type: String, default: 'primary' })
  type!: string;
}
</script>
