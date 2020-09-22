<template lang="pug">
  div.login-form__wrapper
    div.form__inner.form-container
      form.login-form.ui.form( method="post")
        h1 {{title}}
        div.field
          label(label-for="form__login") Логин
          input.input--form(name="form__login" type="email" required placeholder="Введите логин" autoComplete="current-password" v-model="login")
        div.field
          label(label-for="form__pass") Пароль
          input.input--form(name="form__pass" type="password" required placeholder="Введите пароль" autoComplete="current-password" v-model="password")
        div.field.form__controls
            div.form__btn
              input.ui.button.secondary(type="button" value="Логин" @click="loginForm")
</template>

<script>
import { mapGetters } from 'vuex';

import { showNoty } from '../../helpers';
export default {
      name: 'LoginForm',
      data() {
            return {
                  title: 'Авторизация',
                  loginTitle: 'Логин',
                  passwordTitle: 'Пароль',
                  login: '',
                  password: ''
            };
      },
      computed: mapGetters({
            user: 'users/getUser'
      }),
      methods: {
            /**
             * Залогиниться
             */
            loginForm() {
                  const currentUser = {
                        login: this.login,
                        password: this.password
                  };
                  this.$store.commit('users/changeCurrentUser', currentUser);
                  const userRole = this.user;
                  if (userRole) {
                        localStorage.setItem('role', userRole.role);
                        localStorage.setItem('isAuth', 'true');
                        this.$router.push({ name: 'profile' });
                  } else {
                        showNoty(
                              'Что то пошло не так - возможно вы ввели неверный логин или пароль!'
                        );
                  }
            }
      }
};
</script>

<style lang="stylus" scoped>

.login-form__wrapper
  padding: 35px;
  margin: 0 auto;
  width: 50vw;
  height: 60vh;
  display: flex;
  justify-content: center;
  box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
  border: 1px solid rgba(34,36,38,.15);

.login-form
  width: 100%;

  h1
    font-size: 2.5 rem;
    margin-bottom: 1rem;

  .field
    display: flex;
    flex-direction: column;

    .form__btn
      input[type="button"]
        width: 65%;
        font-weight: 600;
        margin-top: 1rem;
        &:hover
          background-color: #efecec;

    label
      display: inline-block;
      text-align: left;
      margin-bottom: .5rem;

@media screen and (max-width: 600px)
  .login-form__wrapper
    width: 90vw;
</style>
