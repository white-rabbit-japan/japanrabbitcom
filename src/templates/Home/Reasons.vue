<script>
export default {
  name: 'HomeReasons',
  computed: {
    reasons() {
      return [
        {
          key: 'repack',
          image: 'free-repacking.svg',
          imageWidth: 70,
        },
        {
          key: 'consolidation',
          image: 'consolidation.svg',
          imageWidth: 90,
        },
        {
          key: 'notifications',
          image: 'get-notifications.svg',
          imageWidth: 60,
        },
        {
          key: 'mobile',
          image: 'mobile-friendly.svg',
          imageWidth: 45,
        },
        {
          key: 'photos',
          image: 'package-photos.svg',
          imageWidth: 72,
        },
        {
          key: 'addresses',
          image: 'multiple-shipping-addresses.svg',
          imageWidth: 66,
        },
        {
          key: 'import',
          image: 'whiterabbit.svg',
          imageWidth: 94,
          linkText: 'White Rabbit Express',
          link: 'example.com',
        },
        {
          key: 'pricing',
          image: 'loyalty-rewards.svg',
          imageWidth: 70,
        },
      ].map((reason) => {
        return {
          ...reason,
          title: this.$t(`home.reasons.${reason.key}`),
        }
      })
    },
  },
}
</script>

<template>
  <div>
    <div
      class="container flex-wrap mx-auto my-24 text-center text-gray mdDown:pt-8"
    >
      <h3 class="mb-12 text-4xl mdDown:text-3xl font-sansTitle">
        {{ $t('home.reasons.title') }}
      </h3>
      <div class="flex flex-wrap">
        <div
          v-for="(reason, index) in reasons"
          :key="reason.key"
          class="w-1/4 my-10 border-gray-soft mdDown:w-1/2"
          :class="{ 'xlUp:border-r': (index + 1) % 4 !== 0 }"
        >
          <div class="flex justify-center h-24">
            <img
              :src="require('~/assets/img/home/reasons/' + reason.image)"
              :width="reason.imageWidth"
              class="mx-auto"
              :alt="reason.key"
            />
          </div>
          <div class="px-6 text-xl mdDown:text-lg">
            {{ $t(`home.reasons.${reason.key}`) }}
            <g-link
              v-if="reason.link"
              :to="reason.link"
              class="no-underline mdUp:block"
            >
              {{ reason.linkText }}
            </g-link>
          </div>
          <br class="lgDown:hidden" :class="{ hidden: index > 3 }" />
        </div>
      </div>
    </div>
  </div>
</template>
