<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<template>
  <label :class="$style.wrapper">
    <input
      :checked="value"
      type="checkbox"
      :class="$style.input"
      @change="$emit('input', $event.target.checked)"
    />
    <span :class="$style.label" />
  </label>
</template>

<style lang="scss" module>
$width: 60px;

.wrapper {
  width: $width;
}

.input {
  position: absolute;
  left: -9999px;
}

.label {
  height: $width / 2;
  background-image: radial-gradient(circle at 68% 50%, #b492cb, #32313f);
  transition: background-color 0.2s ease-in;
  @apply block relative overflow-hidden cursor-pointer rounded-full shadow-inner;
}

.label::before {
  right: 48%;
  width: $width / 2;
  content: '';
  transition: all 0.2s ease-in;
  @apply absolute bg-white inset-y-0 rounded-full;
}

// .input:checked + .label,
// .input:checked + .label::before {
// }

.input:checked + .label {
  @apply shadow-none;
}

.input:checked + .label::before {
  @apply inset-y-0 right-0;
}

.input:focus + .label {
  @apply shadow-outline;
}
</style>
