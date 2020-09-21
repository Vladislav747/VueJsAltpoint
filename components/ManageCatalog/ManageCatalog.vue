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
          td 
            span.item__tag(v-for="tag in item.tags" v-bind:key="tag") {{tag}}
              
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
          label(for="tags") Теги(вносите через запятую)
          div.input-wrapper
            input.input--form#tags(type="text" v-model="addTags")
        
        input.ui.button.secondary.button--green(type="button" value="Добавить товар" @click.prevent="addItem")
        
</template>



<script>
import {goods} from "../../api/index.js";
import {showNoty} from "../../helpers";
export default {
  name: 'AdminMenu',
  data() {
      return {
        items: goods,
        addName: "",
        addPrice: "",
        addTags: "",
        isEdit: false,
      };
    },
  methods: {
    //Добавить товар
    addItem(){
      if(this.addName && this.addPrice && this.addSrcImage && this.addSrcImage){
        this.items.push({
          "id": this.addPrice+this.addName,
          "name": this.addName,
          "price": this.addPrice,
          "srcImage": this.addSrcImage,
          "tags": this.addTags,
        })
      }else{
        showNoty("Проверьте пожалуйста что вы заполнили все поля");
      }
    },
    //Удалить товар
    deleteItem(itemId){
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
