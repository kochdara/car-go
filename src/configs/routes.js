const routes = [
  {
    path: '',
    name: 'home',
    components: { default: () => import('@/pages/Index.vue') },
  },
  {
    path: 'listing',
    name: 'listing',
    components: { default: () => import('@/pages/Listing.vue') },
  },

  {
    path: 'c-:slug-adid-:id',
    name: 'details',
    components: { default: () => import('@/pages/Details.vue') },
  },

  {
    path: 'search',
    name: 'search',
    components: { default: () => import('@/pages/Search.vue') },
  },

  {
    path: 'profile',
    name: 'profile',
    components: { default: () => import('@/pages/Profiles.vue') },
  },
]

export default routes
