<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
import { watch } from 'vue'

import { useRoute } from 'vue-router'
const route = useRoute()

watch(() => route.path, (val) => {
  const params = val.split('/')
  locale.value = (params.length > 1 && params[1] === 'km') ? 'km' : 'en'
})

</script>

<template>
  <UApp>
    <router-view name="header" />
    <router-view />
    <router-view name="footer" />
  </UApp>
</template>
