<script>
import Hero from './Hero'
import Features from './Features'
import Why from './Why'
import Process from './Process'
import Reviews from './Reviews'
import Quote from './Quote'

export default {
  name: 'HomeView',
  metaInfo() {
    return {
      title: this.$t('home.title'),
    }
  },
  components: { Hero, Features, Why, Process, Reviews, Quote },
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
  <Layout>
    <Hero />

    <Features />

    <!-- <Process /> -->

    <!-- <Why /> -->

    <!-- <Reviews /> -->

    <!-- <Quote /> -->
  </Layout>
</template>
