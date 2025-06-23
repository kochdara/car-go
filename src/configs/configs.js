import { ref } from 'vue'

export function goWithPush(route, router, name, params = {}, query = {}) {
  const hasLocale = !!route.params.locale
  router.push({
    name: `${(!hasLocale) ? 'default-' : ''}${name}`,
    params: { locale: route.params.locale || null, ...params },
    query: { ...query }
  })
}

export function goWithReplace(route, router, name, params = {}, query = {}) {
  const hasLocale = !!route.params.locale
  router.replace({
    name: `${(!hasLocale) ? 'default-' : ''}${name}`,
    params: { locale: route.params.locale || null, ...params },
    query: { ...query }
  })
}

export function localizedRoute(route, name, params = {}, query = {}) {
  const hasLocale = !!route.params.locale
  return {
    name: `${(!hasLocale) ? 'default-' : ''}${name}`,
    params: { locale: route.params.locale || null, ...params },
    query: { ...query },
  };
}

