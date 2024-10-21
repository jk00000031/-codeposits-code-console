import type { RouteRecordRaw } from 'vue-router'

export const useAppConfig = defineStore('appConfig', () => {
  // 网站名称
  const siteName = 'CodePosits'

  // 侧边栏折叠
  const collapse = ref<boolean>(false)
  const toggleCollapse = () => (collapse.value = !collapse.value)

  // 侧边栏收起宽度
  const sidebarCollapseWidth = ref<number>(64)

  // 侧边栏展开宽度
  const sidebarExpandWidth = ref<number>(230)

  // 侧边栏折叠器样式
  const sidebarTriggerStyle = {
    top: '28px',
  }

  // 开启路由 Tabs
  const routeTabs = ref<boolean>(false)
  const cacheRoutes = ref<RouteRecordRaw[]>([])
  const pushCache = (route: RouteRecordRaw) => {
    cacheRoutes.value.push(route)
  }
  const removeCache = (index: number) => {
    cacheRoutes.value.splice(index, 1)
    if (cacheRoutes.value.length <= 0) {
      cacheRoutes.value.push()
    }
  }

  return {
    siteName,
    collapse,
    toggleCollapse,
    sidebarCollapseWidth,
    sidebarExpandWidth,
    sidebarTriggerStyle,
  }
})
