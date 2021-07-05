<script>
export default {
  name: 'HomeFeatures',
  data() {
    return {
      features: [
        {
          key: 'vip',
          image: 'feat-vip.svg',
        },

        {
          key: 'quote',
          image: 'feat-quote.svg',
        },

        {
          key: 'storage',
          image: 'feat-storage.svg',
        },

        {
          key: 'moneyback',
          image: 'feat-moneyback.svg',
        },
      ],
    }
  },
}
</script>

<template>
  <div class="waves-section">
    <div class="container mx-auto">
      <h3
        class="
          max-w-4xl
          mx-auto
          text-3xl
          font-semibold
          text-center
          mb-28
          text-primary
        "
      >
        {{ $t('home.features.title') }}
      </h3>
      <div style="max-width: 722px" class="mx-auto space-y-6 mdDown:space-y-16">
        <div
          v-for="(feat, index) in features"
          :key="feat.key"
          class="flex items-center justify-between mdDown:flex-col"
          :class="index % 2 === 0 ? 'flex-row-reverse' : ''"
        >
          <div class="px-2 text-center">
            <img
              :src="require('~/assets/img/home/feats/' + feat.image)"
              :alt="feat.key"
              :width="294"
            />
          </div>
          <div
            class="
              items-center
              px-2
              py-4
              mdDown:text-center
              max-w-80
              mdDown:max-w-full
            "
          >
            <div class="mb-4 text-3xl font-bold text-primary">
              {{ $t(`home.features.${feat.key}.title`) }}
            </div>
            <div class="text-xl font-normal text-gray-strong">
              {{ $t(`home.features.${feat.key}.desc`) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
