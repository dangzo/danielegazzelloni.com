<template>
  <aside class="sidebar">
    <!-- logo -->
    <div class="logo">
      <nuxt-link to="/">D</nuxt-link>
    </div>

    <!-- menu -->
    <div class="menu">
      <!-- home -->
      <span class="icon is-medium">
        <nuxt-link to="/">
          <i class="la la-home"></i>
        </nuxt-link>
        <span class="hover-text">home</span>
      </span>

      <!-- about -->
      <span class="icon is-medium">
        <nuxt-link to="/about">
          <i class="la la-user"></i>
        </nuxt-link>
        <span class="hover-text">about</span>
      </span>

      <!-- skills -->
      <span class="icon is-medium">
        <nuxt-link to="/skills">
          <i class="la la-gears"></i>
        </nuxt-link>
        <span class="hover-text">skills</span>
      </span>

      <!-- my work -->
      <span class="icon is-medium">
        <nuxt-link to="/my-work">
          <i class="la la-eye"></i>
        </nuxt-link>
        <span class="hover-text">my work</span>
      </span>

      <!-- contact -->
      <span class="icon is-medium">
        <nuxt-link to="/contact">
          <i class="la la-envelope"></i>
        </nuxt-link>
        <span class="hover-text">contact</span>
      </span>
    </div>

    <!-- socials -->
    <div class="socials">
      <span class="icon">
        <a href="https://github.com/dangzo" target="_blank">
          <i class="fa fa-github"></i>
        </a>
      </span>
      <span class="icon">
        <a href="https://www.linkedin.com/in/danielegazzelloni" target="_blank">
          <i class="fa fa-linkedin"></i>
        </a>
      </span>
      <span class="icon">
        <nuxt-link to="/contact">
          <i class="la la-envelope"></i>
        </nuxt-link>
      </span>
    </div>
  </aside>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Sidebar extends Vue {}
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: $deep-dark;
  height: 100%;
  width: 60px;
  position: fixed;
  text-align: center;

  .icon {
    width: 60px;
    margin: 0.4rem auto;

    a {
      i {
        color: $grey-dark;
        -webkit-transition: color 400ms ease-out;
        -moz-transition: color 400ms ease-out;
        -o-transition: color 400ms ease-out;
        transition: color 400ms ease-out;
      }

      &:hover {
        border-bottom: 1px solid transparent;

        i {
          color: $primary;
        }
      }
    }
  }

  .logo {
    margin: 1rem;
    font-weight: 900;
    font-size: 2rem;

    a:hover {
      color: $primary;
    }
  }

  .menu {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    .icon {
      position: relative;
      margin: 0.8rem auto;

      a {
        background-color: $deep-dark;
        width: 100%;
        text-align: center;
        position: relative;
        z-index: 1;
        opacity: 1;
        -webkit-transition: opacity 400ms ease-out;
        -moz-transition: opacity 400ms ease-out;
        -o-transition: opacity 400ms ease-out;
        transition: opacity 400ms ease-out;

        &.nuxt-link-exact-active {
          i {
            color: $primary;
          }
        }

        &:hover {
          color: $grey-dark;
          opacity: 0;
        }

        &:not(.nuxt-link-active) {
          i {
            &:hover {
              color: $grey-dark;
            }
          }
        }
      }

      > .hover-text {
        color: $primary;
        font-size: 0.7rem;
        position: absolute;
        text-transform: uppercase;
        z-index: 0;
      }
    }
  }

  .socials {
    position: absolute;
    bottom: 2rem;
  }
}
</style>
