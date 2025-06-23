<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AppFooter from '@/components/AppFooter.vue';
import CardProduct from '@/components/CardProduct.vue';

const route = useRoute();
const router = useRouter();

const popular = ref([
  'Popular',
  'Most Recent',
  'Price High',
  'Price Low',
  'Popular',
  'Popular',
]);

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
  <header class="p-4 bg-[#FDB815]">
    <UInput size="xl" placeholder="Search" icon="i-lucide-search" trailing-icon="i-lucide-settings-2" class="w-full"
    :ui="{ base: 'py-3.5', leadingIcon: 'size-4.5' }" />
  </header>

  <main class="mb-18">
    <!-- filter -->
    <ul class="flex items-center justify-start gap-3 overflow-x-auto px-4 pb-1 bg-[#FDB815]">
      <li v-for="(item, index) in popular" :key="index">
        <UButton color="neutral" variant="ghost" size="md"
          class="bg-transparent border-2 rounded-full whitespace-nowrap" :ui="{ base: 'flex-center' }">
          {{ item || 'unkown' }}
        </UButton>
      </li>
    </ul>

    <!-- category -->
    <ul class="grid grid-cols-4 gap-3 p-4 w-full bg-[#FDB815]">
      <li v-for="(item, index) in models" :key="index" class="w-full flex-center">
        <UButton color="neutral" variant="ghost" size="md">
          <div class="flex-center flex-col gap-2">
            <div class="size-14 flex-center bg-black rounded-full">
              <UAvatar :src="item?.icon || ''" size="xl" class="bg-transparent" />
            </div>
            <h2 class="text-base font-semibold">{{ item?.name || 'unkown' }}</h2>
          </div>
        </UButton>
      </li>
    </ul>

    <!-- quick card -->
    <aside class="p-4 pt-0" style="background: linear-gradient(to bottom, #ffb902 0%, #ffb902 50%, #ffffff 50%, #ffffff 100%);">
      <UCard :ui="{ body: 'grid grid-cols-5 gap-3 p-3 sm:p-3' }">
        <div class="col-span-2">
          <img src="https://www.eliteeuro.com.au/wp-content/uploads/2021/12/Audi-R8-Coupe-v10-1024x682.jpeg" alt="Mercedes" class="w-full h-38 object-cover rounded-lg" />
        </div>
        <div class="col-span-3">
          <h2 class="text-lg font-semibold mb-2">Latest News</h2>
          <p class="text-sm text-gray-600 mb-4">Stay updated with the latest news and trends in the automotive industry.</p>
        </div>
      </UCard>
    </aside>

    <!-- top deals -->
    <section class="pt-0">
      <div class="flex items-center justify-between  px-4 pb-3 pt-0">
        <h2 class="text-lg font-bold">Top Deals</h2>
        <UButton color="neutral" variant="ghost" size="md" class="bg-transparent rounded-full font-semibold text-base">
          See All
        </UButton>
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
      </ul>
    </section>

    <AppFooter />
  </main>


</template>

<style>
/*  */
</style>
