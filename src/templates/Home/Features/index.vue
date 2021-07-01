<script>
import Feature from './Feature'
export default {
  name: 'HomeFeatures',
  components: { Feature },
}
</script>

<template>
  <div class="py-16 sm:py-8 text-center">
    <div class="container mx-auto flex flex-row flex-wrap justify-between">
      <!-- Use static images like this to let Gridosme process the image -->
      <Feature
        t-key="home.features.storageFeat"
        link="https://www.trustpilot.com/reviews/5ccc60e6a8436908c412b1f9"
      >
        <img
          :src="require('~/assets/img/home/feats/storage-art.svg')"
          alt="free storage"
          width="240"
        />
      </Feature>
      <Feature
        t-key="home.features.customsFeat"
        link="https://www.trustpilot.com/reviews/5cb179f4a843690a9cdbe0c0"
      >
        <img
          :src="require('~/assets/img/home/feats/customs-art.svg')"
          alt="customs descriptions"
          width="230"
        />
      </Feature>
      <Feature
        t-key="home.features.supportFeat"
        link="https://www.trustpilot.com/reviews/5bb20f318c83fd0b988d5dad"
      >
        <img
          :src="require('~/assets/img/home/feats/support-art.svg')"
          alt="vip support"
          width="220"
        />
      </Feature>
      <Feature
        t-key="home.features.expressFeat"
        link="https://www.trustpilot.com/reviews/5a7b03376116dd09202d0e40"
      >
        <img
          :src="require('~/assets/img/home/feats/express-art.svg')"
          alt="express processing"
          width="230"
        />
      </Feature>
    </div>
  </div>
</template>
