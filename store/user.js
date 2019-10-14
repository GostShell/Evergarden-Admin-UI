import jwtDecode from 'jwt-decode'
// import { AboutMe } from '@/project/domain/profile/AboutMe'
import { UserApi } from '@/project/services/api/UserApi'

export const namespaced = true

export const state = () => {
  return {
    aboutMe: {},
    id: '',
    lastname: '',
    firstname: '',
    avatarUrl: '',
    token: '',
    email: '',
    password: '',
    pseudo: '',
    roles: [],
    isTokenValid: false,
    allRoles: []
  }
}

export const mutations = {
  SET_ID(state, id) {
    state.id = id
  },
  SET_LASTNAME(state, lastname) {
    state.lastname = lastname
  },
  SET_FIRSTNAME(state, firstname) {
    state.firstname = firstname
  },
  SET_PSEUDO(state, pseudo) {
    state.pseudo = pseudo
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
  SET_PASSWORD(state, password) {
    state.password = password
  },
  SET_ROLES(state, roles) {
    state.roles = roles
  },
  SET_IS_TOKEN_VALID(state, boolValue) {
    state.isTokenValid = boolValue
  },
  SET_ALL_ROLES(state, allRoles) {
    state.allRoles = allRoles
  }
}

export const actions = {
  getToken({ commit, dispatch }, { email, password }) {
    const api = new UserApi(this.$axios)
    return api
      .auth(email, password)
      .then(res => {
        const decoded = jwtDecode(res.data.token)
        commit('SET_TOKEN', res.data.token)
        commit('SET_EMAIL', email)
        commit('SET_PASSWORD', password)
        commit('SET_ID', decoded.id)
        dispatch('verifyToken')
        dispatch('getInfo')
        dispatch('getAllRoles')
      })
      .catch(err => {
        console.log(err)
      })
  },
  verifyToken({ commit }) {
    commit('SET_IS_TOKEN_VALID', getters.isTokenValid)
  },
  getInfo({ commit, getters }) {
    return this.$axios
      .get('api/v1/private/user/' + getters.getId)
      .then(res => {
        commit('SET_FIRSTNAME', res.data.firstname)
        commit('SET_LASTNAME', res.data.lastname)
        commit('SET_PSEUDO', res.data.pseudo)
        commit('SET_ROLES', res.data.roles)
      })
      .catch(err => console.log(err))
  },
  getAllRoles({ commit }) {
    return this.$axios
      .get('api/v1/private/role')
      .then(res => {
        commit('SET_ALL_ROLES', res.data)
      })
      .catch(err => console.log(err))
  },
  update({ dispatch, state }, password) {
    return this.$axios
      .put('api/v1/private/user', {
        firstname: state.firstname,
        lastname: state.lastname,
        pseudo: state.pseudo,
        email: state.email,
        password,
        roles: state.roles,
        id: state.id
      })
      .then(res => {
        console.log(res)
        dispatch('getInfo')
      })
      .catch(err => console.log(err))
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
  },

  getToken: state => state.token,

  getId: state => state.id,

  getAllRoles: state => state.allRoles,

  getActiveRoles: state => state.roles,

  getInfo: state => {
    return {
      firstname: state.firstname,
      lastname: state.lastname,
      pseudo: state.pseudo,
      email: state.email,
      password: state.password
    }
  }
}
