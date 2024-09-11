<template></template>

<script setup lang="ts">
onBeforeMount(() => {
  async () => {
    try {
      const resp: any = await $fetch(`/auth/verify/${useRoute().params.token}`);
      $auth.setUser(await resp.json());

      if ($auth.user.verified) {
        await useRouter().push({ path: "/" });
      } else {
        await useRouter().push({ path: "/auth/signup" });
      }
    } catch (e) {}
  };
});
</script>
