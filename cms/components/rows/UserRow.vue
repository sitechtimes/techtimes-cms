<template>
  <tr>
    <td class="px-2 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="ml-4">
          <div class="text-sm font-medium text-gray-900">
            {{ user.name }}
          </div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-sm text-gray-900">
        {{ user.email }}
      </div>
    </td>

    <td class="px-6 py-4 whitespace-nowrap">
      <span
        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
      >
        {{ capitalizeRole }}
      </span>
    </td>

    <td
      class="px-4 py-4 whitespace-nowrap text-right text-sm font-medium"
      v-if="user.role === 'writer'"
    >
      <a
        @click="changeRole('editor')"
        class="text-indigo-600 hover:text-indigo-900 cursor-pointer"
        >Promote</a
      >
    </td>

    <td
      class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
      v-if="user.role === 'editor'"
    >
      <a
        @click="changeRole('writer')"
        class="text-red-600 hover:text-red-900 cursor-pointer"
        >Demote</a
      >
    </td>
  </tr>
</template>

<script setup lang="ts">
const props = defineProps<{
  user: any;
}>();

const user = ref({
  id: 0,
  name: "",
  role: "",
  email: "",
});

// TODO: reload page after successfully changing role
const changeRole = async (role: any) => {
  try {
    await $fetch(`/users/${user.value.id}`, {
      role: role,
    });

    user.value.role = role.json();
  } catch (e) {
    console.log(e);
  }
};

const capitalizeRole = () => {
  return user.value.role.charAt(0).toUpperCase() + user.value.role.slice(1);
};
</script>
