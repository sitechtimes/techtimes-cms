export default function (context: {
  $auth: { user: { verified: any } };
  redirect: (arg0: string) => void;
}) {
  if (!context.$auth.user) {
    context.redirect("/auth/signup");
  } else if (!context.$auth.user.verified) {
    context.redirect("/auth/signup");
  }
}
