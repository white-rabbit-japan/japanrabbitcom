<script>
import BButton from '~/components/BButton'

export default {
  components: { BButton },
}
</script>

<template>
  <div class="bg-gray-500" :class="$style.why">
    <div
      class="container relative h-full mx-auto text-center text-purple-100"
      :class="$style.container"
    >
      <div class="relative z-10 min-h-full">
        <div
          class="
            max-w-5xl
            pt-24
            mx-auto
            text-3xl
            leading-tight
            mdDown:pt-6 mdDown:text-2xl
            font-handwriting
          "
        >
          {{ $t('home.quote.text') }}
        </div>
        <p class="mt-4 text-base mdDown:text-sm">
          <g-link
            to="https://www.trustpilot.com/reviews/5d24ac8b42fa560424894e81"
          >
            {{ $t('home.quote.link') }}
          </g-link>
        </p>
        <BButton
          :text="$t('home.quote.cta')"
          class="inline-block mt-8"
          cta="signup"
        />
      </div>
      <img
        :src="require('~/assets/img/home/quote/quote-1.svg')"
        class="absolute z-10"
        width="460"
        alt="package open doll"
        :class="$style.quote1"
      />
      <img
        :src="require('~/assets/img/home/quote/quote-2.svg')"
        class="absolute"
        width="236"
        alt="package closed bird"
        :class="$style.quote2"
      />
    </div>
  </div>
</template>

<style lang="scss" module>
.container {
  height: 576px;

  @screen lgDown {
    height: 730px;
  }

  @screen mdDown {
    height: 630px;
  }

  // @screen sm {
  //   height: 680px;
  // }
}

.quote1 {
  bottom: 50px;
  left: 100px;

  @screen mdDown {
    left: 50px;
  }

  @screen sm {
    bottom: 30px;
    left: 30px;
    max-width: 300px;
  }
}

.quote2 {
  right: 100px;
  bottom: 50px;

  @screen mdDown {
    right: 50px;
  }

  @screen sm {
    right: 30px;
    bottom: 50px;
    max-width: 190px;
  }
}
</style>
