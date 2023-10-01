<script lang="ts">
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  name: "BaseTabs",
  props: {
    tabs: {
      type: Array as PropType<any[]>,
      required: true,
    },
    selectedTab: {
      type: Object as PropType<any>,
      required: true,
    },
  },
});
</script>

<template>
  <div class="">
    <ul class="grid grid-cols-2 md:grid-cols-5 mx-auto text-sm md:text-lg">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ 'border-red-600': tab === selectedTab }"
        class="cursor-pointer py-2 px-4 transition hover:text-primary ease-linear"
        @click="$emit('changeTab', tab)"
      >
        {{ tab.name }}
      </li>
    </ul>
  </div>
</template>
