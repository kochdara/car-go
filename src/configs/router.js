import { createRouter, createWebHistory } from 'vue-router'
import i18n from './i18n'
import routes from './routes'

const supportedLocales = ['en', 'km']
const defaultLocale = 'en'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // 1. Routes with prefix
    {
      path: '/:locale',
      children: routes,
    },

    // 2. Routes without prefix (default locale)
    {
      path: '/',
      redirect: `/${defaultLocale}`,
    },
    ...routes.map((r) => ({
      ...r,
      path: `/${r.path}`,
      name: `default-${r.name}`,
    })),

    // 3. Redirect unknown paths to default locale
    {
      path: '/:pathMatch(.*)*',
      redirect: `/${defaultLocale}`,
    },
  ],
  // 👇 This ensures the page scrolls to top on each route change
  scrollBehavior(to, from, savedPosition) {
    // If there's a saved position (browser back/forward), use it
    if (savedPosition) {
      return savedPosition
    } else {
      // Scroll to top
      return { top: 0 }
    }
  },
})

router.beforeEach((to, from, next) => {
  const locale = to.params.locale
  if (locale && supportedLocales.includes(locale)) {
    if (i18n.global.locale !== locale) {
      i18n.global.locale = locale
    }
    return next()
  }
  // If no locale in path, use default
  i18n.global.locale = defaultLocale
  next()
})

export default router
