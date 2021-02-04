<template>
  <form @submit.prevent class="space-y-5">
    <Input label="Nom d'utilisateur" placeholder="jondoe" />
    <Input label="Mot de passe" placeholder="********" />
    <div class="flex justify-between items-center">
      <Button>Connexion</Button>
      <router-link class="text-gray-700" to="/auth/register"
        >Creer un compte</router-link
      >
    </div>
  </form>
</template>

<script>
export default {}
</script>

<style>
</style>
