<template>
  <button :class="classes" @click="$emit('click', $event)">
    <span v-if="$slots.leading">
      <slot name="leading" />
    </span>
    <span><slot /></span>
    <span v-if="$slots.trailing">
      <slot name="trailing" />
    </span>
  </button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'normal',
      validator: (v) => ['small', 'normal', 'large'].includes(v),
    },
    kind: {
      type: String,
      default: 'primary',
      validator: (v) =>
        ['primary', 'secondary', 'danger', 'success'].includes(v),
    },
    loading: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: null,
    },
    outline: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      const sizeClass = {
        small: 'px-2 py-1 text-sm',
        normal: 'px-6 py-2',
        large: 'px-8 py-3 font-bold text-lg',
      }[this.size]

      const colorClass = {
        primary: `${
          this.outline
            ? 'text-blue-600 border-blue-600'
            : 'bg-blue-600 text-white'
        }`,
        secondary: `${
          this.outline
            ? 'border-blue-800 text-blue-800'
            : 'bg-blue-800 text-gray-200'
        }`,
        danger: `${
          this.outline ? 'text-red-600 border-red-600' : 'bg-red-600 text-white'
        }`,
        success: `${
          this.outline
            ? 'text-green-600 border-green-600'
            : 'bg-green-600 text-white'
        }`,
      }[this.kind]
      return `${sizeClass} ${colorClass} ${
        this.outline ? 'font-semibold' : ''
      } rounded-md border inline-flex space-x-2 items-center border-transparent`
    },
  },
}
</script>

<style>
</style>
