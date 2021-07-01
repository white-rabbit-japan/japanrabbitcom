<template>
  <Layout>
    <div class="container px-1 py-16 mx-auto text-center">
      <g-image
        src="~/assets/img/404-dark.png"
        alt="not found"
        width="600"
        class="mx-auto"
      />
    </div>
  </Layout>
</template>

<script>
export default {
  name: 'NotFoundView',
  metaInfo() {
    return {
      title: this.$t('notFound.title'),
    }
  },
}
</script>
