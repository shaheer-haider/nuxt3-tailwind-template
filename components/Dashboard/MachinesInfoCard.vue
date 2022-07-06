<template>
  <div class="flex w-full lg:w-1/2 px-2 lg:mb-0 mb-4">
    <div class="bg-gray-800 text-[#f5f5f5] shadow-md4 pt-6 pb-2 px-5 rounded-xl w-full">
      <h4 class="sm:text-lg text-md font-semibold mb-5">{{titleTask}}</h4>
      <div class="flex flex-wrap -mx-2">
        <DashboardCardItem numberTask="03" textTask="Live Machines" borderColor="red" textColor="red" outerBorder />
        <DashboardCardItem numberTask="01" textTask="Free Machines" borderColor="orange" textColor="orange" outerBorder />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleTask: {
      type: String
    }
  }
}
</script>