<template>
  <form @submit.prevent="onSubmit" class="space-y-5">
    <Input
      :error="errors['username']"
      vmodel="username"
      label="Nom d'utilisateur"
      placeholder="jondoe"
    />
    <Input
      :error="errors['password']"
      v-model="password"
      label="Mot de passe"
      placeholder="********"
    />
    <Input
      :error="errors['confirm']"
      v-model="confirm"
      label="Confirmer"
      placeholder="********"
    />
    <div class="flex justify-between items-center">
      <Button type="submit">Inscription</Button>
      <router-link class="text-gray-700" to="/auth"
        >J'ai deja un compte</router-link
      >
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      username: '',
      password: '',
      confirm: '',
      errors: {},
    }
  },
  methods: {
    async onSubmit() {
      this.loading = true
      try {
        await this.$authService.register(
          this.username,
          this.password,
          this.confirm
        )
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
