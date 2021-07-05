<script>
import JrButton from '~/components/JrButton'

export default {
  components: { JrButton },
}
</script>

<template>
  <div :class="$style.hero" class="relative -mt-3">
    <div
      class="container relative flex flex-col h-full mx-auto smDown:text-center"
    >
      <div
        class="z-10 max-w-sm pr-2 pt-28 smDown:mt-12 smDown:mx-auto smDown:pt-2"
      >
        <h2
          class="
            mb-12
            -mt-1
            text-base
            italic
            font-light
            mdDown:mb-6
            text-gray-strong
          "
        >
          {{ $t('home.hero.subtitle') }}
        </h2>

        <h1
          class="
            font-bold
            leading-tight
            text-gray-strong text-4xl+
            pt-1
            mdDown:text-4xl
          "
        >
          {{ $t('home.hero.title') }}
        </h1>
        <JrButton
          :text="$t('home.hero.cta')"
          class="inline-block mt-8 text-xl"
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
  height: min(715px, 100vw * 1.64);

  @screen xs {
    height: 660px;
  }
}

$crop-right: 20px;
$crop-left: 250px;

.heroImage {
  width: 100vw;
  max-width: 1440px;

  @screen mdDown {
    width: calc(100vw + #{$crop-right + $crop-left});
    transform: translateX($crop-right - $crop-left);
  }
}
</style>
