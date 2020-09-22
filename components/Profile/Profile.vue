<template lang="pug">
  div.profile__wrapper
    h4.profile__title Профиль пользователя {{user.login}}
    form.profile__form(action="")
      div.row
        label(for="role") Роль пользователя
        input.form-control#login(v-model="user.role" type="text" readonly)

      div.row
        label(for="login") Логин
        input.form-control#login(type="text" v-model="user.login" placeholder="Введите логин" readonly)

      div.row
        label(for="password") Пароль
        input.form-control#password(type="text" v-model="user.password" placeholder="Введите пароль" readonly)

</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      userRoles: ['admin', 'manager', 'user']
    };
  },
  computed: {
    user: {
      get() {
        return this.$store.state.users.user;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>

.profile__form
  width: 25%;
  margin: 0 auto;
  .row
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 1rem 0;

    label
      display: inline-block;
      margin-bottom: .5rem;
      text-transform: uppercase;
      font-weight: 600;
      font-style: bold;

    input, select
      padding: .375rem .75rem;
      margin: 0 auto;
      display: block;
      width: 100%;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: .25rem;
      transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    .btn-profile
      cursor: pointer;
      width: 100%;
      padding: .5rem 1rem;
      margin: 0 auto;
      font-size: 1.25rem;
      line-height: 1.5;
      border-radius: .3rem;
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
</style>
