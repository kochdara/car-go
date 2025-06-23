<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AppFooter from '@/components/AppFooter.vue';

const route = useRoute();
const router = useRouter();

const rating = ref([
  '5',
  '4',
  '3',
  '2',
  '1',
]);

defineOptions({ name: 'DetailsPage' });
</script>

<template>
  <header class="fixed top-0 w-full px-4 py-3 bg-white z-[1001] shadow-md">
    <div class="flex item-center justify-between">
      <UButton icon="i-lucide-arrow-left" size="xl" color="neutral" variant="ghost" @click="router.back()" />

      <UButton icon="i-lucide-heart" size="xl" color="neutral" variant="ghost" />
    </div>
  </header>

  <main class="mt-16 mb-18">
    <article class="p-4">
      <!-- title -->
      <h1 class="text-2xl font-semibold mb-2">McLaren Supercar</h1>
      <p class="text-sm text-muted font-semibold mb-2">
        <span class="text-xs bg-gray-100 rounded-md px-2 py-0 ring ring-default">Used</span>&nbsp;
        | Rate: 4.6
      </p>

      <!-- photos -->
      <div class="w-full my-4 space-y-2">
        <img src="https://www.eliteeuro.com.au/wp-content/uploads/2021/12/Audi-R8-Coupe-v10-1024x682.jpeg"
          alt="Car Image" class="w-full h-60 object-cover rounded-lg" />

        <ul class="flex items-center justify-start gap-2 overflow-x-auto pb-1">
          <li v-for="n in 8" :key="n">
            <div class="flex-center flex-col w-24 h-24">
              <img src="https://www.eliteeuro.com.au/wp-content/uploads/2021/12/Audi-R8-Coupe-v10-1024x682.jpeg"
                alt="Car Image" class="w-full h-24 object-cover rounded-lg" />
            </div>
          </li>
        </ul>
      </div>

      <!-- description -->
      <section class="pb-5">
        <h2 class="text-lg font-semibold mb-2">Description</h2>
        <p class="text-base text-muted">
          The McLaren Supercar is a high-performance vehicle that combines cutting-edge technology with luxury design.
          It features a powerful engine, advanced aerodynamics, and a sleek exterior that turns heads on the road. With
          its exceptional handling and speed, the McLaren Supercar is designed for those who crave an exhilarating
          driving experience.
        </p>
      </section>

      <!-- profile -->
      <aside class="w-full flex-center gap-5 pb-5">
        <UAvatar src="https://github.com/benjamincanac.png" class="size-12" />
        <div class="flex-1">
          <h3 class="text-lg font-semibold">Benjamin Canac</h3>
          <p class="text-sm text-muted">Car Dealer - Cambodia</p>
        </div>
        <UButton icon="i-lucide-phone" size="xl" color="neutral" variant="ghost" />
      </aside>

      <!-- price -->
      <section class="pb-5 grid grid-cols-2 gap-2">
        <div>
          <h2 class="text-sm text-muted font-semibold">Price</h2>
          <p class="text-2xl font-bold">$250,000</p>
        </div>

        <UButton color="secondary" variant="solid" size="xl" class="shadow-lg rounded-full"
          :ui="{ base: 'flex-center' }">
          Book Test Drive
        </UButton>
      </section>

    </article>

    <!-- review -->
    <section>
      <div class="flex items-center justify-between px-1 py-2">
        <UButton icon="i-lucide-arrow-left" size="xl" color="neutral" variant="ghost" @click="router.back()">
          <p class="text-lg">4.8 (84 reviews)</p>
        </UButton>
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

      <ul>
        <li v-for="n in 8" :key="n" class="p-4 border-b border-gray-200">
          <div class="flex items-center gap-3 mb-3">
            <UAvatar src="https://github.com/benjamincanac.png" class="size-12" />
            <div class="flex-1">
              <h3 class="text-lg font-semibold">Benjamin Canac</h3>
            </div>
            <UButton color="neutral" variant="ghost" size="md" icon="i-lucide-star"
              class="bg-transparent border-2 rounded-full whitespace-nowrap"
              :ui="{ base: 'flex-center', leadingIcon: 'size-4.5' }">
              729
            </UButton>
            <UButton color="neutral" variant="ghost" size="md" icon="i-lucide-ellipsis"
              class="bg-transparent border-2 rounded-full" :ui="{ base: 'flex-center', leadingIcon: 'size-4.5' }" />
          </div>

          <p class="text-sm">The McLaren Supercar is a high-performance vehicle that combines cutting-edge technology
            with luxury design.</p>

          <div class="flex items-center gap-2 mt-2">
            <UButton color="neutral" variant="ghost" size="md" icon="i-lucide-heart"
              class="bg-transparent rounded-full whitespace-nowrap"
              :ui="{ base: 'flex-center', leadingIcon: 'size-4.5' }">
              729
            </UButton>
            <span class="text-sm text-muted">1 day ago</span>
          </div>
        </li>
      </ul>
    </section>

  </main>
</template>
