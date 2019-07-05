<template>
  <div>
    <el-menu default-active="2">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-edit-outline"></i>
          <span>Article</span>
        </template>
        <nuxt-link to="/admin/add-new">
          <el-menu-item index="1-1"> Add New </el-menu-item>
        </nuxt-link>
        <el-menu-item index="1-2">All Articles</el-menu-item>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>User</span>
        </template>
        <el-menu-item index="2-1"> Create new </el-menu-item>
        <el-menu-item index="2-2">Update user</el-menu-item>
        <nuxt-link to="/admin/profile">
          <el-menu-item index="2-3">Profile</el-menu-item>
        </nuxt-link>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
