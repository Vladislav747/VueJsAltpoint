<template>
  <div class="profile__wrapper">
    <h4 class="profile__title">Профиль пользователя {{user.login}}</h4>
      <div class="row">
        <label for="password">Роль пользователя</label>
        <select :value="user.role" v-model="user.role">
            <option v-for="role in userRoles" :key="role" :value="role">{{role}}</option>
        </select>
      </div>

      <div class="row">
        <label for="login">Логин</label>
        <input type="text" class="form-control" id="login" v-model="user.login" placeholder="Введите логин"/>
      </div>

      <div class="row">
        <label for="password">Пароль</label>
        <input type="text" class="form-control" id="password" v-model="user.pass" placeholder="Введите пароль" />
      </div>

      <div class="row">
        <button class="btn btn-profile" @click="saveResults">Сохранить</button>
      </div>
  </div>
</template>



<script>
export default {
  name: 'AdminMenu',
  data() {
      return {
        user: {
          "login": "Vladislav",
          "role": "admin",
          "pass": "12345",
        },
        userRoles:[
          "admin",
          "manager",
          "user",
        ]
      };
    },
  methods: {
    saveResults(){
      console.log(this.user,"saveResults");
    }
  }
}
</script>

<style lang="stylus" scoped>
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
    width: 50%;
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
    width: 50%;
    padding: .5rem 1rem;
    margin: 0 auto;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;


</style>
