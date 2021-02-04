<template>
  <div class="px-8 flex justify-center flex-col md:flex-row">
    <div class="font-bold text-blue-800 my-10 text-3xl">
      Bienvenue chez Gofri !
    </div>
    <shopping class="w-3/4 h-auto" />
    <div class="h-1 my-4 w-full bg-gray-200"></div>
    <nuxt-child />
  </div>
</template>

<script>
import shopping from '@/assets/shopping_app.svg?inline'
export default {
  components: {
    shopping,
  },
}
</script>

<style>
</style>
