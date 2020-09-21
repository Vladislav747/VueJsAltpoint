export default function({ route, redirect }) {
  const user = localStorage.getItem("role");
  const blockedRoute = /\/admin\/*/g;
  const homeRoute = "/";

  if (!user && route.path.match(blockedRoute)) {
    redirect("/login");
  }

  if (user && route.path === homeRoute) {
    redirect("/admin");
  }
}
