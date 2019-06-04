<template>
  <el-container>
    <el-header>
      <navbar />
    </el-header>

    <el-container>
      <el-aside> </el-aside>

      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Navbar from '~/components/NavBar.vue'
export default {
  layout: 'dashboard',
  middleware: 'authenticated',
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.el-main {
  background-color: lightgrey;
  height: 95.1vh;
}
.el-header {
  height: 4.9vh !important;
  padding: 0;
}
.el-aside {
  background-color: rgb(46, 48, 48);
  width: 200px !important;
  color: white;
  height: 95.1vh;
}
</style>
