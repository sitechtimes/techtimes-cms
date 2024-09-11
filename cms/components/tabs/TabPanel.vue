<template>
  <div
    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    v-if="['editor', 'admin'].includes(this.$auth.user.role)"
  >
    <div class="flex flex-wrap">
      <div class="border-gray-500 w-full">
        <Tab
          :id="1"
          title="My Articles"
          :isActive="openTab"
          @tabClicked="toggleTabs"
        />
        <Tab
          :id="2"
          title="In Review"
          :isActive="openTab"
          @tabClicked="toggleTabs"
        />
        <Tab
          :id="3"
          title="Ready"
          :isActive="openTab"
          @tabClicked="toggleTabs"
          v-if="$auth.user.role === 'admin'"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const openTab = ref(1);

const toggleTabs = (id) => {
  openTab.value = id;
  // emit to main parent
  $emit("tabClicked", openTab.value);
};
</script>

<style></style>
