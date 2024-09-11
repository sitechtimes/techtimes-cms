<template>
  <button
    class="py-3 px-6 focus:outline-none text-gray-500 border-b-2 font-bold text-sm"
    v-on:click="onTabClick"
    v-bind:class="{
      'text-indigo-600 border-indigo-600': isActive === id,
      'text-gray-600': isActive !== id,
    }"
  >
    {{ title }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: Number;
  title: String;
  isActive: Number;
}>();

const onTabClick = () => {
  $emit("tabClicked", id.value);
};
</script>
