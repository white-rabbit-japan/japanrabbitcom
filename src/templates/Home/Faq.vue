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
    <div class="container pb-10 mx-auto">
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
          px-10
          mx-auto
          text-xl
          font-normal
          text-center text-gray-strong
        "
      >
        {{ $t(`home.faq.description`) }}
      </div>

      <div class="mt-12">
        <div class="max-w-2xl mx-auto">
          <div
            v-for="(item, index) of items"
            :key="item.key"
            class="relative border-b border-opacity-20 border-primary"
          >
            <button
              type="button"
              class="w-full py-4 text-left"
              @click="
                selected !== item.key
                  ? (selected = item.key)
                  : (selected = null)
              "
            >
              <div class="flex items-center justify-between">
                <span class="pr-4 text-xl text-gray-strong">{{
                  $t('home.faq.items.' + item.key + '.title')
                }}</span>
                <span :class="$style.icon">
                  <i
                    :class="{
                      [$style.caret]: true,
                      [$style.active]: selected === item.key,
                    }"
                  />
                </span>
              </div>
            </button>

            <div
              ref="containers"
              class="
                relative
                overflow-hidden
                transition-all
                duration-300
                ease
                max-h-0
              "
              :style="{
                maxHeight:
                  selected === item.key
                    ? $refs.containers[index].scrollHeight + 'px'
                    : '',
              }"
            >
              <div class="p-6 text-lg text-gray-strong">
                <template v-for="(part, index) of item.parts">
                  <p
                    v-if="typeof part === 'string'"
                    :key="part"
                    v-html="$t(`home.faq.items.${item.key}.${part}`)"
                  />
                  <ul v-else :key="'list-' + index" :class="$style.list">
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

<style lang="scss" module>
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.5rem;
  height: 1.5rem;
}

.caret {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: theme('colors.primary.DEFAULT');
  border-radius: 100%;
  transition: all 300ms ease;

  &.active {
    transform: rotate(90deg);
  }

  &::after {
    padding: 3px;
    margin-left: -2px;
    content: ' ';
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(-45deg);
  }
}

.list {
  padding: 16px 0 16px 24px;
  list-style: disc;
  > li {
    padding: 4px 0;
  }
}
</style>
