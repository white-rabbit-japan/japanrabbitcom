<template functional>
  <li class="text-base text-center xlUp:mr-5 lgDown:mb-6">
    <!-- v-scroll-to="link.to.startsWith('#') ? link.to : 'html'" -->
    <a
      v-if="props.to.includes(':')"
      :href="props.to"
      :class="$style.link"
      class="xlUp:inline-block"
      target="_blank"
    >
      {{ parent.$t('layouts.default.header.' + props.tKey) }}
    </a>
    <g-link
      v-else
      :active-class="$style.activeLink"
      :class="$style.link"
      class="xlUp:inline-block"
      exact
      :to="props.to"
    >
      {{ parent.$t('layouts.default.header.' + props.tKey) }}
    </g-link>
  </li>
</template>

<style lang="scss" module>
.link {
  @apply relative text-primary no-underline font-medium min-w-full px-2 leading-relaxed;

  transition: all 0.2s ease;

  &::after {
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    content: ' ';
    transition: all 0.2s ease;
    @apply bg-primary;
  }

  &:hover {
    &::after {
      left: 2.5%;
      width: 95%;
    }
  }
}

.activeLink {
  &::after {
    left: 2.5%;
    width: 95%;
  }
}
</style>
