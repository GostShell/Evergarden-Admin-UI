<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Roles">
        <el-checkbox-group v-model="form.role">
          <el-checkbox
            v-for="role in form.roles"
            :key="role.id"
            :label="role.id"
            :checked="hasRole(role.id)"
            name="role"
          >
            {{ role.roleValue }}
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Update</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      form: {
        role: [],
        roles: []
      },
      activeRoles: []
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.form.roles = this.getAllRoles()
      this.activeRoles = this.getActiveRoles()
    })
  },
  methods: {
    ...mapGetters('user', ['getAllRoles', 'getActiveRoles']),
    onSubmit() {
      console.log('submit!')
    },
    hasRole(id) {
      console.log('hasRole()')
      for (const i in this.activeRoles) {
        if (parseInt(this.activeRoles[i].id) === parseInt(id)) {
          return true
        }
      }
      return false
    }
  }
}
</script>

<style lang="scss" scoped></style>
