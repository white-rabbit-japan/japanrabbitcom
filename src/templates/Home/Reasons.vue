<script>
export default {
  name: 'HomeReasons',
  data() {
    return {
      reasons: [
        {
          key: 'payment',
          image: 'payment.svg',
          imageWidth: 80,
        },
        {
          key: 'shipping',
          image: 'shipping.svg',
          imageWidth: 70,
        },
        {
          key: 'auctions',
          image: 'auctions.svg',
          imageWidth: 80,
        },
        {
          key: 'talkSellers',
          image: 'talk-to-sellers.svg',
          imageWidth: 80,
        },
        {
          key: 'chat',
          image: 'chat.svg',
          imageWidth: 70,
        },
        {
          key: 'preorders',
          image: 'preorder.svg',
          imageWidth: 70,
        },
        {
          key: 'pickup',
          image: 'in-store-pickup.svg',
          imageWidth: 70,
        },
        {
          key: 'limitedEditions',
          image: 'limited-editions.svg',
          imageWidth: 90,
        },
      ],
    }
  },
}
</script>

<template>
  <div>
    <div
      class="
        container
        mx-auto
        mt-6
        mb-24
        text-center text-gray-strong
        mdDown:pt-8
      "
    >
      <h3 class="max-w-4xl mx-auto text-3xl font-semibold mb-28 text-primary">
        {{ $t('home.reasons.title') }}
      </h3>
      <div class="flex flex-wrap justify-between">
        <div
          v-for="(reason, index) in reasons"
          :key="reason.key"
          class="w-64 my-2 smDown:mx-auto"
        >
          <div class="flex justify-center h-24">
            <img
              :src="require('~/assets/img/home/reasons/' + reason.image)"
              :width="reason.imageWidth"
              class="mx-auto"
              :alt="reason.key"
            />
          </div>
          <div class="px-6 mt-2">
            <div class="mb-4 text-xl font-bold text-primary">
              {{ $t(`home.reasons.${reason.key}.title`) }}
            </div>
            <div class="text-base font-normal">
              {{ $t(`home.reasons.${reason.key}.desc`) }}
            </div>
          </div>
          <br class="lgDown:hidden" :class="{ hidden: index > 3 }" />
        </div>
      </div>
    </div>
  </div>
</template>
