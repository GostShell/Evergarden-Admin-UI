<template>
  <div class="">
    <el-card style="margin-bottom:20px;">
      <div slot="header" class="clearfix">
        <span>About me</span>
      </div>
      <div class="user-profile">
        <div class="box-center">
          <avatar></avatar>
        </div>
        <div class="box-center">
          <div class="user-role text-center text-muted"></div>
        </div>
      </div>

      <div class="user-bio">
        <div class="user-education user-bio-section">
          <div class="user-bio-section-body">
            <div class="text-muted">
              <!-- INFO SECTION -->
              <div class="user-bio-section-header">
                <i class="el-icon-notebook-1"></i><span>Info</span>
              </div>
              <el-form ref="form" :model="form" label-width="5em">
                <el-form-item label="Email">
                  <el-input
                    v-model="aboutMe.email"
                    placeholder="Email"
                    class="input-medium"
                  ></el-input>
                </el-form-item>
                <el-form-item label="Firstname">
                  <el-input
                    v-model="aboutMe.firstname"
                    placeholder="Firstname"
                    class="input-medium"
                  ></el-input>
                </el-form-item>
                <el-form-item label="Lastname">
                  <el-input
                    v-model="aboutMe.lastname"
                    placeholder="Lastname"
                    class="input-medium"
                  ></el-input>
                </el-form-item>
                <el-form-item label="Pseudo">
                  <el-input
                    v-model="aboutMe.pseudo"
                    placeholder="Pseudo"
                    class="input-medium"
                  ></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="onSubmit">Update</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </el-card>

    <!-- PASSWORD - SECTION -->
    <el-card class="box-card" style="margin-bottom:20px;">
      <div slot="header" class="clearfix">
        <span>Password</span>
      </div>
      <div class="">
        <!-- SECURITY SECTION -->
        <el-form ref="form" :model="form" label-width="5em">
          <el-form-item label="Previous"
            ><el-input
              v-model="previousPass"
              type="password"
              placeholder="Previous Password"
              class="input-medium"
            ></el-input
          ></el-form-item>
          <el-form-item label="New"
            ><el-input
              v-model="newPass"
              type="password"
              placeholder="New Password"
              class="input-medium"
            ></el-input
          ></el-form-item>
          <el-form-item label="Confirm"
            ><el-input
              v-model="confirmPass"
              type="password"
              placeholder="Confirm Password"
              class="input-medium"
            ></el-input
          ></el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">Update</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>

    <el-card class="box-card" style="margin-bottom:20px;">
      <div slot="header"><span>Role</span></div>
      <div>
        <!-- ROLE SECTION -->
        <el-form ref="form" :model="form" label-width="5em">
          <el-form-item label="Roles">
            <el-checkbox-group v-model="form.selectedRole">
              <el-checkbox
                v-for="role in form.nodeRoles"
                :key="role.id"
                :label="role.id"
                :checked="hasRole(role.id)"
                name="role"
              >
                {{ formatRole(role.role) }}
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">Update</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import Avatar from '@/components/User/Avatar'
import { mapGetters, mapMutations } from 'vuex'
import Vue from 'vue'
/* import { AboutMe } from '@/project/domain/profile/AboutMe' */
import { AboutMeMapper } from '@/project/mapper/AboutMeMapper'

export default Vue.extend({
  components: {
    Avatar
  },
  data() {
    return {
      aboutMe: {},
      avatar: '',
      previousPass: '',
      newPass: '',
      confirmPass: '',
      form: {
        selectedRole: [],
        nodeRoles: []
      },
      activeRoles: []
    }
  },
  mounted() {
    const data = this.getInfo()
    this.aboutMe = AboutMeMapper.mapToAboutMe(data)
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
})
</script>

<style lang="scss" scoped>
.input-medium {
  width: 25em;
}

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
