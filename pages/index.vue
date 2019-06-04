<template>
  <div id="after-nuxt">
    <navbar />

    <div id="after-nav" class="columns is-fullheight-with-navbar">
      <div id="asidebar" class="column is-2">
        <sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/NavBar.vue'
import Sidebar from '~/components/SideBar.vue'

export default {
  middleware: 'authenticated',
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style src="element-ui/lib/theme-chalk/index.css"></style>
