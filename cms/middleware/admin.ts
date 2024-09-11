export default function (context: {
  $auth: { user: { role: string } };
  redirect: (arg0: string) => void;
}) {
  if (!context.$auth.user || context.$auth.user.role !== "admin") {
    context.redirect("/");
  }
}
