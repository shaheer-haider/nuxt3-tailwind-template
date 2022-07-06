<template>
  <div class="bg-[#000212] py-3 sm:px-10 w-full h-[77px] shadow-md2 flex items-center justify-between px-3">
    <div class="flex items-center">
      <div class="cursor-pointer" @click="emit('toggleMenu')">
        <GlobalIcon name="menu-ico" value="None" />
      </div>
      <h3 class="text-lg font-semibold ml-6 text-secondary-dark">
        {{ pageTitle }}
      </h3>
    </div>
    <div>
      <!-- User Dropdown -->
      <div class="relative z-20">
        <div v-if="isAuthenticated" class="flex items-center cursor-pointer" @click="dropDown = !dropDown">
          <div class="flex items-center">
            <img src="https://avatars.dicebear.com/api/adventurer/.svg" class="w-16" alt="avatar" />
            <div class="sm:ml-3 ml-2">
              <p class="sm:text-md font-semibold text-primary">Muhammad Shaheer</p>
              <span class="text-sm text-primary font-medium">Platinum II</span>
            </div>
          </div>
          <GlobalIcon name="dropdown-ico" class="sm:ml-4 ml-2" />
        </div>
        <div v-show="dropDown" class="bg-gray-800 absolute right-0 mt-2 rounded-md w-44 shadow-md3">
          <NuxtLink to="/logout" class="relative text-[#c9c9c9] block p-4 rounded-md hover:bg-gray-700">
            Log out
          </NuxtLink>
        </div>
        <div v-if="!isAuthenticated" class="flex gap-2 items-center cursor-pointer">
          <NuxtLink to="/login"
            class="relative text-[#c9c9c9] bg-gray-900 block px-5 py-3 rounded-md hover:bg-gray-700">
            Sign In
          </NuxtLink>
          <NuxtLink to="/signup"
            class="relative text-[#c9c9c9] bg-gray-900 block px-5 py-3 rounded-md hover:bg-gray-700">
            Sign Up
          </NuxtLink>
        </div>
      </div>
      <!-- Dropdown backdrop -->
      <div @click="dropDown = false" :class="{ 'fixed left-0 top-0 right-0 bottom-0 z-10': dropDown }" />
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/UserStore';
const userStore = useUserStore()
const isAuthenticated = computed(() => {
  return userStore.isAuthenticated
})
const dropDown = ref(false);
const emit = defineEmits(["toggleMenu"])
defineProps({
  pageTitle: {
    type: String,
  },
});

</script>
