import {; NuxtAxiosInstance } from '@/node_modules/@nuxtjs/axios'

export class UserApi {
  private axios: NuxtAxiosInstance

  constructor(axios: NuxtAxiosInstance) {
    this.axios = axios
  }

  public auth(email: string, password: string): string {
    return this.axios
      .post('api/v1/login', {
      email: email,
      password: password
      })
      .then(res => {
        const decoded = jwtDecode(res.data.token)
      }).
  }
}
