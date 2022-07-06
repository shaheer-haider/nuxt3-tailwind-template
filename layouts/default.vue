<template>
  <div class="flex min-h-screen">
    <Sidebar :menuHide="menuHide"></Sidebar>
    <div class="bg-gray-900 flex flex-wrap items-start flex-1 flex-col overflow-hidden">

      <Head @toggleMenu="toggleMenu"></Head>
      <NuxtPage></NuxtPage>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';

import { useUserStore } from '@/stores/UserStore';
const userStore = useUserStore()
const isAuthenticated = computed(() => {
  return userStore.isAuthenticated
})

const menuHide = ref(false)
const toggleMenu = () => {
  menuHide.value = !menuHide.value
}
function checkAuthentication() {
  axios("http://127.0.0.1:8000/",
    {
      method: "get",
      withCredentials: true
    }).then(res => {
      userStore.isAuthenticated = true
    }).catch(err => {
      userStore.isAuthenticated = false
    })
}
if (process.client) {
  checkAuthentication()
}


</script>
