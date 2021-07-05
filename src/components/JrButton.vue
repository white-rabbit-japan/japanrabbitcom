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
    success: {
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
        // TODO remove this
        if (this.cta === 'signup') {
          return '/request-access'
        }

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
    :class="[$style.button, success ? 'bg-success' : 'bg-primary']"
    class="
      px-7
      py-1.5
      font-sans
      text-white
      no-underline
      rounded-2xl
      whitespace-nowrap
    "
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
  box-shadow: 0 3px 6px #00000029;

  &:hover {
    filter: brightness(110%) saturate(110%);
  }
}
</style>
