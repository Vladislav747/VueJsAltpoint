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
            >Логин</label>
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
            >Пароль</label>
            <input
              name="form__pass"
              type="password"
              required
              placeholder="Введите пароль"
              autoComplete="current-password"
              v-model="password" />
            <small
                v-if="errors.login"
                class="error">Заполните {{passwordTitle}}</small>
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
import {users} from "../../api/index.js";
import {showNoty} from "../../helpers";
export default {
  name: 'LoginForm',
  data() {
      return {
          title: "Авторизация",
          loginTitle: "Логин",
          passwordTitle: "Пароль",
          errors: [],
          login:"",
          password:"",
      };
    },
  methods: {
  /**
   * Залогиниться
  */
  loginForm() {
    console.log([this.login, this.password],"loginForm");
    var userRole = this.checkRole(this.login, this.password);
    if(userRole){
      localStorage.setItem("role", userRole);
      localStorage.setItem("isAuth", "true");
      this.$router.push({ name: "admin", params: { "login":this.login, "pass":this.password } });
    }else{
      showNoty("Что то пошло не так - возможно вы ввели неверный логин или пароль!");
    }

  },

  checkRole(login, password){

    for(var i = 0; i < users.length; i++){
      if(users[i].login == login && users[i].password == password)
        return users[i].role
    }
    return false;
  }
}
}
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

  .field
    display: flex;
    flex-direction: column;

    .form__btn
      input[type="button"]
        width: 65%;
        font-weight: 600;
        &:hover
          background-color: #efecec;

    label
      display: inline-block;
      text-align: left;
      margin-bottom: .5rem;

    input
      cursor: pointer;
      margin: 0;
      outline: 0;
      -webkit-appearance: none;
      tap-highlight-color: hsla(0,0%,100%,0);
      font-size: 1em;
      background: #fff;
      border: 1px solid rgba(34,36,38,.15);
      color: rgba(0,0,0,.87);
      border-radius: .28571429rem;
      -webkit-box-shadow: 0 0 0 0 transparent inset;
      box-shadow: inset 0 0 0 0 transparent;
      -webkit-transition: color .1s ease,border-color .1s ease;
      transition: color .1s ease,border-color .1s ease;
      line-height: 1.2em;
      padding: 0.7rem;

@media screen and (max-width: 600px)
  .login-form__wrapper
    width: 90vw;

</style>
