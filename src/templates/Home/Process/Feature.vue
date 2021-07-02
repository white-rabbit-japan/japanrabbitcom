<template functional>
  <div class="w-1/2 py-12 lgDown:w-full">
    <div class="inline-block mx-auto">
      <slot />
    </div>

    <div class="mt-8 mb-4 text-2xl text-gray-strong">
      {{ parent.$t(`${props.tKey}.title`) }}
    </div>
    <div class="max-w-sm mx-auto text-xl text-gray-strong sm:text-lg">
      {{ parent.$t(`${props.tKey}.shortDescription`) }}
    </div>
    <div class="mt-2 text-sm text-gray-strong">
      {{ parent.$t(`${props.tKey}.sub`) }}
    </div>
    <hr class="max-w-sm mx-auto mt-4 mb-2 border-gray-strong" />
    <div class="relative max-w-sm mx-auto text-gray-strong mdUp:text-left">
      <div class="text-sm text-center mdUp:pl-20">
        <div :class="$style.star" class="inline-block mdUp:absolute">
          <!-- <FA name="fas.star" size="2x" /> -->
          <img
            :src="require('~/assets/img/home/star.svg')"
            alt="five star"
            width="38"
          />
        </div>
      </div>
      <div class="mdUp:pl-12 mdUp:ml-2">
        <div>
          {{ parent.$t(`${props.tKey}.description`) }}
        </div>
        <g-link :to="props.link" class="block text-sm">
          {{ parent.$t('home.features.readReview') }}
        </g-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.star {
  top: -2px;
  left: 6px;
}
</style>
