export default function(context) {
  context.$axios.onRequest(config => {
    const token = context.store.getters['user/getToken']
    console.log('the context befor request')
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }
    console.log(config)
  })

  //   console.log(context)
}
