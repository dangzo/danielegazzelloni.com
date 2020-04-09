<template>
  <div class="form-container">
    <form :class="{ 'has-zero-opacity': formSent }" @submit.prevent="checkFormValidity">
      <div class="field">
        <div class="control">
          <input
            ref="name"
            v-model.trim="name"
            :readonly="loading"
            :class="{
              input: true,
              'is-invalid': dirtyFields.includes('name'),
            }"
            type="text"
            placeholder="Name"
            @focus="clearValidity('name')"
          />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input
            ref="email"
            v-model.trim="email"
            :readonly="loading"
            :class="{
              input: true,
              'is-invalid': dirtyFields.includes('email'),
            }"
            type="email"
            placeholder="Email"
            @focus="clearValidity('email')"
          />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <textarea
            ref="message"
            v-model.trim="message"
            :readonly="loading"
            :class="{
              textarea: true,
              'is-invalid': dirtyFields.includes('message'),
            }"
            placeholder="Your message"
            @focus="clearValidity('message')"
          ></textarea>
        </div>
      </div>
      <div class="control has-text-right">
        <button :class="{ 'is-loading': loading }" class="button is-primary">Submit</button>
      </div>
    </form>

    <!-- Displayed on success -->
    <div v-if="formSent" class="message-box-container">
      <MessageBox :text="`Thank you! I will answer you as soon as possible!`" :type="`primary`" />
    </div>

    <!-- Displayed on error -->
    <div :class="{ 'has-zero-opacity': !hasError }" class="message-box-container has-error">
      <MessageBox :text="`Oops! Something went wrong. Did you check your internet connection?`" :type="`accent`" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import axios from 'axios';
// Local components
import MessageBox from './message-box.vue';

@Component({
  components: {
    MessageBox,
  },
})
export default class ContactForm extends Vue {
  // Local state
  dirtyFields: string[] = [];

  loading = false;

  formSent = false;

  hasError = false;

  name = '';

  email = '';

  message = '';

  errorMessage = '';

  setDirty(fieldName: string): void {
    if (!this.dirtyFields.includes(fieldName)) {
      this.dirtyFields.push(fieldName);
    }
  }

  clearValidity(fieldName: string): void {
    this.hasError = false;
    this.dirtyFields = this.dirtyFields.filter((name: string) => name !== fieldName);
  }

  checkFieldValidity(fieldName: string): void {
    const fieldValue = (this.$refs[fieldName] as HTMLFormElement).value;

    if (!fieldValue) {
      this.setDirty(fieldName);
    }

    // For message and name we only need to check they are not empty
    if (fieldValue.length < 1) {
      this.setDirty(fieldName);
    }

    // Add additional checks for email field
    if (fieldName === 'email') {
      /* prettier-ignore */
      const isEmailValid =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(fieldValue);

      if (!isEmailValid) {
        this.setDirty(fieldName);
      }
    }
  }

  checkFormValidity(): void {
    Object.keys(this.$refs).forEach((fieldName: string) => {
      this.checkFieldValidity(fieldName);
    });

    // Form is valid!
    if (this.dirtyFields.length === 0) {
      this.sendForm();
    }
  }

  async sendForm(): Promise<void> {
    this.loading = true;

    try {
      // Wait for 2-3 seconds to let the user appreciate our loading animation
      await new Promise((resolve): void => {
        setTimeout(resolve, 2800);
      });

      await axios({
        method: 'post',
        url: '/phpmailer/sendEmail.php',
        data: {
          name: this.name,
          email: this.email,
          message: this.message,
        },
      });

      this.formSent = true;
    } catch (error) {
      this.hasError = true;
    }

    this.loading = false;
  }
}
</script>

<style lang="scss">
.form-container {
  position: relative;
  margin-top: 2rem;
  max-width: 600px;

  form {
    position: relative;
    z-index: 2;
    -webkit-transition: opacity 400ms ease-out;
    -moz-transition: opacity 400ms ease-out;
    -o-transition: opacity 400ms ease-out;
    transition: opacity 400ms ease-out;

    .input,
    .textarea {
      padding: 1.2rem;
    }

    .textarea {
      padding-top: 0.8rem;
      padding-bottom: 0.8rem;
    }

    .is-invalid {
      border: solid 1px $accent;
    }
  }

  .message-box-container {
    -webkit-transition: opacity 400ms ease-out;
    -moz-transition: opacity 400ms ease-out;
    -o-transition: opacity 400ms ease-out;
    transition: opacity 400ms ease-out;

    &.has-error {
      position: relative;
      top: 1rem;
    }

    &:not(.has-error) {
      position: absolute;
      top: 0;
      z-index: 1;
    }
  }

  &.has-zero-opacity {
    position: relative;
    z-index: 0;
  }
}
</style>
