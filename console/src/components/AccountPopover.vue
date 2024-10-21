<script setup lang="ts">
interface Prop {
  size: number | 'small' | 'medium' | 'large' | undefined
}

defineProps<Partial<Prop>>()
</script>

<template>
  <n-popover trigger="click">
    <template #trigger>
      <n-avatar circle class="cursor-pointer" :size="size">U</n-avatar>
    </template>
    <div class="w-48">1</div>
  </n-popover>
</template>
