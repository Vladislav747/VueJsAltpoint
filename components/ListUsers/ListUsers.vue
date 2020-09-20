<template>
  <div class="users-list__wrapper">
    <h6 class="users-list__title">Список пользователей</h6>
    <div v-for="user in users" class="user-item">
      <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title>
        <rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
      </svg>
      <p>{{user.name}}</p>
      <p>{{user.role}}</p>

    </div>
  </div>
</template>



<script>
export default {
  name: 'ListUsers',
  data() {
      return {
          users: [
            {
              "name": "sdfsdf",
              "role": "sdsdffsd",
            }
          ],

      };
    },
  methods: {

}
}
</script>

<style lang="stylus" scoped>
.users-list__wrapper

  .users-list__title
    padding-bottom: .5rem;
    margin-bottom: 0;
    border-bottom: 1px solid #dee2e6;

  .user-item
    display: flex
    padding: 20px 0 0 0;

    svg
      margin-right: .5rem;



</style>
