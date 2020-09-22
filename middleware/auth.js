export default function({ route, redirect }) {
  const user = localStorage.getItem("role");
  const blockedRouteAdmin = /\/admin\/*/g;
  const blockedRouteProfile = /\/profile\/*/g;
  const blockedRouteUsersList = /\/userslist\/*/g;
  const homeRoute = "/";

 //Ограничение для доступа к сайту до получения роли пользователя (Залогониться сначала) (роли admin, manager)
 if (!["admin", "manager", "user"].includes(user)  && route.path == homeRoute) {
  redirect("/login");
}

  //Ограничение для доступа к управлению каталогом в админке (роли admin, manager)
  if (!["admin", "manager"].includes(user) && route.path.match(blockedRouteAdmin)) {
    redirect("/login");
  }

  //Ограничение для доступа к списку пользователей в админке (роли admin)
  if (!["admin"].includes(user) && route.path.match(blockedRouteUsersList)) {
    redirect("/login");
  }

   //Ограничение для доступа к сайту до получения доступа к профилю (Залогониться сначала) (роли admin, manager, user)
  if (!["admin", "manager", "user"].includes(user) && route.path.match(blockedRouteProfile)) {
    redirect("/login");
  }

}
