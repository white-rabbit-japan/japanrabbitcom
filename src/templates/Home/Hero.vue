<script>
import BButton from '~/components/BButton'

export default {
  components: { BButton },
}
</script>

<template>
  <div :class="$style.hero">
    <div
      class="container relative flex flex-col h-full mx-auto mdUp:justify-around xlUp:pt-24 sm:text-center"
    >
      <div class="z-10 max-w-lg pb-8 pr-2 font-sansTitle sm:mt-12">
        <h1 class="leading-tight text-gray-900" :class="$style.title">
          {{ $t('home.hero.title') }}
        </h1>
        <h2
          class="my-8 text-2xl leading-tight text-gray-700 sm:my-12 mdUp:mt-4 sm:font-light"
        >
          {{ $t('home.hero.subtitle') }}
        </h2>
        <BButton
          :text="$t('home.hero.cta')"
          :secondary="true"
          class="inline-block mb-3 text-lg mdUp:mt-16"
          cta="signup"
        />
        <div
          class="max-w-full text-lg font-light text-gray-700 sm:mx-auto sm:max-w-xs"
        >
          {{ $t('home.hero.ctaSub') }}
        </div>
      </div>

      <img
        :src="require('~/assets/img/home/hero-art.svg')"
        alt="hero art japan rabbit"
        class="absolute bottom-0 z-0"
        :class="$style.heroImage"
      />
    </div>
  </div>
</template>

<style lang="scss" module>
$gradient-end: #f9f1f1;

.hero {
  height: 712px;
  // background-image: linear-gradient(to left, #af75dd, #f9f1f1);

  background-image: linear-gradient(
    220deg,
    $gradient-end,
    72%,
    theme('colors.purple.400') 90%
  );

  @screen mdUp {
    background-image: linear-gradient(
      to right,
      theme('colors.purple.400'),
      26%,
      $gradient-end 54%
    );
  }
}

.heroImage {
  right: 0;
  max-width: 1000px;

  @screen mdUp {
    right: -94px;
  }
}

.title {
  font-size: 3.45rem;

  @screen sm {
    font-size: 1.875rem;
  }
}
</style>
