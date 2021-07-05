<template>
  <Layout>
    <div
      v-if="$page"
      class="container py-16 mx-auto text-gray-strong smDown:py-8"
    >
      <div class="text-4xl text-center">
        <h1 class="px-2" v-html="$page.doc.title" />
      </div>

      <div v-if="$page.doc.cover_image" class="pt-8">
        <g-image quality="1" width="4154" :src="$page.doc.cover_image" />
      </div>

      <div class="mx-auto mt-12" :class="$style.container">
        <div class="content" v-html="$page.doc.content" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Doc ($path: String!) {
  doc (path: $path) {
    title
    description
    content
    cover_image (width: 4154, blur: 50, quality: 90)
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    if (!this.$page) {
      return {}
    }

    return {
      title: this.$page.doc.title,
      meta: [
        {
          name: 'description',
          content: this.$page.doc.description,
        },
      ],
    }
  },
  mounted() {
    if (!this.$page) {
      window.location.pathname = '/404'
    }
  },
}
</script>

<style lang="scss" module>
.container {
  max-width: theme('screens.lgDown.max') !important;
}
</style>

<style lang="scss" scoped>
// stylelint-disable selector-pseudo-element-no-unknown
.content::v-deep {
  h2 {
    @apply text-3xl mb-12 text-left text-primary;

    @screen sm {
      @apply mb-6;
    }

    &:not(:first-child) {
      @apply mt-16;
    }
  }

  p + p {
    @apply mt-4;
  }

  section {
    @apply bg-gray-500 rounded-lg shadow-md p-10;

    @screen sm {
      @apply px-4 py-6;
    }

    + section {
      @apply mt-12;
    }
  }
}
</style>
