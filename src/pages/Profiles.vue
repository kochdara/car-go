<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AppFooter from '@/components/AppFooter.vue';

const route = useRoute();
const router = useRouter();

const page = ref(0);

defineOptions({ name: 'ProfilePage' });

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
  <main class="p-4 mb-18">
    <!-- profile -->
    <aside class="w-full flex-center gap-5 py-4">
      <UAvatar src="https://github.com/benjamincanac.png" class="size-12" />
      <div class="flex-1">
        <h3 class="text-lg font-semibold">Benjamin Canac</h3>
        <p class="text-sm text-muted">Car Dealer - Cambodia</p>
      </div>
    </aside>

    <h2 class="text-xl font-semibold">My Listing</h2>
    <!-- listing -->
    <UButtonGroup size="xl" class="w-full mt-4">
      <UButton color="neutral" variant="ghost" label="Active" :class="{
        'w-1/2': true,
        'flex-center': true,
        'border-b-2': true,
        'text-lg': true,
        'border-gray-200': page != 0,
        'text-primary': page == 0,
        'rounded-none': true,
      }" @click="page = 0;" />

      <UButton color="neutral" variant="ghost" label="Sold" :class="{
        'w-1/2': true,
        'flex-center': true,
        'border-b-2': true,
        'text-lg': true,
        'border-gray-200': page != 1,
        'text-primary': page == 1,
        'rounded-none': true,
      }" @click="page = 1;" />
    </UButtonGroup>

    <!-- active page -->
    <article v-if="page == 0" class="space-y-4 my-4">
      <UCard v-for="(item, index) in models" :key="index" :ui="{ body: 'grid grid-cols-5 gap-3 p-3 sm:p-3' }" class="shadow-md">
        <div class="col-span-2">
          <img src="https://www.eliteeuro.com.au/wp-content/uploads/2021/12/Audi-R8-Coupe-v10-1024x682.jpeg"
            alt="Mercedes" class="w-full h-28 object-cover rounded-lg" />
        </div>
        <div class="col-span-3 space-y-1.5">
          <h3 class="text-lg font-semibold">{{ item?.name || 'unkown' }}</h3>
          <p class="text-sm text-muted font-semibold">Color: Silver | &nbsp;<span
              class="text-xs bg-gray-100 rounded-md px-2 py-0 ring ring-default">In Delivery</span></p>
          <p class="text-lg font-semibold mb-2">Price: $50,000</p>
        </div>
      </UCard>
    </article>

    <!-- sold -->
    <article v-else class="space-y-4 my-4">

    </article>

    <!-- add new -->
    <aside class="flex-center mt-8">
      <UButton color="secondary" variant="solid" size="xl" class="shadow-lg rounded-full"
        :ui="{ base: 'flex-center px-8 py-4' }">
        Add New Car
      </UButton>
    </aside>

  </main>

  <AppFooter page="profile" />
</template>
