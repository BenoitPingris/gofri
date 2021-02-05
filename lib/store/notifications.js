import Vue from 'vue'

const randomString = () =>
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15)

class NotificationStore {
  constructor() {
    this.state = Vue.observable({
      notifications: [],
    })
    this.id = 0
  }

  add({ duration = 5000, title, content, kind = 'normal' }) {
    let timeout = 0
    const id = randomString()

    if (duration > 0) {
      timeout = window.setTimeout(() => this.remove(id), duration)
    }
    this.state.notifications.push({
      duration,
      title,
      content,
      kind,
      timeout,
      id,
    })
  }

  remove(id) {
    const index = this.state.notifications.findIndex((o) => o.id === id)
    if (index === -1) {
      return
    }
    window.clearTimeout(this.state.notifications[index].timeout)
    this.state.notifications.splice(index, 1)
  }
}

export const notifStore = new NotificationStore()
