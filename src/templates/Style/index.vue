<script>
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config.js'

const { theme } = resolveConfig(tailwindConfig)

export default {
  name: 'StyleView',
  metaInfo() {
    return {
      title: this.$t('style.title'),
    }
  },

  data() {
    return {
      colors: [
        'primary.DEFAULT',
        'primary.soft',
        'success.DEFAULT',
        'gray.soft',
        'gray.DEFAULT',
        'gray.strong',
      ].map((item) => {
        const [color, grade] = item.split('.')
        return {
          name: item.toUpperCase().replace('.DEFAULT', '').replace('.', ' '),
          code: (theme.colors[color][grade] || '').toUpperCase(),
        }
      }),
    }
  },
}
</script>
<template>
  <Layout>
    <div>
      <div class="container py-16 mx-auto text-gray sm:py-8">
        <div class="text-left">
          <h2 :class="$style.title" class="mb-12">
            {{ $t('style.general.brandAndStyleGuide') }}
          </h2>

          <h3 class="flex items-center text-left">
            {{ $t('style.general.colors') }}
          </h3>

          <div
            v-for="color in colors"
            :key="color.code"
            class="flex items-center mt-5"
          >
            <div
              class="w-12 h-12 rounded-lg shadow-inner"
              :style="{ backgroundColor: color.code }"
            ></div>
            <div class="pl-1 ml-2 text-xs leading-none text-gray-strong">
              <div class="font-semibold">{{ color.name }}</div>
              <div class="mt-1 font-normal opacity-75">{{ color.code }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style lang="scss" module>
.title {
  @apply text-4xl text-center;

  @screen mdDown {
    @apply text-3xl;
  }
}

.list ul {
  text-align: left;
  list-style: none;
  list-style-position: initial;
  list-style-type: none;
  list-style-image: initial;
  li {
    position: relative;
    margin-left: 22px;
    &:not(:first-of-type) {
      margin-top: 12px;
    }

    &::before {
      position: absolute;
      top: 5px;
      left: -22px;
      width: 12px;
      height: 12px;
      content: '';
      background-color: theme('colors.primary.DEFAULT');
      border-radius: 100%;
    }
  }
}
</style>
