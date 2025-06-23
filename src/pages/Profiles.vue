<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AppFooter from '@/components/AppFooter.vue';

const route = useRoute();
const router = useRouter();

defineOptions({ name: 'ProfilePage' });
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
      <UButton color="neutral" variant="ghost" label="Active" class="w-1/2 flex-center border-b-2
      text-lg text-primary rounded-none" />
      <UButton color="neutral" variant="ghost" label="Sold"
        class="w-1/2 flex-center border-b-2 border-gray-200 text-lg rounded-none" />
    </UButtonGroup>


  </main>

  <AppFooter page="profile" />
</template>
