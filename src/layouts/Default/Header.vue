<script>
import BButton from '~/components/BButton.vue'
import NavLink from './NavLink'
import Logo from '~/assets/img/japanrabbit-logo.svg?inline'

export default {
  name: 'DefaultHeader',
  components: { NavLink, BButton, Logo },
  props: {
    hideLinks: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isMenuOpen: false,
    }
  },
}
</script>

<template>
  <header class="z-10 bg-purple-100">
    <nav
      class="container flex flex-wrap items-center justify-between mx-auto mdUp:py-2 xlUp:py-4"
    >
      <div>
        <component
          :is="hideLinks ? 'span' : 'g-link'"
          :to="$tp('/')"
          aria-label="home"
        >
          <Logo class="w-40 pr-6 mt-1" alt="Japan Rabbit logo" />
        </component>
      </div>

      <template v-if="!hideLinks">
        <div class="hidden lgDown:block sm:-mr-4">
          <button
            :class="{
              [$style.hamburger]: true,
              [$style.isActive]: isMenuOpen,
            }"
            aria-label="menu"
            @click="isMenuOpen = !isMenuOpen"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <ul
          class="flex items-center flex-initial w-auto lgDown:w-full lgDown:mt-8"
          :class="isMenuOpen ? 'lgDown:block' : 'lgDown:hidden'"
        >
          <NavLink :to="$tp('/')" t-key="home" />
          <!-- <NavLink
          to="https://www.whiterabbitexpress.com/about/"
          t-key="aboutUs"
        /> -->
          <NavLink :to="$tp('/pricing')" t-key="pricing" />
          <NavLink to="https://support.japanrabbit.com/" t-key="contact" />
          <NavLink
            to="https://support.japanrabbit.com/category/343-account"
            t-key="faq"
          />

          <li class="lgDown:mb-5">
            <BButton
              :text="$t('layouts.default.header.cta')"
              class="table mx-auto xlUp:ml-8"
              cta="login"
            />
          </li>
        </ul>
      </template>
    </nav>
  </header>
</template>

<style lang="scss" module>
.hamburger {
  position: relative;
  display: block;
  width: 3.25rem;
  height: 3.25rem;
  margin-left: auto;
  color: #4a4a4a;

  span {
    position: absolute;
    left: calc(50% - 8px);
    display: block;
    width: 16px;
    height: 1px;
    background-color: currentColor;
    transition: all 86ms ease-out;
    transform-origin: center;
  }

  span:nth-child(1) {
    top: calc(50% - 6px);
  }
  span:nth-child(2) {
    top: calc(50% - 1px);
  }
  span:nth-child(3) {
    top: calc(50% + 4px);
  }

  &.isActive {
    span:nth-child(1) {
      transform: translateY(5px) rotate(45deg);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: translateY(-5px) rotate(-45deg);
    }
  }
}
</style>
