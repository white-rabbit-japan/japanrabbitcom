<script>
import Logo from '~/assets/img/japanrabbit-logo.svg?inline'

export default {
  name: 'DefaultFooter',
  components: { Logo },
  computed: {
    supportLinks() {
      return [
        {
          key: 'help',
          to: '#',
        },
        {
          key: 'fees',
          to: '#',
        },
        {
          key: 'calculator',
          to: 'https://app.japanrabbit.com/shipping-calculator',
        },
        {
          key: 'sitemap',
          to: '#',
        },
      ]
    },
    companyLinks() {
      return [
        {
          key: 'about',
          to: 'https://www.whiterabbitexpress.com/about',
        },
        {
          key: 'careers',
          to: 'https://careers.whiterabbitjapan.com',
        },
        {
          key: 'terms',
          to: '#',
        },
      ]
    },
    sisterLinks() {
      return [
        {
          text: 'Blackship',
          to: 'https://blackship.com',
        },
        {
          text: 'OMG Japan',
          to: 'https://omgjapan.com',
        },
        {
          text: 'White Rabbit Press',
          to: 'https://whiterabbitpress.com',
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
  <footer class="font-sans text-gray-strong">
    <div
      class="container flex flex-col items-center justify-between pt-10 pb-10 mx-auto text-sm"
    >
      <div
        class="flex flex-row justify-between w-full lgDown:flex-wrap lgDown:gap-2"
      >
        <!-- MAIN -->
        <div class="w-1/4 pr-6 lgDown:w-full">
          <Logo
            class="w-40 mb-3 -mt-4 -ml-2 transform scale-90 text-primary"
            alt="Japan Rabbit logo"
          />
          <div class="pl-2 mt-8 mb-6">
            <g-link
              v-for="icon in sns"
              :key="icon.name"
              :to="icon.to"
              class="mr-5 text-xs text-gray-strong"
            >
              <FA :name="icon.name" size="2x" fixed-width />
            </g-link>
          </div>
          <p class="lgUp:max-w-sm">
            {{ $t('layouts.default.footer.siteDescription') }}
          </p>
        </div>

        <hr class="w-full my-6 border-gray-strong xlUp:hidden" />

        <!-- SUPPORT -->
        <div class="w-1/5 mb-4 whitespace-nowrap">
          <div
            class="mb-3 text-lg font-bold uppercase text-primary lgDown:text-lg"
          >
            {{ $t('layouts.default.footer.support') }}
          </div>
          <ul>
            <li
              v-for="link in supportLinks"
              :key="link.key || link.text"
              class="pb-3 font-light"
            >
              <g-link
                :to="link.to"
                class="no-underline hover:text-primary text-gray-strong"
                >{{
                  link.text || $t('layouts.default.footer.' + link.key)
                }}</g-link
              >
            </li>
          </ul>
        </div>

        <!-- COMPANY -->
        <div class="w-1/5 mb-4 whitespace-nowrap">
          <div
            class="mb-3 text-lg font-bold uppercase text-primary lgDown:text-lg"
          >
            {{ $t('layouts.default.footer.company') }}
          </div>
          <ul>
            <li
              v-for="link in companyLinks"
              :key="link.key || link.text"
              class="pb-3 font-lights"
            >
              <g-link
                :to="link.to"
                class="no-underline hover:text-primary text-gray-strong"
                >{{
                  link.text || $t('layouts.default.footer.' + link.key)
                }}</g-link
              >
            </li>
          </ul>
        </div>

        <!-- SISTER -->
        <div class="w-1/5 mb-4 whitespace-nowrap">
          <div
            class="mb-3 text-lg font-bold uppercase text-primary lgDown:text-lg"
          >
            {{ $t('layouts.default.footer.sister') }}
          </div>
          <ul>
            <li
              v-for="link in sisterLinks"
              :key="link.key || link.text"
              class="pb-3 font-light"
            >
              <g-link
                :to="link.to"
                class="no-underline hover:text-primary text-gray-strong"
                >{{
                  link.text || $t('layouts.default.footer.' + link.key)
                }}</g-link
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- TERMS -->
      <!-- <ul class="flex text-sm font-light">
        <li v-for="link in siteLinks" :key="link.key" class="p-2">
          <g-link :to="link.to" class="no-underline hover:text-gray-strong">{{
            $t('layouts.default.footer.' + link.key)
          }}</g-link>
        </li>
      </ul> -->
    </div>

    <!-- COPYRIGHT -->
    <div class="text-white bg-primary">
      <div class="container relative pt-4 pb-8 mx-auto text-center">
        {{ $t('layouts.default.footer.copyright', [new Date().getFullYear()]) }}

        <img
          :src="require('~/assets/img/footer-art.svg')"
          class="absolute top-0 right-0"
          style="transform: translateY(-99%);"
        />
      </div>
    </div>
  </footer>
</template>
