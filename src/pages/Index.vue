<script setup>
//
</script>

<template>
  <header class="p-4 bg-[#FDB815]">
    <UInput size="xl" placeholder="Search" icon="i-lucide-search" trailing-icon="i-lucide-settings-2" class="w-full" />
  </header>

  <main>
    <!-- filter -->
    <ul class="flex items-center justify-start gap-3 overflow-x-auto px-4 pb-1 bg-[#FDB815]">
      <li v-for="n in 8" :key="n">
        <UButton color="neutral" variant="ghost" size="md"
          class="bg-transparent border-2 rounded-full whitespace-nowrap" :ui="{ base: 'flex-center' }">
          Most Recent
        </UButton>
      </li>
    </ul>

    <!-- category -->
    <ul class="grid grid-cols-4 gap-3 p-4 w-full bg-[#FDB815]">
      <li v-for="n in 8" :key="n" class="w-full">
        <ULink>a
        </ULink>
      </li>
    </ul>

  </main>
</template>

<style>
/*  */
</style>
