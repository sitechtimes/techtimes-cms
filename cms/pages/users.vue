<template>
  <div class="container mx-auto">
    <div class="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div class="flex-1 min-w-0">
        <h1 class="text-3xl font-bold text-gray-900">Users</h1>
      </div>
    </div>

    <Table title="Writers" class="-my-6">
      <UserRow
        v-for="user in sortUsers('writer')"
        :user="user"
        :key="user.id"
      />
    </Table>

    <Table title="Editors" class="-my-6">
      <UserRow
        v-for="user in sortUsers('editor')"
        :user="user"
        :key="user.id"
      />
    </Table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const users = ref<any[]>([]);

const mounted = async () => {
  const user: any = await $fetch(`/users`);
  users.value = await user.json();
};

const sortUsers = (role: any) => {
  return users.filter((user: any) => {
    return user.role === role;
  });
};

definePageMeta({
  middleware: ["main-auth", "admin"],
  layout: "dashboard",
});
</script>
