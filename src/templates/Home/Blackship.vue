<script>
import Logo from '~/assets/img/blackship-logo.svg?inline'
import JrButton from '~/components/JrButton'

export default {
  components: { Logo, JrButton },
}
</script>

<template>
  <div class="container relative h-full pt-20 pb-40 mx-auto text-gray-strong">
    <div
      class="flex items-center justify-center w-full lgUp:translate-x-20 lgUp:transform mdDown:flex-col mdDown:space-y-12"
    >
      <div class="px-6">
        <Logo class="w-64 fill-current mdDown:mx-auto text-blackship" />

        <p class="mt-4 text-xl max-w-48 mdDown:text-center mdDown:mx-auto">
          {{ $t('home.blackship.text') }}
        </p>

        <JrButton
          :text="$t('home.blackship.cta')"
          class="inline-block mt-8 text-xl"
          cta="signup"
          success
        />
      </div>
      <div class="px-6">
        <img
          :src="require('~/assets/img/home/blackship/art-1.svg')"
          width="555"
          alt="package open doll"
          :class="$style.art"
          class="lgUp:-mt-8 mdDown:transform mdDown:translate-x-10"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.art {
  @screen lgUp {
    min-width: 555px;
    margin-top: -32px;
  }
}
</style>
