export const namespaced = true

export const state = () => {
  return {
    id: 0,
    content: '',
    title: '',
    author: ''
  }
}

export const mutations = {
  SET_CONTENT(state, content) {
    state.content = content
  },
  SET_TITLE(state, title) {
    state.title = title
  },
  SET_AUTHOR(state, author) {
    state.author = author
  },
  SET_ID(state, id) {
    state.id = id
  }
}

export const actions = {
  postContent(context, { content, title, author }) {
    return this.$axios
      .post('/api/v1/private/post', {
        body: content,
        title,
        author
      })
      .then(res => {
        context.commit('SET_CONTENT', res.data.body)
        context.commit('SET_TITLE', res.data.title)
        context.commit('SET_AUTHOR', res.data.author)
        context.commit('SET_ID', res.data.id)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const getters = {
  getArticle: state => {
    return state.content
  }
}
