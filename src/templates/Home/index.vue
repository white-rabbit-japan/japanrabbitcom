<script>
import Hero from './Hero'
import Reasons from './Reasons'
import Why from './Why'
import Features from './Features'
import Reviews from './Reviews'
import Quote from './Quote'

export default {
  name: 'HomeView',
  metaInfo() {
    return {
      title: this.$t('home.title'),
    }
  },
  components: { Hero, Reasons, Why, Features, Reviews, Quote },
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

    <Reasons />

    <Features />

    <!-- <Why /> -->

    <!-- <Reviews /> -->

    <!-- <Quote /> -->
  </Layout>
</template>
