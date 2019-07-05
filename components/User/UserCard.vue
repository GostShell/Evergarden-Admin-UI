<template>
  <el-card style="margin-bottom:20px;">
    <div slot="header" class="clearfix">
      <span>About me</span>
    </div>

    <div class="user-profile">
      <div class="box-center">
        <pan-thumb
          image="user.avatar"
          :height="'100px'"
          :width="'100px'"
          :hoverable="false"
        >
          <div>Hello</div>
          <!-- {{ user.role }} -->
        </pan-thumb>
      </div>
      <div class="box-center">
        <!-- <div class="user-name text-center">{{ user.name }}</div> -->
        <div class="user-role text-center text-muted">
          <!-- {{ user.role | uppercaseFirst }} -->
        </div>
      </div>
    </div>

    <div class="user-bio">
      <div class="user-education user-bio-section">
        <div class="user-bio-section-header">
          <i class="el-icon-notebook-1"></i><span>Info</span>
        </div>
        <div class="user-bio-section-body">
          <div class="text-muted">
            <el-input v-model="email" placeholder="Email"></el-input>
            <el-input v-model="firstname" placeholder="Firstname"></el-input>
            <el-input v-model="lastname" placeholder="Lastname"></el-input>
            <el-input v-model="pseudo" placeholder="Pseudo"></el-input>
            <el-input
              v-model="password"
              type="password"
              placeholder="Password"
            ></el-input>
          </div>
        </div>
      </div>

      <div>
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="Roles">
            <el-checkbox-group v-model="form.selectedRole">
              <el-checkbox
                v-for="role in form.nodeRoles"
                :key="role.id"
                :label="role.id"
                :checked="hasRole(role.id)"
                name="role"
              >
                {{ formatRole(role.roleValue) }}
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">Update</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </el-card>
</template>

<script>
import PanThumb from '@/components/User/PanThumb'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    PanThumb
  },
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      avatar: '',
      pseudo: '',
      password: '',
      form: {
        selectedRole: [],
        nodeRoles: []
      },
      activeRoles: []
    }
  },
  mounted() {
    const data = this.getInfo()
    this.firstname = data.firstname
    this.lastname = data.lastname
    this.email = data.email
    this.pseudo = data.pseudo
    this.password = data.password
    this.form.nodeRoles = this.getAllRoles()
    this.activeRoles = this.getActiveRoles()
  },
  methods: {
    ...mapGetters('user', ['getInfo', 'getAllRoles', 'getActiveRoles']),
    ...mapMutations('user', [
      'SET_LASTNAME',
      'SET_FIRSTNAME',
      'SET_EMAIL',
      'SET_PSEUDO',
      'SET_ROLES'
    ]),
    onSubmit() {
      this.SET_LASTNAME(this.lastname)
      this.SET_FIRSTNAME(this.firstname)
      this.SET_PSEUDO(this.pseudo)
      this.SET_ROLES(this.form.selectedRole)
      this.SET_EMAIL(this.email)
      this.$store.dispatch('user/update', this.password)
    },
    hasRole(id) {
      console.log('hasRole()')
      for (const i in this.activeRoles) {
        if (parseInt(this.activeRoles[i].id) === parseInt(id)) {
          return true
        }
      }
      return false
    },
    formatRole(role) {
      return role.replace('ROLE_', '')
    }
  }
}
</script>

<style lang="scss" scoped>
.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}

.user-profile {
  .user-name {
    font-weight: bold;
  }

  .box-center {
    padding-top: 10px;
  }

  .user-role {
    padding-top: 10px;
    font-weight: 400;
    font-size: 14px;
  }

  .box-social {
    padding-top: 30px;

    .el-table {
      border-top: 1px solid #dfe6ec;
    }
  }

  .user-follow {
    padding-top: 20px;
  }
}

.user-bio {
  margin-top: 20px;
  color: #606266;

  span {
    padding-left: 4px;
  }

  .user-bio-section {
    font-size: 14px;
    padding: 15px 0;

    .user-bio-section-header {
      border-bottom: 1px solid #dfe6ec;
      padding-bottom: 10px;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
}

.el-input {
  margin-bottom: 5px;
}
</style>
