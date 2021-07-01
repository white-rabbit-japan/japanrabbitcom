<script>
import JrButton from '~/components/JrButton'

export default {
  components: { JrButton },
}
</script>

<template>
  <div class="bg-gray-500" :class="$style.why">
    <div
      class="container relative flex flex-wrap h-full mx-auto text-gray lgUp:items-center mdDown:pt-8 mdDown:text-center"
    >
      <div class="z-10 max-w-xl xxlDown:max-w-md mdDown:max-w-full lgUp:pr-4">
        <h3 class="mb-4 text-4xl mdDown:text-3xl">
          {{ $t('home.why.title') }}
        </h3>
        <p class="text-xl mdDown:text-lg">
          {{ $t('home.why.description') }}
        </p>
        <p class="mt-4 text-xl mdDown:text-lg">
          {{ $t('home.why.invitation') }}
        </p>
        <JrButton
          :text="$t('home.why.cta')"
          class="inline-block mt-8"
          cta="signup"
        />
      </div>
      <img
        :src="require('~/assets/img/home/sakura-art.svg')"
        class="absolute z-0"
        width="940"
        alt="sakura tree and drone"
        :class="$style.whyImage"
      />
    </div>
  </div>
</template>

<style lang="scss" module>
.why {
  height: 570px;

  @screen mdDown {
    height: 760px;
  }

  @screen sm {
    height: 730px;
  }
}

.whyImage {
  top: 26px;
  right: -110px;

  // @screen xxlDown {

  // }

  @screen xlDown {
    top: 50px;
    right: -200px;
    width: 830px;
  }

  @screen lgDown {
    top: 110px;
    right: -260px;
    width: 700px;
  }

  @screen mdDown {
    top: initial;
    right: -16px;
    bottom: 0;
  }
}
</style>
