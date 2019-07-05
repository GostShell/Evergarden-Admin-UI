export default function(context) {
  context.$axios.onRequest(config => {
    const token = context.store.getters['user/getToken']
    // console.log('the context befor request')
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }
    config.headers['Access-Control-Allow-Origin'] = 'http://localhost:8080'
    // config.baseURL = 'http://localhost:8080/'
    // console.log(config)
  })
  // context.$axios.baseURL = 'http://localhost:8080/'
  // console.log(context)
}
