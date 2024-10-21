<script setup lang="ts">
import { zhCN, dateZhCN } from 'naive-ui'
import { theme } from '@/lib/naive-ui'
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme-overrides="theme">
    <RouterView />
  </n-config-provider>
</template>
