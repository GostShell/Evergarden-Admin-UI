import Axios from 'axios'
import { AxiosInstance } from 'axios'
// @ts-ignore
import jwtDecode from 'jwt-decode'

export class UserApi {
  private axios: AxiosInstance

  constructor() {
    this.axios = Axios.create({
      baseURL: 'http://localhost:3000'
    })
  }

  // TODO replace Object by specific typed response
  public async auth(email: string, password: string): Promise<Object> {
    return this.axios
      .post('api/v1/login', {
        email: email,
        password: password
      })
      .then(res => {
        return res
      })
      .catch(reason => reason)
  }
}
