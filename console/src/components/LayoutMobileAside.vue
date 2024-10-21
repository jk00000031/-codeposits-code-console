<script setup lang="ts">
import { useAppConfig } from '@/stores/useAppConfig'
import LayoutAside from './LayoutAside.vue'

const route = useRoute()
const appConfig = useAppConfig()

const showMenu = ref<boolean>(false)
watch(route, () => (showMenu.value = false))

function toggleMenu() {
  showMenu.value = !showMenu.value
  if (showMenu.value) {
    appConfig.toggleCollapse()
  }
}
</script>

<template>
  <n-button quaternary circle class="lg:hidden" @click="toggleMenu">
    <Icon icon="heroicons-outline:menu" width="18" />
  </n-button>

  <n-drawer v-model:show="showMenu" placement="left" class="w-[280px]">
    <n-drawer-content closable body-content-style="--n-body-padding: 12px 0;" header-style="--n-header-padding: 14px 18px" :native-scrollbar="false">
      <template #header>
        <h3 class="text-base font-semibold">菜单</h3>
      </template>
      <LayoutAside />
    </n-drawer-content>
  </n-drawer>
</template>
