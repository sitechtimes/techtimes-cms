export default function (context: {
  $auth: { loggedIn: any; user: { verified: boolean } };
  redirect: (arg0: string) => void;
}) {
  if (context.$auth.loggedIn && context.$auth.user) {
    if (context.$auth.user.verified === true) {
      context.redirect("/");
    }
  }
}
