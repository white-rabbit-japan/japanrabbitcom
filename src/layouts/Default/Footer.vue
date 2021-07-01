<script>
import Logo from '~/assets/img/japanrabbit-logo.svg?inline'

export default {
  name: 'DefaultFooter',
  components: { Logo },
  computed: {
    siteLinks() {
      return []
    },
    aboutLinks() {
      return []
    },

    sns() {
      return [
        { name: 'fab.twitter', to: 'https://twitter.com/japanrabbitcom' },
        {
          name: 'fab.facebook-square',
          to: 'https://www.facebook.com/WhiteRabbitExpress/',
        },
      ]
    },
  },
}
</script>

<static-query>
query {
  metadata {
    appUrl
    docsUrl
  }
}
</static-query>

<template>
  <footer class="font-sans text-white" :class="$style.footer">
    <div
      class="container flex flex-col items-center justify-between pt-24 pb-8 mx-auto text-base sm:text-sm"
    >
      <div class="flex flex-row justify-between w-full mdDown:flex-col">
        <!-- MAIN -->
        <div class="w-2/4 mdDown:w-auto">
          <Logo class="w-40 pr-6 mt-1 mb-3" alt="Japan Rabbit logo" />
          <p class="pr-6 text-gray mdUp:max-w-sm">
            {{ $t('layouts.default.footer.siteDescription') }}
          </p>
          <div class="my-6">
            <g-link
              v-for="icon in sns"
              :key="icon.name"
              :to="icon.to"
              class="mr-5 text-xs"
            >
              <FA :name="icon.name" size="2x" fixed-width />
            </g-link>
          </div>
          <div class="text-gray-300">
            {{
              $t('layouts.default.footer.copyright', [new Date().getFullYear()])
            }}
          </div>
        </div>

        <hr class="my-6 border-gray-300 lgUp:hidden" />

        <!-- ABOUT -->
        <div class="w-1/4 mb-4 mdDown:w-auto">
          <div class="mb-3 text-xl text-gray sm:text-lg">
            {{ $t('layouts.default.footer.about') }}
          </div>
          <ul>
            <li
              v-for="link in aboutLinks"
              :key="link.key"
              class="pb-1 font-light"
            >
              <g-link
                :to="link.to"
                class="text-gray-300 no-underline hover:text-gray-200"
                >{{ $t('layouts.default.footer.' + link.key) }}</g-link
              >
            </li>
          </ul>
        </div>

        <!-- SISTER -->
        <div class="w-1/4 mdDown:w-auto">
          <div class="mb-3 text-xl text-gray sm:text-lg">
            {{ $t('layouts.default.footer.sister') }}
          </div>
          <p class="font-light text-gray-300">
            {{ $t('layouts.default.footer.wreDesc') }}
          </p>
        </div>

        <hr class="my-6 border-gray-300 lgUp:hidden" />
      </div>

      <!-- TERMS -->
      <ul class="flex text-sm font-light">
        <li v-for="link in siteLinks" :key="link.key" class="p-2">
          <g-link
            :to="link.to"
            class="no-underline text-gray hover:text-white"
            >{{ $t('layouts.default.footer.' + link.key) }}</g-link
          >
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss" module>
.footer {
  background-color: rgba(0, 0, 0, 0.95);
}
</style>
