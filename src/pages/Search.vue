<script setup>
import { ref } from 'vue';
import AppFooter from '@/components/AppFooter.vue';

const models = ref([
  { name: 'Mercedes', icon: '/src/assets/icons/mercedes-black.svg' },
  { name: 'Audi', icon: '/src/assets/icons/mercedes-black.svg' },
  { name: 'BMW', icon: '/src/assets/icons/mercedes-black.svg' },
  { name: 'Porsche', icon: '/src/assets/icons/mercedes-black.svg' },
  { name: 'Volkswagen', icon: '/src/assets/icons/mercedes-black.svg' },
  { name: 'Ford', icon: '/src/assets/icons/mercedes-black.svg' },
  { name: 'Chevrolet', icon: '/src/assets/icons/mercedes-black.svg' },
  { name: 'Toyota', icon: '/src/assets/icons/mercedes-black.svg' }
]);

const condition = ref([
  'New',
  'Used',
]);

const rating = ref([
  '5',
  '4',
  '3',
  '2',
  '1',
]);
</script>

<template>
  <header class="p-4 bg-white">
    <UInput size="xl" placeholder="Search" icon="i-lucide-search" trailing-icon="i-lucide-settings-2" class="w-full"
      :ui="{ base: 'py-3.5', leadingIcon: 'size-4.5' }" />
  </header>

  <main class="mb-20">
    <!-- filter -->
    <section class="px-4 py-0">
      <div class="flex items-center justify-between pb-3 pt-0">
        <h2 class="text-lg font-bold">Recent</h2>
        <UButton color="neutral" variant="ghost" size="md" class="bg-transparent rounded-full font-semibold text-base">
          Clear All
        </UButton>
      </div>

      <hr class="border-gray-300 mb-1" />

      <ul>
        <li v-for="n in 5" :key="n">
          <UButton color="neutral" variant="ghost" size="md"
            class="w-full bg-transparent rounded-none text-base text-muted"
            :ui="{ base: 'p-0 sm:p-0 py-1.5 sm:py-1.5 flex item-center justify-between' }">
            <p class="text-base">Recent Search 1</p>
            <UButton icon="i-lucide-x" size="md" color="neutral" variant="ghost" class="text-muted" />
          </UButton>
        </li>
      </ul>
    </section>

    <!-- brands -->
    <section>
      <div class="flex items-center justify-between p-4 py-3">
        <h2 class="text-lg font-bold">Car Brands</h2>
      </div>

      <ul class="flex items-center justify-start gap-3 overflow-x-auto px-4 pb-1">
        <li v-for="(item, index) in models" :key="index">
          <UButton color="neutral" variant="ghost" size="md">
            <div class="flex-center flex-col gap-2">
              <div class="size-14 flex-center bg-gray-100 rounded-full">
                <UAvatar :src="item?.icon || ''" size="xl" class="bg-transparent" />
              </div>
              <h2 class="text-base font-semibold">{{ item?.name || 'unkown' }}</h2>
            </div>
          </UButton>
        </li>
      </ul>
    </section>

    <!-- condtion -->
    <section>
      <div class="flex items-center justify-between p-4 py-3">
        <h2 class="text-lg font-bold">Car Condition</h2>
      </div>

      <ul class="flex items-center justify-start gap-3 overflow-x-auto px-4 pb-1">
        <li>
          <UButton color="neutral" variant="ghost" size="md"
            class="bg-transparent border-2 rounded-full whitespace-nowrap" :ui="{ base: 'flex-center' }">
            All
          </UButton>
        </li>
        <li v-for="(item, index) in condition" :key="index">
          <UButton color="neutral" variant="ghost" size="md"
            class="bg-transparent border-2 rounded-full whitespace-nowrap" :ui="{ base: 'flex-center' }">
            {{ item || 'unkown' }}
          </UButton>
        </li>
      </ul>
    </section>

    <!-- price range -->
    <section>
      <div class="flex items-center justify-between p-4 py-3">
        <h2 class="text-lg font-bold">Price Range</h2>
      </div>
    </section>

    <!-- rating -->
    <section>
      <div class="flex items-center justify-between p-4 py-3">
        <h2 class="text-lg font-bold">Rating</h2>
      </div>

      <ul class="flex items-center justify-start gap-3 overflow-x-auto px-4 pb-1">
        <li>
          <UButton color="neutral" variant="ghost" size="md" icon="i-lucide-star"
            class="bg-transparent border-2 rounded-full whitespace-nowrap"
            :ui="{ base: 'flex-center', leadingIcon: 'size-4' }">
            All
          </UButton>
        </li>
        <li v-for="(item, index) in rating" :key="index">
          <UButton color="neutral" variant="ghost" size="md" icon="i-lucide-star"
            class="bg-transparent border-2 rounded-full whitespace-nowrap"
            :ui="{ base: 'flex-center', leadingIcon: 'size-4' }">
            {{ item || 'unkown' }}
          </UButton>
        </li>
      </ul>
    </section>
  </main>

  <AppFooter page="search" />
</template>

<style>
/*  */
</style>
