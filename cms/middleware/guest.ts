import { Auth } from "~/store/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const $auth = Auth();
  if ($auth.loggedIn && $auth.user) {
    if ($auth.user.verified === true) {
      return navigateTo("/");
    }
  }
});
