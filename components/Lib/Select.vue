<template>
  <div>
    <p v-if="selectLabel" class="text-secondary-dark font-medium text-sm mb-2">
    </p>
    <div
      class="relative text-secondary text-left min-w-168 outline-none"
      :class="selectStyle"
      :tabindex="tabindex"
      @blur="open = false"
    >
      <div
        class="bg-white select-none cursor-pointer rounded-lg px-4"
        :class="{ open: open, 'border border-gray py-5 h-14': !!borderColor, 'py-2.5': !borderColor, 'shadow-md2 font-medium': showShadow, 'border border-gray font-[400]': !showShadow, 'text-gray-base': lightColor }"
        @click="open = !open"
      >
        <p :class="!!borderColor ? 'text-2sm' : ''">{{ selected }}</p>
        <GlobalIcon
          name="dropdown-ico"
          class="absolute right-4"
          :class="!!borderColor ? 'top-6.5' : 'top-5'"
        />
      </div>
      <div
        class="bg-white rounded-lg shadow-md2 absolute left-0 right-0 overflow-hidden z-10"
        :class="[{ hidden: !open }, optionLabel]"
      >
        <div
          v-for="(option, i) of options"
          :key="i"
          @click="
            selected = option;
            open = false;
            $emit('input', option);
          "
        >
          <p class="cursor-pointer px-3 py-2.5 select-none hover:bg-gray-light3">
            {{ option }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            required: true,
        },
        default: {
            type: String,
            required: false,
            default: null,
        },
        borderColor: {
            type: String,
            default: null,
        },
        tabindex: {
            type: Number,
            required: false,
            default: 0,
        },
        showShadow: {
            type: Boolean,
            default: true,
        },
        selectLabel: String,
        selectStyle: String,
        optionLabel: String,
        lightColor: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            selected: this.default
                ? this.default
                : this.options.length > 0
                    ? this.options[0]
                    : null,
            open: false,
        };
    },
    mounted() {
        this.$emit("input", this.selected);
    },
};
</script>
