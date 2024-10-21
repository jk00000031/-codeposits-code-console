<script setup lang="ts">
import { useAppConfig } from '@/stores/useAppConfig'
import { useAuthorize } from '@/stores/useAuthorize'
import type { MenuOption } from 'naive-ui'
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'

const route = useRoute()
const authorize = useAuthorize()
const appConfig = useAppConfig()

// 侧边栏折叠
const isCollapsed = computed(() => appConfig.collapse)
const collapsedIconSize = computed(() => (appConfig.collapse ? 20 : 18))

// 当前路由的 name
const activeRouteName = computed(() => route.name as string)

// 菜单组件 label
function renderMenuLabel(option: MenuOption) {
  if (!option.children || !option.children.length) {
    return h(
      RouterLink,
      {
        to: {
          name: option.key as string,
        },
      },
      { default: () => option.label },
    )
  }
}

// 菜单组件图标
function renderMenuIcon(option: MenuOption) {
  const meta: ObjectAny = option?._meta as unknown as ObjectAny
  if (!meta) return null
  if (!meta?.icon) return null
  return h(Icon, { icon: meta.icon, width: collapsedIconSize.value })
}

// 将路由树转为菜单树可使用树
function resolveMenu(tree: ObjectAny | ObjectAny[]) {
  return (Array.isArray(tree) ? tree : [tree])
    .map(item => ({
      key: item.name,
      label: item.title,
      _meta: item,
    }))
    .filter(item => item._meta.showAside)
}
</script>

<template>
  <n-menu
    :value="activeRouteName"
    :indent="16"
    :collapsed="isCollapsed"
    :collapsed-width="appConfig.sidebarCollapseWidth"
    :options="resolveMenu(authorize.MENU)"
    :render-label="renderMenuLabel"
    :render-icon="renderMenuIcon"
  />
</template>
