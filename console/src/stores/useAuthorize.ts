import { convertListToTree } from '@/lib/tree'
import type { Router } from 'vue-router'
import routes from '@/router/routes.json'

interface AuthorizeState {
  // 登录凭证
  token: string
  // 授权用户信息
  userInfo: ObjectAny
  // 授权菜单树
  menu: any[]
  // 路由是否已经安装
  installRoutes: boolean
}

export const useAuthorize = defineStore('authorize', {
  state: () =>
    <AuthorizeState>{
      token: 'test',
      userInfo: {},
      menu: [],
      installRoutes: false,
    },
  getters: {
    TOKEN: state => state.token,
    MENU: state => state.menu,
  },
  actions: {
    // 获取授权菜单
    async getAuthorizeMenu() {
      this.menu = convertListToTree(routes)
    },
    // 安装授权菜单
    withInstallMenu(router: Router) {
      return new Promise<boolean>(async (resolve, reject) => {
        // 将路由树追加到路由
        if (!this.menu.length) {
          await this.getAuthorizeMenu()
        }
        try {
          recursionMenuTree(router, this.menu, 'oi.main')
          this.installRoutes = true
          resolve(true)
        } catch (error) {
          reject(false)
        }
      })
    },
  },
  // persist: {
  //   pick: ['token', 'userInfo', 'menu'],
  // },
})

// 递归授权路由树到路由
function recursionMenuTree(router: Router, tree: ObjectAny | ObjectAny[], parentName: string) {
  tree = Array.isArray(tree) ? tree : [tree]
  tree.forEach((item: ObjectAny) => {
    router.addRoute(parentName, {
      path: formatPath(item.routerPath),
      name: item.name,
      meta: item,
      component: () => import(`@/views/${formatPath(item.componentPath)}.vue`),
    })
    if ('children' in item) {
      recursionMenuTree(router, item.children, item.name)
    }
  })
}

// 处理路由
// 由于都是追加到 oi.main 的子集里面，因此路由左侧不能够有符号 /
// 当然顺手把右边的符号 / 也一起移除掉
function formatPath(path: string) {
  return path.replace(/^\/+|\/+$/g, '')
}
