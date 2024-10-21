<script setup lang="ts">
import WebLogo from './WebLogo.vue'
import AccountPopover from './AccountPopover.vue'
import LayoutToggleSidebar from './LayoutToggleSidebar.vue'
import LayoutMobileAside from './LayoutMobileAside.vue'
import AppNotification from './AppNotification.vue'
import AppConfig from './AppConfig.vue'

import { useAppConfig } from '@/stores/useAppConfig'

const appConfig = useAppConfig()
</script>

<template>
  <header class="flex items-center h-full gap-3 px-3 mx-auto container-full">
    <router-link to="/" class="flex items-center flex-shrink-0 gap-1 font-semibold">
      <WebLogo :size="20" />
      <span class="mx-0.5 text-base">{{ appConfig.siteName }}</span>
    </router-link>
    <LayoutToggleSidebar />
    <LayoutMobileAside />
    <span class="ml-auto" />
    <AppNotification />
    <AppConfig />
    <n-divider vertical />
    <AccountPopover />
  </header>
</template>
