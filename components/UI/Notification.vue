<template>
  <div
    class="bg-white rounded-lg border-gray-300 border p-3 shadow-lg cursor-pointer hover:border-gray-500 transition-colors"
  >
    <div class="flex flex-row items-center">
      <div class="px-2">
        <svg
          class="w-8 h-8"
          :class="colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            :d="icons[kind]"
          />
        </svg>
      </div>
      <div class="ml-2 mr-6">
        <span class="font-semibold" :class="colors">{{ title }}</span>
        <span class="block text-gray-600">{{ content }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    kind: {
      type: String,
      default: 'normal',
      validator: (v) => ['normal', 'danger', 'success'].includes(v),
    },
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    duration: {
      type: Number,
      default: 5,
    },
  },

  data() {
    return {
      icons: {
        normal: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        danger: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        success: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      },
    }
  },
  computed: {
    classes() {
      return `p-4 border bg-white border-gray-200 shadow-lg rounded-lg`
    },
    colors() {
      return {
        normal: 'text-blue-800',
        success: 'text-green-800',
        danger: 'text-red-800',
      }[this.kind]
    },
  },
}
</script>
