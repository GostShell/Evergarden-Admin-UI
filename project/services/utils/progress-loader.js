export default {
  startLoading(instance) {
    instance.loading = true
    instance.$nuxt.$loading.start()
  },
  finishLoading(instance) {
    instance.loading = false
    instance.$nuxt.$loading.finish()
  }
}
