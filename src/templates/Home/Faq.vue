<script>
export default {
  name: 'HomeFaq',
  data() {
    return {
      selected: null,
      items: [
        {
          key: 'fees',
          parts: ['desc'],
        },
        {
          key: 'preorders',
          parts: ['desc'],
        },
        {
          key: 'shops',
          parts: ['desc', 5],
        },
        {
          key: 'value',
          parts: ['desc'],
        },
        {
          key: 'storage',
          parts: ['desc'],
        },
        {
          key: 'shipping',
          parts: ['desc', 9, 'note'],
        },
      ],
    }
  },
}
</script>

<template>
  <div class="waves-section">
    <div class="container mx-auto">
      <h3
        class="
          max-w-4xl
          mx-auto
          mb-4
          text-3xl
          font-semibold
          text-center text-primary
        "
      >
        {{ $t('home.faq.title') }}
      </h3>
      <div
        class="
          max-w-3xl
          px-2
          mx-auto
          text-xl
          font-normal
          text-center text-gray-strong
        "
      >
        {{ $t(`home.faq.description`) }}
      </div>

      <div class="mt-12">
        <div class="max-w-xl mx-auto bg-white border border-gray-200">
          <div
            v-for="(item, index) of items"
            :key="item.key"
            class="relative border-b border-gray-200"
          >
            <button
              type="button"
              class="w-full px-8 py-6 text-left"
              @click="
                selected !== item.key
                  ? (selected = item.key)
                  : (selected = null)
              "
            >
              <div class="flex items-center justify-between">
                <span>{{ $t('home.faq.items.' + item.key + '.title') }}</span>
                <span class="ico-plus"></span>
              </div>
            </button>

            <div
              ref="containers"
              class="
                relative
                overflow-hidden
                transition-all
                duration-700
                max-h-0
              "
              :style="
                selected == item.key
                  ? 'max-height: ' + $refs.containers[index].scrollHeight + 'px'
                  : ''
              "
            >
              <div class="p-6">
                <template v-for="(part, index) of item.parts">
                  <p
                    v-if="typeof part === 'string'"
                    :key="part"
                    v-html="$t(`home.faq.items.${item.key}.${part}`)"
                  />
                  <ul v-else :key="'list-' + index">
                    <li
                      v-for="subitem of part"
                      :key="`subitem-${index}-${subitem}`"
                    >
                      {{ $t(`home.faq.items.${item.key}.subitem${subitem}`) }}
                    </li>
                  </ul>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
