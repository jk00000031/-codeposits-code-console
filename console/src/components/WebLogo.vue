<script setup lang="ts">
withDefaults(
  defineProps<
    Partial<{
      size: number
      color: string
    }>
  >(),
  {
    size: 18,
    color: 'rgba(0, 0, 0, 1)',
  },
)
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :width="size" :height="size" viewBox="0 0 18 18" fill="none">
    <path :stroke="color" stroke-width="2" d="M3 15L15 3" />
    <path :stroke="color" stroke-width="2" d="M4 9L4 4L9 4" />
    <path :stroke="color" stroke-width="2" d="M14 9L14 14L9 14" />
  </svg>
</template>
