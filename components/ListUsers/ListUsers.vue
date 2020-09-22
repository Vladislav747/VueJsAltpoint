<template lang="pug">
  div.users-list__wrapper
    h4.users-list__title Список пользователей
    div.user-item(v-for="user in users")
      svg.bd-placeholder-img.mr-2.rounded(width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32")
        title Placeholder
        rect(width="100%" height="100%" fill="#007bff")
          text(x="50%" y="50%" fill="#007bff" dy=".3em") 32x32

      div.user
        div.user__login
          span.user__title Имя пользователя
          p {{user.login}}

        div.user__role
          span.user__title Роль пользователя
          p {{user.role}}
</template>



<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ListUsers',
  computed: mapGetters({
    users: 'users/getListUsers'
  }),
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
