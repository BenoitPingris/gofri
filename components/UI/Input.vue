<template>
  <label class="flex flex-col">
    <span class="text-gray-700 font-semibold">{{ label }}</span>
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
      :class="classes"
      :type="type"
      name="label"
      :placeholder="placeholder"
    />
    <span v-if="error" class="ml-3 text-red-500 text-sm">{{ error }}</span>
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
    value: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      const errorClasses = !!this.error
        ? 'border-red-500 focus:border-red-800'
        : 'border-gray-300 focus:border-gray-600'
      return `${errorClasses} px-3 py-2 shadow rounded border focus:outline-none`
    },
  },
}
</script>

<style>
</style>
