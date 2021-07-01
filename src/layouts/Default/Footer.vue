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
      return [
        {
          key: 'calculator',
          to: 'https://app-staging.japanrabbit.com/shipping-calculator',
        },
      ]
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
  <footer class="font-sans text-white bg-gray-strong">
    <div
      class="container flex flex-col items-center justify-between pt-12 pb-8 mx-auto text-base sm:text-sm"
    >
      <div class="flex flex-row justify-between w-full mdDown:flex-col">
        <!-- MAIN -->
        <div class="w-2/4 mdDown:w-auto">
          <Logo class="w-40 mb-3 -mt-4 text-primary" alt="Japan Rabbit logo" />
          <p class="pr-6 mt-6 text-white mdUp:max-w-sm">
            {{ $t('layouts.default.footer.siteDescription') }}
          </p>
          <div class="my-6">
            <g-link
              v-for="icon in sns"
              :key="icon.name"
              :to="icon.to"
              class="mr-5 text-xs text-white"
            >
              <FA :name="icon.name" size="2x" fixed-width />
            </g-link>
          </div>
          <div class="text-white">
            {{
              $t('layouts.default.footer.copyright', [new Date().getFullYear()])
            }}
          </div>
        </div>

        <hr class="my-6 border-white lgUp:hidden" />

        <!-- ABOUT -->
        <div class="w-1/4 mb-4 mdDown:w-auto">
          <div class="mb-3 text-xl text-white sm:text-lg">
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
                class="text-white no-underline hover:text-gray-soft"
                >{{ $t('layouts.default.footer.' + link.key) }}</g-link
              >
            </li>
          </ul>
        </div>

        <!-- SISTER -->
        <div class="w-1/4 mdDown:w-auto">
          <div class="mb-3 text-xl text-white sm:text-lg">
            {{ $t('layouts.default.footer.sister') }}
          </div>
          <p>
            <a
              href="https://blackship.com"
              target="_blank"
              rel="noopener"
              class="font-light no-underline text-blackship"
            >
              {{ $t('layouts.default.footer.blkTitle') }}
            </a>
          </p>
          <p class="font-light text-white">
            {{ $t('layouts.default.footer.blkDesc') }}
          </p>
        </div>

        <hr class="my-6 border-gray-soft lgUp:hidden" />
      </div>

      <!-- TERMS -->
      <ul class="flex text-sm font-light">
        <li v-for="link in siteLinks" :key="link.key" class="p-2">
          <g-link
            :to="link.to"
            class="text-white no-underline hover:text-gray-soft"
            >{{ $t('layouts.default.footer.' + link.key) }}</g-link
          >
        </li>
      </ul>
    </div>
  </footer>
</template>
