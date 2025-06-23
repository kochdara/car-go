<script setup>
import { ref } from 'vue';
import { localizedRoute } from '@/configs/configs';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  },
  index: {
    type: Number,
    default: 0
  }
});

</script>

<template>
  <RouterLink :to="localizedRoute(route, 'details', { slug: 'details', id: index })">
    <UCard :ui="{ body: 'p-0 sm:p-0', root: 'ring-0', }">
      <div class="relative w-full h-40 mb-2">
        <img src="https://www.eliteeuro.com.au/wp-content/uploads/2021/12/Audi-R8-Coupe-v10-1024x682.jpeg"
          alt="Car Image" class="w-full h-40 object-cover rounded-lg" />

        <!-- heart -->
        <div class="absolute top-2 right-2">
          <UButton color="neutral" variant="soft" size="md" class="rounded-full p-1 shadow-lg">
            <UIcon name="i-lucide-heart" class="size-5" />
          </UButton>
        </div>
      </div>
      <h3 class="text-lg font-semibold">{{ item?.name || 'unkown' }}</h3>
      <p class="text-sm text-muted font-semibold">Rate: 4.6 | &nbsp;<span
          class="text-xs bg-gray-100 rounded-md px-2 py-0 ring ring-default">Used</span></p>
      <p class="text-lg font-semibold mb-2">Price: $50,000</p>
    </UCard>
  </RouterLink>
</template>
