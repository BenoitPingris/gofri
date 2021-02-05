import Vue from 'vue'
import Notifications from '~/components/UI/Notifications.vue'

Vue.use({
  install(vue) {
    if (process.client) {
      const notifComponent = vue.extend(Notifications)
      const container = document.createElement('div')
      document.querySelector('body').appendChild(container)
      const lol = new notifComponent()
      lol.$mount(container)
    }
  },
})
