<template>
  <div class="login-form__wrapper">
    <div class="form__inner form-container">
      <form
        class="login-form ui form"
        method="post"
        >
        <h1>{{title}}</h1>
          <div class="field">
            <label
              label-for="form__login"
              style="text-transform: capitalize;"
            />
            <input
              name="form__login"
              type="email"
              required
              placeholder="Введите логин"
              autoComplete="current-password"
              v-model="login"
            />
            <small
              v-if="errors.login"
              class="error">Заполните {{loginTitle}}</small>
          </div>
          <div class="field">
            <label
                label-for="form__pass"
                style="text-transform: capitalize;"
            />
            <input
              name="form__login"
              type="password"
              required
              placeholder="Введите пароль"
              autoComplete="current-password"
                v-model="password" />
            <small
                v-if="errors.login"
                class="error">Заполните {{passwordTitle}}</small>
          </div>
          <div class="form__row">
            <div class="form__link-reg">
              <router-link id="register" :to="{ name: 'register' }">
                <span class="link__reg" href="#">Регистрация</span>
              </router-link>
            </div>
          </div>
          <div class="field form__controls">
              <div class="form__btn">
                <input
                  type="button"
                  value="Логин"
                  @click="loginForm"
                  class="ui button secondary"
                  style="margin-top: 20px;">
              </div>
          </div>
      </form>
    </div>
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

.login-form__wrapper
  padding: 35px;
  justify-content: center;
  display: flex;
  margin: 0 auto;

.login-form
  width: 100%;

  h1
    font-size: 2.5 rem;


</style>
