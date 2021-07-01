<script>
import Hero from './Hero'
import Features from './Features'
import Why from './Why'
import Reasons from './Reasons'
import Reviews from './Reviews'
import Quote from './Quote'

export default {
  name: 'HomeView',
  metaInfo() {
    return {
      title: this.$t('home.title'),
    }
  },
  components: { Hero, Features, Why, Reasons, Reviews, Quote },
}
</script>

<static-query>
query {
  metadata {
    appUrl
  }
}
</static-query>

<template>
  <Layout header-class="w-full xlUp:absolute xlUp:bg-transparent">
    <Hero />

    <Reasons />

    <Why />

    <Features />

    <!-- <Reviews /> -->

    <!-- <Quote /> -->
  </Layout>
</template>
