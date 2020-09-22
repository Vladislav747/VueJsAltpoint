<template lang="pug">
  div.sidebar.admin-menu
    li
      nuxt-link(to="/profile") Профиль
    li(v-if="getAdminRole")
      nuxt-link(to="/userslist") Список пользователей
    li(v-if="getManagerRole")
      nuxt-link(to="/admin") Управление каталогом
    li
      nuxt-link(to="/calendar") Календарь
</template>

<script>
export default {
  name: 'AdminMenu',
  computed: {
    // Вычислить роль пользователя
    getAdminRole() {
      const userRole = localStorage.getItem('role');
      return userRole === 'admin';
    },
    // Вычислить роль пользователя
    getManagerRole() {
      const userRole = localStorage.getItem('role');
      return userRole === 'admin' || userRole === 'manager';
    }
  }
};
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
  transition: all .4s;

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

@media screen and (max-width: 850px)
  .sidebar
    left:-100%;

  .sidebar.show
    left: 0;
</style>
