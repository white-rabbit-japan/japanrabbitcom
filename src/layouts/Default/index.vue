<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  components: { Header, Footer },
  props: {
    headerClass: {
      type: String,
      default: '',
    },
    hidden: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<template>
  <div
    class="flex flex-col min-h-screen font-sans leading-normal content-wrapper"
  >
    <Header :class="headerClass" :hide-links="hidden" />

    <div :class="$style.main">
      <slot />
    </div>

    <Footer v-show="!hidden" />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" module>
.main {
  position: relative;
  z-index: 1;
  padding-bottom: 128px;

  &::before {
    position: absolute;
    top: -12px;
    right: 0;
    bottom: 25%;
    left: 0;
    z-index: -1;
    content: '';
    background-color: white;
    transform: skewY(-4.5deg);
    transform-origin: 50% 0;
  }

  &::after {
    position: absolute;
    top: 25%;
    right: 0;
    bottom: 46px;
    left: 0;
    z-index: -1;
    content: '';
    background-color: white;
    transform: skewY(4.5deg);
    transform-origin: 50% 0;
  }
}
</style>

<style lang="scss" src="~/assets/style/main.scss" />
