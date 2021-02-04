<template>
  <label class="flex flex-col">
    <span class="text-gray-700 font-semibold">{{ label }}</span>
    <input
      class="px-3 py-2 shadow rounded border border-gray-300 focus:outline-none focus:border-gray-600"
      :type="type"
      name="label"
      value=""
      id="label"
      :placeholder="placeholder"
    />
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
}
</script>

<style>
</style>
