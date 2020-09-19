<template>
  <div class="catalog__wrapper">
      <table class="table">
        <thead>
            <tr>
                <th >ID</th>
                <th >Name</th>
                <th >Price</th>
                <th >Delete good</th>
            </tr>
        </thead>
        <tbody>
                <tr v-for="item in goods" v-bind:key="item.id" >
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.price}}</td>
                    <td>Иконка удаления</td>
                </tr>
        </tbody>
    </table>
  </div>
</template>



<script>
export default {
  name: 'AdminMenu',
  data() {
      return {
        goods: [
          {
            "id": "1232131241",
            "name": "Клубника",
            "price": 1232131241
          },
          {
            "id": "123141231324",
            "name": "Мороженное",
            "price": 3241234123
          },
          {
            "id": "123124123sdf",
            "name": "Машина",
            "price": 12314123
          },

        ]
      };
    },
  methods: {

  }
}
</script>

<style lang="stylus" scoped>
.catalog__wrapper

  .table
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;

    thead th
      vertical-align: bottom;

    td, th
      padding: .3rem;
      border-top: 1px solid #dee2e6;




</style>
