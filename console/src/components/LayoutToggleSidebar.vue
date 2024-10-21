<script setup lang="ts">
import { useAppConfig } from '@/stores/useAppConfig'

const appConfig = useAppConfig()
</script>

<template>
  <n-tooltip placement="right">
    <template #trigger>
      <n-button quaternary @click="appConfig.toggleCollapse" circle class="hidden lg:inline-flex">
        <transition name="fade">
          <Icon v-if="appConfig.collapse" icon="fluent:pane-open-24-regular" width="22" />
          <Icon v-else icon="fluent:pane-close-24-regular" width="22" />
        </transition>
      </n-button>
    </template>
    侧边栏伸缩
  </n-tooltip>
</template>
