<template>
  <div
    class="fixed top-0 right-0 space-y-2 mt-4 mr-4 w-full"
    style="max-width: 300px"
  >
    <Notification
      v-for="notif in notifications"
      :key="notif.id"
      :title="notif.title"
      :content="notif.content"
      :kind="notif.kind"
      :id="notif.id"
    />
  </div>
</template>

<script>
import { notifStore } from '@/lib/store/notifications'

export default {
  data() {
    return {}
  },
  computed: {
    notifications() {
      return notifStore.state.notifications
    },
  },
}
</script>

<style>
</style>
