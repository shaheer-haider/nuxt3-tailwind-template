<template>
  <div class="flex px-2 w-full md:w-1/2 mb-4">
    <div class="border border-gray-600 bg-gray-700 rounded-xl w-full py-5 px-6 relative overflow-hidden">
      <div v-if="outerBorder" class="absolute left-0 top-0 w-1.5 h-full" :class="'bg-'+borderColor"></div>
      <div class="flex items-center justify-between py-0.5 relative">
        <div v-if="innerBorder" class="absolute left-0 top-2 w-1.5 h-16 rounded-xl" :class="'bg-'+borderColor"></div>
        <div :class="{'ml-6' : innerBorder}">
          <p class="text-3lg sm:text-xl font-bold" :class="'text-'+textColor">{{numberTask}}</p>
          <p class="text-[#c9c9c9] capitalize">{{textTask}}</p>
        </div>
        <div>
        <GlobalIcon name="arrow-ico" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    props: {
        numberTask: {
            type: String,
            default: "01"
        },
        textTask: {
            type: String
        },
        borderColor: {
            type: String,
            default: "primary"
        },
        textColor: {
            type: String,
            default: "primary"
        },
        outerBorder: {
            type: Boolean
        },
        innerBorder: {
            type: Boolean
        }
    },
}
</script>