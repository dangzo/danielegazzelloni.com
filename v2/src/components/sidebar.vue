<template>
  <aside class="sidebar">
    <nav>
      <!-- logo -->
      <div class="logo">
        <nuxt-link to="/" @click.native="isBurgerExpanded = false">D</nuxt-link>
      </div>

      <!-- menu -->
      <div :class="{ menu: true, 'is-expanded': isBurgerExpanded }">
        <!-- home -->
        <span class="icon is-medium">
          <nuxt-link to="/" @click.native="isBurgerExpanded = false">
            <i class="la la-home"></i>
          </nuxt-link>
          <span class="hover-text">home</span>
        </span>

        <!-- about -->
        <span class="icon is-medium">
          <nuxt-link to="/about" @click.native="isBurgerExpanded = false">
            <i class="la la-user"></i>
          </nuxt-link>
          <span class="hover-text">about</span>
        </span>

        <!-- skills -->
        <span class="icon is-medium">
          <nuxt-link to="/skills" @click.native="isBurgerExpanded = false">
            <i class="la la-gears"></i>
          </nuxt-link>
          <span class="hover-text">skills</span>
        </span>

        <!-- my work -->
        <span class="icon is-medium">
          <nuxt-link to="/my-work" @click.native="isBurgerExpanded = false">
            <i class="la la-eye"></i>
          </nuxt-link>
          <span class="hover-text">my work</span>
        </span>

        <!-- contact -->
        <span class="icon is-medium">
          <nuxt-link to="/contact" @click.native="isBurgerExpanded = false">
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
          <nuxt-link to="/contact" @click.native="isBurgerExpanded = false">
            <i class="la la-envelope"></i>
          </nuxt-link>
        </span>
      </div>

      <!-- hamburger -->
      <a
        :class="{
          'navbar-burger': true,
          'is-active': isBurgerExpanded,
        }"
        :aria-expanded="isBurgerExpanded"
        role="button"
        aria-label="menu"
        @click="doBurgerClick"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </nav>
  </aside>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Sidebar extends Vue {
  // Local state
  isBurgerExpanded = false;

  doBurgerClick(): void {
    this.isBurgerExpanded = !this.isBurgerExpanded;
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: $deep-dark;
  height: 100%;
  width: 60px;
  position: fixed;
  text-align: center;
  z-index: 2;

  @media (max-width: 1100px) {
    width: 100%;
    height: 58px;
  }

  @media (max-width: 768px) {
    height: 51px;
  }

  .navbar-burger {
    top: 0.2rem;
    margin-right: 1.5rem;

    @media (min-width: 520px) {
      display: none;
    }

    @media (max-width: 450px) {
      margin-right: 1.2rem;
    }

    span {
      color: $grey;
      height: 2px;
    }
  }

  .icon {
    width: 60px;
    margin: 0.4rem auto;

    @media (max-width: 680px) {
      width: 40px;
    }

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

    @media (max-width: 1100px) {
      position: absolute;
      margin: 0 2rem;
      top: 50%;
      transform: translateY(-50%);
    }

    @media (max-width: 450px) {
      margin: 0 2.4rem;
    }

    a:hover {
      color: $primary;
    }
  }

  .menu {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    @media (max-width: 1100px) {
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    @media (max-width: 520px) {
      display: flex;
      position: fixed;
      opacity: 0;
      height: 39px;
      width: 100%;
      top: 50px;
      padding-left: 0.8rem;
      padding-right: 0.8rem;
      background-color: $deep-dark;
      -webkit-transition: opacity 400ms ease-out;
      -moz-transition: opacity 400ms ease-out;
      -o-transition: opacity 400ms ease-out;
      transition: opacity 400ms ease-out;

      &.is-expanded {
        opacity: 1;
      }
    }

    .icon {
      position: relative;
      margin: 0.8rem auto;

      @media (max-width: 520px) {
        margin: 0.4rem auto;
      }

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

      .hover-text {
        color: $primary;
        font-size: 0.7rem;
        position: absolute;
        text-transform: uppercase;
        z-index: 0;

        @media (max-width: 680px) {
          font-size: 0.5rem;
          max-width: 40px;
        }
      }
    }
  }

  .socials {
    position: absolute;
    bottom: 2rem;

    @media (max-width: 1100px) {
      top: 50%;
      transform: translateY(-50%);
      bottom: 0;
      right: 2rem;
    }

    @media (max-width: 520px) {
      display: none;
    }

    .icon {
      @media (max-width: 1100px) {
        width: 40px;
        margin: 0;
      }

      @media (max-width: 680px) {
        width: 30px;
      }
    }
  }
}
</style>
