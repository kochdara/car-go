<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AppFooter from '@/components/AppFooter.vue';
import CardProduct from '@/components/CardProduct.vue';
import { localizedRoute } from '@/configs/configs';

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

defineOptions({ name: 'HomePage' });
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
    <aside class="p-4 pt-0"
      style="background: linear-gradient(to bottom, #ffb902 0%, #ffb902 50%, #ffffff 50%, #ffffff 100%);">
      <UCard :ui="{ body: 'grid grid-cols-5 gap-3 p-3 sm:p-3' }" class="shadow-md">
        <div class="col-span-2">
          <img src="https://www.eliteeuro.com.au/wp-content/uploads/2021/12/Audi-R8-Coupe-v10-1024x682.jpeg"
            alt="Mercedes" class="w-full h-38 object-cover rounded-lg" />
        </div>
        <div class="col-span-3 space-y-1.5">
          <h2 class="text-lg font-semibold">Mercedes BT-50z : 2026</h2>
          <p class="text-sm text-muted font-semibold">Rate: 4.6 | &nbsp;<span
            class="text-xs bg-gray-100 rounded-md px-2 py-0 ring ring-default">Used</span></p>
          <p class="text-lg font-semibold">Price: $50,000</p>
        </div>
      </UCard>
    </aside>

    <!-- top deals -->
    <section class="pt-0">
      <div class="flex items-center justify-between  px-4 pb-3 pt-0">
        <h2 class="text-lg font-bold">Top Deals</h2>
        <UButton color="neutral" variant="ghost" size="md" class="bg-transparent rounded-full font-semibold text-base"
          :to="localizedRoute(route, 'listing')">
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

      <!-- see all -->
      <aside class="flex-center pb-4">
        <UButton color="secondary" variant="solid" size="xl" class="shadow-md rounded-full"
          :ui="{ base: 'flex-center px-10 py-3' }" :to="localizedRoute(route, 'listing')">
          See All Deals
        </UButton>
      </aside>
    </section>

    <AppFooter />
  </main>


</template>

<style>
/*  */
</style>
