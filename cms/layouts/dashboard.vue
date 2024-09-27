<script setup lang="ts">
import NavBar from "~/components/NavBar.vue";
</script>

<template>
  <div class="bg-gray-100 min-h-screen">
    <NavBar />
    <slot />
  </div>
</template>
