<template>
  <div class="p-5 flex-col inline-flex rounded-lg bg-white shadow-md">
    <span class="font-semibold text-2xl mb-2" v-if="title">
      {{ title }}
    </span>
    <div class="text-gray-800">
      <slot />
    </div>
    <div class="mt-4 flex space-x-4 justify-end" v-if="$slots.actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: null,
    },
  },
}
</script>

<style>
</style>
