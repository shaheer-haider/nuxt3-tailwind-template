<template>
  <div class="sign-holder bg-no-repeat bg-contain flex bg-gray-900 items-center justify-center min-h-screen w-full">
    <div class="w-full max-w-400">
      <NuxtLink to="/" class="text-2xl md:text-6xl font-bold font-oleo uppercase text-primary flex justify-center mb-5">
        Tailwind Nuxt
      </NuxtLink>
      <div
        class="m-auto pt-8 pb-6 md:px-14 md:pt-10 md:pb-14 border border-gray-600 max-w-4xl bg-gray-800 rounded-2xl shadow">
        <h3 class="text-2xl md:text-3xl font-bold text-center text-[#f5f5f5]">
          Welcome back
        </h3>
        <form @submit.prevent="submitForm" class="mt-6 capitalize">
          <div class="mb-6">
            <label for="username" class="block cursor-pointer text-sm text-[#c9c9c9] font-medium mb-2">Username</label>
            <input autocomplete="true" v-model="username" id="username" type="text" required
              class="border-gray bg-gray-700 text-[#f5f5f5] rounded-xl px-4 py-3 w-full h-14 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-md caret-primary" />
          </div>
          <div class="mb-6">
            <label for="firstname"
              class="block cursor-pointer text-sm text-[#c9c9c9] font-medium mb-2">firstname</label>
            <input autocomplete="true" v-model="firstname" id="firstname" type="text" required
              class="border-gray bg-gray-700 text-[#f5f5f5] rounded-xl px-4 py-3 w-full h-14 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-md caret-primary" />
          </div>
          <div class="mb-6">
            <label for="lastname" class="block cursor-pointer text-sm text-[#c9c9c9] font-medium mb-2">lastname</label>
            <input autocomplete="true" v-model="lastname" id="lastname" type="text" required
              class="border-gray bg-gray-700 text-[#f5f5f5] rounded-xl px-4 py-3 w-full h-14 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-md caret-primary" />
          </div>
          <div class="mb-6">
            <label for="phone" class="block cursor-pointer text-sm text-[#c9c9c9] font-medium mb-2">phone</label>
            <input autocomplete="true" v-model="phone" id="phone" type="text" required
              class="border-gray bg-gray-700 text-[#f5f5f5] rounded-xl px-4 py-3 w-full h-14 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-md caret-primary" />
          </div>
          <div class="mb-6">
            <label for="email" class="block cursor-pointer text-sm text-[#c9c9c9] font-medium mb-2">email</label>
            <input autocomplete="true" v-model="email" id="email" type="text" required
              class="border-gray bg-gray-700 text-[#f5f5f5] rounded-xl px-4 py-3 w-full h-14 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-md caret-primary" />
          </div>
          <div class="mb-6">
            <label for="password" class="block cursor-pointer text-sm text-[#c9c9c9] font-medium mb-2">password</label>
            <div class="relative">
              <input autocomplete="true" id="password" v-model="password" :type="passwordFieldType" required
                class="border-gray-900 text-[#f5f5f5] rounded-xl bg-gray-700 pl-4 pr-10 py-3 w-full h-14 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-md caret-primary" />
              <div @click="switchVisibility" class="absolute top-0 right-3 h-full flex items-center fill-gray-900">
                <GlobalIcon :name="showPassword ? 'eye' : 'eye-close'" :class="{ 'fill-gray-800': !showPassword }"
                  class="cursor-pointer" />
              </div>
            </div>
          </div>
          <button type="submit"
            class="text-white text-md font-medium rounded-xl px-4 py-3 h-14 w-full mb-6 bg-gray-900">
            Register
          </button>
          <p class="text-sm md:text-base text-center text-[#c9c9c9]">
            Already have an account?
            <NuxtLink to="/login" class="text-2sm md:text-md text-[#f5f5f] font-medium">Sign In</NuxtLink>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';

const username = ref("");
const lastname = ref("");
const firstname = ref("");
const email = ref("");
const phone = ref("");
const password = ref("");

const passwordFieldType = ref("password");
const showPassword = ref(false);

function switchVisibility() {
  passwordFieldType.value = passwordFieldType.value === "password" ? "text" : "password";
  showPassword.value = !showPassword.value;
}
function submitForm() {
  let data = {
    username: username.value,
    lastname: lastname.value,
    firstname: firstname.value,
    email: email.value,
    phone: phone.value,
    password: password.value,
  };
  axios("http://127.0.0.1:8000/users/register/", {
    method: "post",
    withCredentials: true,
    data: data,
  })
    .then((res) => {
      // router.push("/")
    })
    .catch((err) => {
      console.log(err);
    });

}
</script>
