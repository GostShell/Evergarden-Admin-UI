<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="8">
        <el-card>
          <div slot="header" class="">
            <span>Profile</span>
          </div>
          <div>
            Test
          </div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <user-card></user-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import UserCard from '@/components/User/UserCard.vue'
export default {
  layout: 'dashboard',
  components: {
    UserCard
  }
}
</script>

<style lang="scss" scoped></style>
