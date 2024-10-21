import { useAuthorize } from '@/stores/useAuthorize'
import type { Router } from 'vue-router'

export const LOGIN_PAGE = 'oi.login'

export const useGuard = (router: Router) => {
  router.beforeEach(async (to, from) => {
    const authorize = useAuthorize()
    if (to.name !== LOGIN_PAGE) {
      if (to.meta?.requireAuth && !authorize.TOKEN) {
        return { name: LOGIN_PAGE }
      } else {
        if (!authorize.installRoutes) {
          await authorize.withInstallMenu(router)
          return to.fullPath
        }
      }
    }
  })

  return router
}
