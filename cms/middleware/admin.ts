import { Auth } from "~/store/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const $auth = Auth();
  if (!$auth.user || $auth.user.role !== "admin") {
    return navigateTo("/");
  }
});
