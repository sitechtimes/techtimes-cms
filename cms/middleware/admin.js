export default function (context) {
  if (!context..user || context.$auth.user.role !== "admin") {
    context.redirect("/");
  }
}
