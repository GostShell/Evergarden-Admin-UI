<template>
  <section>
    <navbar />
  </section>
</template>

<script>
import Navbar from '~/components/NavBar.vue'

export default {
  middleware: 'authenticated',
  components: {
    Navbar
  }
}
</script>

<style></style>
