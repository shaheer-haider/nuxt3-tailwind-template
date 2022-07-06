<template>
  <div class="bg-[#000212] py-8 left-0 px-4 max-w-[240px] w-full shadow-md flex-shrink-0 h-full sm:h-auto z-40 fixed"
    :class="menuHide ? 'left-[-240px]' : 'sm:relative'">
    <NuxtLink to="/">
      <h2 class="text-4xl font-bold font-oleo uppercase text-primary text-center mb-8">
        Tailwind Nuxt
      </h2>
    </NuxtLink>
    <ul class="dashboard-list" v-for="(item, index) in sidebarMenu" :key="index">
      <li v-if="!item.requiredAuthentication || isAuthenticated"
        class="relative hover:text-[#c9c9c9] text-secondary-light font-medium rounded-lg py-2.5 px-4 mb-0.3 cursor-pointer hover:bg-gray-800"
        :class="{ 'active bg-gray-800 text-[#c9c9c9]': $route.meta.name === item.name }">
        <NuxtLink :to="`/${item.href}`" class="flex items-center">
          <GlobalIcon :name="item.icon" />
          <p class="ml-2.5 flex items-center justify-between flex-1">
            {{ item.name }}
          </p>
        </NuxtLink>
      </li>
    </ul>
  </div>

  <div @click="menuHide = true" :class="{
    'fixed left-0 top-0 right-0 bottom-0 z-30 w-full bg-backdrop sm:hidden': !menuHide,
  }" />
</template>

<script setup>
import { useUserStore } from '@/stores/UserStore';
const userStore = useUserStore()
const isAuthenticated = computed(() => {
  return userStore.isAuthenticated
})
const sidebarMenu = [
  {
    icon: "properties-ico",
    name: "Home",
    href: "",
    activeDot: false,
    requiredAuthentication: false,
  },
  {
    icon: "dashboard-ico",
    name: "Dashboard",
    href: "dashboard",
    activeDot: false,
    requiredAuthentication: true,
  },
]
defineProps(["menuHide"])


</script>

<style>
.dashboard-list li:hover svg path {
  stroke: #c9c9c9;
}
</style>
