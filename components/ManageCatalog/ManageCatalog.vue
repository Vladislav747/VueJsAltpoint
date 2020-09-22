<template lang="pug">
  div.catalog__wrapper
    h4 Управление каталогом товаров

    table.table
      thead
        tr
          th ID
          th Название товара
          th Цена
          th Картинка товара
          th Теги
          th Редактировать товар
          th Удалить товар
      tbody
        tr(v-for="item in items" v-bind:key="item.id")
          td {{item.id}}
          td
            div(v-if="!isEdit") {{item.name}}
            input.input--form(v-else type="text" v-model="item.name" )
          td
            div(v-if="!isEdit") {{item.price}}
            input.input--form(v-else type="text" v-model="item.price")

          td.td__image
            img(v-if="!isEdit" :src="item.srcImage")
            input.input--form(v-else type="text" v-model="item.srcImage")
          td
            div(v-if="!isEdit")
              span.item__tag(v-for="tag in item.tags" v-bind:key="tag" ) {{tag}}
            input.input--form(v-else type="text" v-model="item.tags")

          td
            a(@click.prevent="enterEditMode" v-if="!isEdit")
              i.fas.fa-edit
            div(v-else)
              button.button.btn-edit(@click.prevent="editItem(item)") Принять изменения
          td
            a(@click.prevent="deleteItem(item.id)")
              i.fas.fa-trash

    AddForm(formTitle="Добавить товар" formBtnValue="Добавить товар")

</template>

<script>
import { mapGetters } from 'vuex'

import {showNoty} from "../../helpers";

export default {
  name: 'ManageCatalog',
  data() {
    return {
      addName: "",
      addPrice: "",
      addTags: "",
      addImageSrc:"",
      isEdit: false,
    };
  },
  computed: {
    items:  {
      get() {
        return Object.assign({},this.$store.state.catalog.products);
      },
    }
  },

  methods: {

    //Удалить товар
    deleteItem(itemId){
      this.$store.commit("catalog/deleteProduct", itemId);
    },

    //Отредактировать товар
    editItem(item){
      console.log(item, "editItem");
      this.isEdit = false;
    },

    //Войти в режим редактирования
    enterEditMode(){
      this.isEdit = true;
    },

    // formatTags(tags){
    //   return tags.join(",")
    // }
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
      padding: .6rem .3rem;
      border-top: 1px solid #dee2e6;

    td.td__image
      img
        width: 7vw;
        height:auto;
        box-shadow: 0 0 4px black;

    .item__tag
      background: #d0c7c7;
      margin: 0 .5em;
      padding: .5em;
      border-radius: 5px;


    .fas
      cursor: pointer;

      &.fa-trash:hover
        color: #ff0000;

      &.fa-edit:hover
        color: #c0c00c;

    .button
      &.btn-edit
        &:hover
          background: #c0c00c;

</style>
