<template functional>
  <div>
    <div
      class="container flex-wrap mx-auto my-20 text-center text-gray-strong mdDown:pt-16 mdDown:pb-8"
    >
      <h3 class="mb-12 text-4xl mdDown:text-3xl">
        {{ parent.$t('home.reviews.title') }}
      </h3>

      <div class="flex flex-wrap justify-center lgDown:flex-col">
        <div :class="['xlUp:border-r', $style.item]">
          <g-link
            to="https://www.trustpilot.com/review/japanrabbit.com"
            :class="$style.itemLink"
          >
            <g-image
              src="~/assets/img/home/reviews/trustpilot-logo.png"
              height="50"
              fit="inside"
              class="mx-auto"
              alt="trustpilot score"
            />
            <div class="text-base text-gray-strong mdDown:text-lg">
              {{ parent.$t('home.reviews.outOf', [4.8, 5]) }}
            </div>
          </g-link>
        </div>

        <div :class="['xlUp:border-r', $style.item]">
          <g-link
            to="https://www.trustpilot.com/review/japanrabbit.com"
            :class="$style.itemLink"
          >
            <g-image
              src="~/assets/img/home/reviews/google-logo.png"
              height="50"
              fit="inside"
              class="mx-auto"
              alt="google score"
            />
            <div class="text-base text-gray-strong mdDown:text-lg">
              {{ parent.$t('home.reviews.outOf', [4.9, 5]) }}
            </div>
          </g-link>
        </div>

        <div :class="[$style.item]">
          <g-link
            to="https://www.trustpilot.com/review/japanrabbit.com"
            :class="$style.itemLink"
          >
            <g-image
              src="~/assets/img/home/reviews/facebook-logo.png"
              width="200"
              fit="inside"
              class="mx-auto"
              alt="facebook score"
            />
            <div class="text-base text-gray-strong mdDown:text-lg">
              {{ parent.$t('home.reviews.outOf', [4.9, 5]) }}
            </div>
          </g-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.item {
  @apply flex-grow h-24 my-10 border-gray-soft;
}

.itemLink {
  @apply no-underline flex flex-col justify-between h-full max-w-sm mx-auto;
}
</style>
