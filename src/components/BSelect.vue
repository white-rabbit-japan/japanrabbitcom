<script>
export default {
  props: {
    value: {
      type: Object,
      default: null,
    },
    items: {
      type: Array,
      default: () => [],
    },
    itemValue: {
      type: String,
      default: 'value',
    },
  },
}
</script>

<template>
  <div class="relative inline-block w-full">
    <select
      :class="$style.select"
      class="
        block
        w-full
        py-1
        pl-4
        pr-16
        text-sm
        leading-tight
        bg-transparent
        border border-purple-600
        rounded-lg rounded-bl-none
        appearance-none
        focus:outline-none focus:shadow-outline
      "
      :value="value[itemValue]"
      @change="
        $emit(
          'input',
          items.find((item) => item[itemValue] === $event.target.value)
        )
      "
    >
      <slot name="items">
        <option
          v-for="(item, index) in items"
          :key="item.text"
          :value="item[itemValue]"
        >
          <slot name="item" v-bind="{ item, index }">{{ item.text }}</slot>
        </option>
      </slot>
    </select>

    <div
      class="
        absolute
        inset-y-0
        right-0
        flex
        items-center
        px-4
        text-purple-600
        border-l border-purple-600
        pointer-events-none
      "
    >
      <span :class="$style.arrow" />
    </div>
  </div>
</template>

<style lang="scss" module>
.select {
  height: 36px;
  box-shadow: 0 1px 2.5px -0.5px rgba(0, 0, 0, 0.85);
}

.arrow {
  width: 0;
  height: 0;
  border-top: 5px solid theme('colors.purple.600');
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
}
</style>
