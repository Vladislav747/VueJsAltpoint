<template>
  <div class="users-list__wrapper">
    <h4 class="users-list__title">Список пользователей</h4>
    <div v-for="user in users" class="user-item">
      <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title>
        <rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
      </svg>
      <div class="user">
        <div class="user__login">
          <span class="user__title">Имя пользователя</span><p>{{user.login}}</p>
        </div>
        <div class="user__role">
          <span class="user__title">Роль пользователя</span><p>{{user.role}}</p>
        </div>
      </div>


    </div>
  </div>
</template>



<script>
import {users} from "../../api/index.js";

export default {
  name: 'ListUsers',
  data() {
      return {
        users: users,
      };
    },
  methods: {

}
}
</script>

<style lang="stylus" scoped>
.users-list__wrapper

  .users-list__title
    padding-bottom: 1rem;
    margin-bottom: 0;
    border-bottom: 1px solid #dee2e6;

  .user-item
    display: flex
    padding: 1.5em 0 0 0;
    align-items: center;

    svg
      margin-right: .5rem;

    p
      margin-left: 1em;

    .user
      &__login
        display: flex;

      &__role
        display: flex;

      &__title
        font-weight: 600;



</style>
