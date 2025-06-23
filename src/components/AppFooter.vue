<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { localizedRoute } from '@/configs/configs';

const prop = defineProps({
  page: {
    type: String,
    default: 'home'
  }
})

// Get the current route
const route = useRoute()

// Computed links
const homeLink = computed(() => localizedRoute(route, 'home'))
const searchLink = computed(() => localizedRoute(route, 'search'))
const listingLink = computed(() => localizedRoute(route, 'listing'))
</script>

<template>
  <footer class="fixed h-17 bottom-0 grid grid-cols-5 w-full bg-primary z-[1001]">
    <!-- Home -->
    <UButton size="lg" class="w-full flex-center flex-col gap-1" color="primary" variant="primary" :to="homeLink">
      <UIcon name="i-lucide-home" :class="{
        'text-secondary': prop.page === 'home',
        'text-white': prop.page !== 'home',
        'size-5': true
      }" />
      <h2 :class="{
        'text-xs': true,
        'text-secondary': prop.page === 'home',
        'text-white': prop.page !== 'home'
      }">Home</h2>
    </UButton>

    <!-- Listing -->
    <UButton size="lg" class="w-full flex-center flex-col gap-1" color="primary" variant="primary" :to="listingLink">
      <UIcon name="i-lucide-layout-grid" :class="{
        'text-secondary': prop.page === 'listing',
        'text-white': prop.page !== 'listing',
        'size-5': true
      }" />
      <h2 :class="{
        'text-xs': true,
        'text-secondary': prop.page === 'listing',
        'text-white': prop.page !== 'listing'
      }">Listing</h2>
    </UButton>

    <!-- Sell -->
    <UButton size="lg" class="w-full flex-center flex-col gap-1" color="primary" variant="primary">
      <UIcon name="i-lucide-square-plus" :class="{
        'text-secondary': prop.page === 'sell',
        'text-white': prop.page !== 'sell',
        'size-6': true
      }" />
      <h2 :class="{
        'text-xs': true,
        'text-secondary': prop.page === 'sell',
        'text-white': prop.page !== 'sell'
      }">Sell</h2>
    </UButton>

    <!-- Search -->
    <UButton size="lg" class="w-full flex-center flex-col gap-1" color="primary" variant="primary" :to="searchLink">
      <UIcon name="i-lucide-search" :class="{
        'text-secondary': prop.page === 'search',
        'text-white': prop.page !== 'search',
        'size-5': true
      }" />
      <h2 :class="{
        'text-xs': true,
        'text-secondary': prop.page === 'search',
        'text-white': prop.page !== 'search'
      }">Search</h2>
    </UButton>

    <!-- Profile -->
    <UButton size="lg" class="w-full flex-center flex-col gap-1" color="primary" variant="primary">
      <UIcon name="i-lucide-user" :class="{
        'text-secondary': prop.page === 'profile',
        'text-white': prop.page !== 'profile',
        'size-5': true
      }" />
      <h2 :class="{
        'text-xs': true,
        'text-secondary': prop.page === 'profile',
        'text-white': prop.page !== 'profile'
      }">Profile</h2>
    </UButton>
  </footer>
</template>
