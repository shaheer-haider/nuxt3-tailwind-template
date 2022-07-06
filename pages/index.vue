<template>
  <div class="container mx-auto bg-gray-800 pl-16 pb-44 pt-20 mt-10 rounded-2xl">
    <h1 class="font-bold text-gray-200 text-4xl">Welcome to Tailwind Nuxt!</h1>
    <h2 class="text-[#f5f5f5] text-lg mt-5">
      Top Class Design and Development Template for JavaScript, Nuxt 3 and Tailwind CSS.
    </h2>
    <div class="flex gap-x-4">
      <div
        class="relative hover:text-[#c9c9c9] bg-gray-900 w-max px-5 py-2 text-secondary-light font-medium rounded-lg cursor-pointer hover:bg-gray-700 mt-5">
        <NuxtLink to="/" class="flex items-center">
          <p class="flex items-center justify-between flex-1">Dashboard</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>


<script setup>
definePageMeta({
  layout: "default",
});
</script>