<template>
  <div :class="classes">
    <span :class="colors"><slot name="icon" /></span>
    <span><slot /></span>
  </div>
</template>

<script>
export default {
  props: {
    kind: {
      type: String,
      default: 'primary',
      validator: (v) => ['primary', 'success', 'danger'].includes(v),
    },
  },
  computed: {
    classes() {
      const colors = {
        primary: 'border-blue-600',
        success: 'border-green-600',
        danger: 'border-red-600',
      }[this.kind]

      return `${colors} border-b-8 flex flex-col md:flex-row space-y-4 md:space-x-4 items-center rounded-t-md bg-white p-4 shadow`
    },
    colors() {
      return {
        primary: 'text-blue-600',
        success: 'text-green-600',
        danger: 'text-red-600',
      }[this.kind]
    },
  },
}
</script>

<style>
</style>
