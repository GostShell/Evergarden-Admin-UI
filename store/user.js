import jwtDecode from 'jwt-decode'

export const namespaced = true

export const state = () => {
  return {
    lastname: '',
    firstname: '',
    avatarUrl: '',
    token: '',
    email: '',
    roles: [],
    isTokenValid: false
  }
}

export const mutations = {
  SET_LASTNAME(state, lastname) {
    state.lastname = lastname
  },
  SET_FIRSTNAME(state, firstname) {
    state.firstname = firstname
  },
  SET_AVATARURL(state, avatarUrl) {
    state.avatarUrl = avatarUrl
  },
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_EMAIL(state, email) {
    state.email = email
  },
  SET_ROLES(state, roles) {
    state.roles = roles
  },
  SET_IS_TOKEN_VALID(state, boolValue) {
    state.isTokenValid = boolValue
  }
}

export const actions = {
  getToken({ commit, dispatch }, { email, password }) {
    return this.$axios
      .post('/api/v1/login', {
        email: email,
        password: password
      })
      .then(res => {
        commit('SET_TOKEN', res.data.token)
        commit('SET_EMAIL', email)
        dispatch('verifyToken')
      })
      .catch(err => {
        console.log(err)
      })
  },
  verifyToken({ commit }) {
    commit('SET_IS_TOKEN_VALID', getters.isTokenValid)
  }
}

export const getters = {
  isTokenValid: state => {
    if (state.token) {
      const decoded = jwtDecode(state.token)
      if (decoded.exp > Math.round(Date.now() / 1000)) {
        return true
      }
    }
    return false
  }
}
