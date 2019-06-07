<template>
  <div>
    <el-menu default-active="2">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-edit-outline"></i>
          <span>Article</span>
        </template>
        <nuxt-link to="/add-new">
          <el-menu-item index="1-2"> Add New </el-menu-item>
        </nuxt-link>
        <el-menu-item index="1-1">All Articles</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
