<template>
  <div class="users-list__wrapper">

  </div>
</template>



<script>
export default {
  name: 'ListUsers',
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
         * Залогиниться задачи
         */
  async loginForm() {
    console.log("loginForm");
    var user;
    var password = this.password;
  }
}
}
</script>

<style lang="stylus" scoped>

.login-form__wrapper
  padding: 35px;
  margin: 0 auto;
  width: 50vw;
  height: 40vh;
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


</style>
