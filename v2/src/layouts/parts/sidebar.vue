<template>
  <div class="sidebar is-white">
    <div class="logo">L</div>
    <div class="menu">
      <span class="icon is-medium">
        <nuxt-link to="#">
          <i class="la la-home"></i>
        </nuxt-link>
        <span class="hover-text">home</span>
      </span>
      <span class="icon is-medium">
        <nuxt-link to="#" class="nuxt-link-active">
          <i class="la la-home"></i>
        </nuxt-link>
        <span class="hover-text">home</span>
      </span>
    </div>
    <span class="icon">
      <nuxt-link to="#">
        <i class="la la-envelope"></i>
      </nuxt-link>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Sidebar extends Vue {}
</script>

<style lang="scss" scoped>
.sidebar {
  .icon {
    width: 60px;

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

  .menu {
    .icon {
      position: relative;

      a {
        background-color: $dark;
        width: 100%;
        text-align: center;
        position: relative;
        z-index: 1;
        opacity: 1;
        -webkit-transition: opacity 400ms ease-out;
        -moz-transition: opacity 400ms ease-out;
        -o-transition: opacity 400ms ease-out;
        transition: opacity 400ms ease-out;

        &.nuxt-link-active {
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
        font-size: 0.8rem;
        position: absolute;
        text-transform: uppercase;
        top: 6px;
        z-index: 0;
      }
    }
  }
}
</style>
