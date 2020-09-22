<template lang="pug">
  div.sidebar.admin-menu
    li
      nuxt-link(to="/profile") Профиль
    li
      nuxt-link(to="/userslist") Список пользователей
    li
      nuxt-link(to="/admin") Управление каталогом
    li
      nuxt-link(to="/calendar") Календарь
</template>



<script>
export default {
  name: 'AdminMenu',
}
</script>

<style lang="stylus" scoped>

.sidebar
  background: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,.170509);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 120px 0 0;

  li
    width: 100%;
    list-style: none;
    padding: 0 10px;
    text-align: left;

    a
      display: block;
      color: #2c2c2c;
      font-size: .9rem;
      line-height: 40px;
      text-transform: uppercase;
      font-weight: 600;
      text-decoration: none;

      &:hover
        background: #f2f2f2;

@media screen and (max-width: 600px)
  .sidebar
    display: none;
    position: fixed;

  .sidebar.open
    display: block;





</style>
