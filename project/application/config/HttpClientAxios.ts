import axios from '@/.nuxt/axios'
import { NuxtAxiosInstance } from '@/node_modules/@nuxtjs/axios'

export class HttpClientAxios {
  private _axios: Object = axios

  get axios(): Object {
    return this._axios
  }

  set axios(value: Object) {
    this._axios = value
  }
}
