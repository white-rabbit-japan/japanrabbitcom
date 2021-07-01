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
    class="flex flex-col min-h-screen font-sans leading-normal bg-gray-700 content-wrapper"
  >
    <Header :class="headerClass" :hide-links="hidden" />

    <slot />

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

<style lang="scss" src="~/assets/style/main.scss" />
