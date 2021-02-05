export class Auth {
  /**
   * @param {import('@nuxtjs/axios').NuxtAxiosInstance} axios
   */
  constructor(axios) {
    this.axios = axios
  }

  login(username, password) {
    return this.axios.$post('/auth/token', { username, password })
  }
  register(username, password, confirm) {
    return this.axios.$post('/auth/register', { username, password, confirm })
  }
  refresh(_refresh) {
    return this.axios.$post('http://139.162.167.235:8000/ping')
  }
}
