<template>
  <div class="sidebar admin-menu">
    <li>
      <a href="">Профиль</a>
    </li>
    <li>
      <a href="">Список пользователей</a>
    </li>
    <li>
      <a href="">Каталог</a>
    </li>
  </div>
</template>



<script>
export default {
  name: 'AdminMenu',
  data() {
      return {

      };
    },
  methods: {

  }
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
      color: #2c2c2c;
      font-size: .9rem;
      line-height: 40px;
      text-transform: uppercase;
      font-weight: 600;
      text-decoration: none;

@media screen and (min-width: 600px)
  .sidebar
    display: none;





</style>
