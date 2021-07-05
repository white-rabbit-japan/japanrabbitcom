<script>
import Hero from './Hero'
import Reasons from './Reasons'
import Why from './Why'
import Features from './Features'
import Faq from './Faq'
import Blackship from './Blackship'

export default {
  name: 'HomeView',
  metaInfo() {
    return {
      title: this.$t('home.title'),
    }
  },
  components: { Hero, Reasons, Why, Features, Faq, Blackship },
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

    <Why />

    <Faq />

    <Blackship />
  </Layout>
</template>
