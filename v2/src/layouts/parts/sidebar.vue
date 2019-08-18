<template>
  <div class="sidebar is-white">
    <div class="logo">L</div>
    <div class="menu">
      <span class="icon is-medium">
        <a href="#">
          <i class="la la-home"></i>
        </a>
      </span>
    </div>
    <span class="icon">
      <a href="#">
        <i class="la la-envelope"></i>
      </a>
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

    i {
      font-size: 22px;
    }

    &.is-medium {
      i {
        font-size: 28px;
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

        &:hover {
          color: $grey-dark;
          opacity: 0;
        }

        i {
          &:hover {
            color: $grey-dark;
          }
        }
      }

      &::after {
        color: $primary;
        content: 'HOME';
        position: absolute;
        top: 2px;
        text-transform: uppercase;
        z-index: 0;

        -webkit-transition: opacity 400ms ease-out;
        -moz-transition: opacity 400ms ease-out;
        -o-transition: opacity 400ms ease-out;
        transition: opacity 400ms ease-out;
      }
    }
  }
}
</style>
