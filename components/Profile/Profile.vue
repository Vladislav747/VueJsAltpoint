<template>
  <div class="profile__wrapper">
    <h4 class="profile__title">Профиль пользователя</h4>
    <form class="">
      <div class="row">
          <label for="password">Роль пользователя</label>
          <span>{{user.role}}</span>
      </div>
      <div class="row">
          <label for="login">Логин</label>
          <input type="text" class="form-control" id="login" placeholder="" value="" required="">
      </div>

      <div class="row">
          <label for="password">Пароль</label>
          <input type="text" class="form-control" id="password" placeholder="" value="" required="">
      </div>
      <div class="row">
          <button class="btn btn-profile" type="submit">Сохранить</button>
      </div>
    </form>
  </div>
</template>



<script>
export default {
  name: 'AdminMenu',
  data() {
      return {
        user: {
          "name": "Vladislav",
          "role": "admin",

        }
      };
    },
  methods: {

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

  input
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
