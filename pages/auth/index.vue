<template>
  <form @submit.prevent="onSubmit" class="space-y-5">
    <Input
      :error="errors['username']"
      v-model="username"
      label="Nom d'utilisateur"
      placeholder="jondoe"
    />
    <Input
      :error="errors['password']"
      v-model="password"
      label="Mot de passe"
      placeholder="********"
      type="password"
    />
    <div class="flex justify-between items-center">
      <Button type="submit" :loading="loading">Connexion</Button>
      <router-link class="text-gray-700" to="/auth/register"
        >Creer un compte</router-link
      >
    </div>
  </form>
</template>

<script>
import { authStore } from '@/lib/store'

export default {
  data() {
    return {
      loading: false,
      username: '',
      password: '',
      errors: {},
    }
  },
  computed: {
    token() {
      return authStore.state.token
    },
  },
  methods: {
    async onSubmit() {
      this.loading = true
      try {
        const d = await this.$authService.login(this.username, this.password)
        authStore.state.token = d.access_token
      } catch (e) {
        if (e.response.status === 422) {
          this.errors = e.response.data.detail.reduce(
            (acc, i) => ({
              ...acc,
              [i.loc[1]]: i.msg,
            }),
            {}
          )
        }
      }
      this.loading = false
    },
  },
}
</script>
