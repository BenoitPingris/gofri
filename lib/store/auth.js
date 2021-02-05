import Vue from 'vue'

class AuthStore {
  constructor() {
    this.state = Vue.observable({
      access_token: null,
      refresh_token: null,
    })
  }
}

export const authStore = new AuthStore()
