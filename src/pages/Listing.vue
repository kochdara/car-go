<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AppFooter from '@/components/AppFooter.vue';
import CardProduct from '@/components/CardProduct.vue';

const route = useRoute();
const router = useRouter();

const models = ref([
  { name: 'Mercedes', icon: '/src/assets/icons/mercedes.svg' },
  { name: 'Audi', icon: '/src/assets/icons/mercedes.svg' },
  { name: 'BMW', icon: '/src/assets/icons/mercedes.svg' },
  { name: 'Porsche', icon: '/src/assets/icons/mercedes.svg' },
  { name: 'Volkswagen', icon: '/src/assets/icons/mercedes.svg' },
  { name: 'Ford', icon: '/src/assets/icons/mercedes.svg' },
  { name: 'Chevrolet', icon: '/src/assets/icons/mercedes.svg' },
  { name: 'Toyota', icon: '/src/assets/icons/mercedes.svg' }
]);
</script>

<template>
  <header class="fixed top-0 w-full p-4 bg-white z-[1001] shadow-md">
    <UInput size="xl" placeholder="Search" icon="i-lucide-search" trailing-icon="i-lucide-settings-2" class="w-full"
    :ui="{ base: 'py-3.5', leadingIcon: 'size-4.5' }" />
  </header>

  <main class="mt-23 mb-18">
    <!-- top deals -->
    <section class="pt-0">
      <div class="flex items-center justify-between  px-4 pb-3 pt-0">
        <h2 class="text-lg font-bold">All Deals</h2>
      </div>

      <ul class="flex items-center justify-start gap-3 overflow-x-auto px-4 pb-1">
        <li>
          <UButton color="neutral" variant="ghost" size="md"
            class="bg-transparent border-2 rounded-full whitespace-nowrap" :ui="{ base: 'flex-center' }">
            All
          </UButton>
        </li>
        <li v-for="(item, index) in models" :key="index">
          <UButton color="neutral" variant="ghost" size="md"
            class="bg-transparent border-2 rounded-full whitespace-nowrap" :ui="{ base: 'flex-center' }">
            {{ item?.name || 'unkown' }}
          </UButton>
        </li>
      </ul>

      <!-- listing -->
      <ul class="grid grid-cols-2 gap-4 p-4">
        <li v-for="(item, index) in models" :key="index">
          <CardProduct :item="item" :index="index" />
        </li>

        <li v-for="(item, index) in models" :key="index">
          <CardProduct :item="item" :index="index" />
        </li>
      </ul>
    </section>

    <AppFooter page="listing" />
  </main>


</template>

<style>
/*  */
</style>
