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
          td {{item.name}}
          td {{item.price}}
          td.td__image 
            img(:src="item.srcImage")
          td {{item.tags}}
          td
            a(@click.prevent="editItem(item.id)")
              i.fas.fa-edit
          td 
            a(@click.prevent="deleteItem(item.id)")
              i.fas.fa-trash
          
    div.add-item__wrapper
      h2.add-item__title Добавить товар
      form(novalidate)
        div.form__row
          label(for="name") Название товара
          div.input-wrapper
            input.input--form#name(type="text" v-model="addName")

        div.form__row
          label(for="price") Цена
           div.input-wrapper
              input.input--form#price(type="text" v-model="addPrice")

        div.form__row
          label(for="description") Описание
          div.input-wrapper
            input.input--form#description(type="text" v-model="addDescription")
        
        input.ui.button.secondary.button--green(type="button" value="Добавить товар"  @click.prevent="addItem")
        
</template>



<script>
import {goods} from "../../api/index.js";

export default {
  name: 'AdminMenu',
  data() {
      return {
        items: goods,
        addName: "",
        addPrice: "",
        addDescription: "",
        isEdit: false,
      };
    },
  methods: {
    //Добавить товар
    addItem(){
      if(this.addName && this.addPrice){
        this.items.push({
          "id": this.addPrice+this.addName,
          "name": this.addName,
          "price": this.addPrice,
          "srcImage": "srcImage",
          "description": this.addDescription,
        })
      }
    },
    //Удалить товар
    deleteItem(itemId){
      console.log(itemId,"delelteItem")
      this.items = this.items.filter(element => element.id !== itemId);
    },
    //Отредактировать товар
    editItem(){
      console.log(editItem);

    },
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

    .fas
      cursor: pointer;

      &.fa-trash:hover
        color: #ff0000;

      &.fa-edit:hover
        color: #c0c00c;

  .add-item__title
    margin-bottom: 1rem;

  form
    display: flex;
    flex-direction: column;
    width: 20vw;
    margin: 0 auto;

    .form__row
      text-align: left;
      margin-bottom: 1rem;

    .input-wrapper
      .input--form
        width: 100%;

    .button
      margin-top: 1rem;





</style>
