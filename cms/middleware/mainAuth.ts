import { Auth } from "~/store/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const $auth = Auth();
  if (!$auth.user) {
    return navigateTo("/auth/signup");
  } else if (!$auth.user.verified) {
    return navigateTo("/auth/signup");
  }
});
