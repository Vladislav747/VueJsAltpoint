<template>
  <div class="catalog__wrapper">
      <h4>Управление каталогом товаров</h4>
      <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Название товара</th>
                <th>Цена</th>
                <th>Удалить товара</th>
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
import {goods} from "../../api/index.js";

export default {
  name: 'AdminMenu',
  data() {
      return {
        goods: goods,
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
