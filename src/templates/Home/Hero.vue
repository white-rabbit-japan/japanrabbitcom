<script>
import JrButton from '~/components/JrButton'

export default {
  components: { JrButton },
}
</script>

<template>
  <div :class="$style.hero" class="relative mt-52">
    <div class="container relative flex flex-col h-full mx-auto sm:text-center">
      <div class="z-10 max-w-sm pt-20 pr-2 sm:mt-12">
        <h2 class="mb-10 text-base italic font-light text-gray-strong">
          {{ $t('home.hero.subtitle') }}
        </h2>

        <h1 class="font-bold leading-tight text-gray-strong text-4xl+">
          {{ $t('home.hero.title') }}
        </h1>
        <JrButton
          :text="$t('home.hero.cta')"
          class="inline-block mt-10 mb-3 text-xl"
          cta="signup"
          success
        />
      </div>

      <img
        :src="require('~/assets/img/home/hero-art.svg')"
        alt="hero art japan rabbit"
        class="absolute bottom-0 left-0 right-0 z-0"
        :class="$style.heroImage"
      />
    </div>
  </div>
</template>

<style lang="scss" module>
.hero {
  height: 690px;
  // background-image: linear-gradient(to left, #af75dd, #f9f1f1);
}

.heroImage {
  max-width: 1440px;
}
</style>
