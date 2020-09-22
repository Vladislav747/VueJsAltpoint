export default function({ route, redirect }) {
  const user = localStorage.getItem("role");
  const blockedRouteAdmin = /\/admin\/*/g;
  const blockedRouteProfile = /\/profile\/*/g;
  const blockedRouteUsersList = /\/userslist\/*/g;
  const homeRoute = "/";
  //["manager", "admin"].includes(user)

  if (!user && route.path.match(blockedRouteAdmin)) {
    redirect("/login");
  }

  if (!user && route.path == homeRoute) {
    redirect("/login");
  }

  if (!["admin"].includes(user) && route.path.match(blockedRouteUsersList)) {
    redirect("/login");
  }

  if (!["admin", "manager", "user"].includes(user) && route.path.match(blockedRouteProfile)) {
    redirect("/login");
  }

}
