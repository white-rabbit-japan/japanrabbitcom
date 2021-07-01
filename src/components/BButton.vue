<script>
export default {
  props: {
    to: {
      type: String,
      default: '',
    },
    cta: {
      type: String,
      default: '',
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    },
    baseUrl: {
      type: String,
      default: null,
    },
  },
  computed: {
    link() {
      if (this.cta) {
        return (this.baseUrl || this.$static.metadata.appUrl) + '/' + this.cta
      }

      return this.to ? this.$tp(this.to) : '#'
    },
  },
}
</script>
<template>
  <g-link
    :to="link"
    :target="cta ? '_self' : '_blank'"
    :class="[
      $style.button,
      secondary
        ? 'bg-gray hover:bg-gray-strong'
        : 'bg-primary hover:bg-primary-soft',
    ]"
    v-bind="$attrs"
  >
    <slot>{{ text }}</slot>
  </g-link>
</template>

<static-query>
query {
  metadata {
    appUrl
  }
}
</static-query>

<style lang="scss" module>
.button {
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.05),
    0 0.5px 1.5px 0 rgba(0, 0, 0, 0.1),
    inset 0 0.5px 0 0 rgba(255, 255, 255, 0.1);
  @apply no-underline rounded-lg text-white py-3 px-8 font-sans;
}
</style>
