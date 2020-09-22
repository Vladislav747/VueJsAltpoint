<template lang="pug">

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
        label(for="image-src") URL картинки
        div.input-wrapper
          input.input--form#image-src(type="text" v-model="addImageSrc")

      div.form__row
        label(for="tags") Теги(вносите через запятую)
        div.input-wrapper
          input.input--form#tags(type="text" v-model="addTags")

      input.ui.button.secondary.button--green(type="button" v-bind:value="formBtnValue" @click.prevent="addItem")

</template>

<script>
import {showNoty} from "../../helpers";

export default {
  name: 'AddForm',
   props: {
    formTitle: {
      type: String,
    },
    formBtnValue: {
      type: String,
    },
  },

  data() {
      return {
        addName: "",
        addPrice: "",
        addTags: "",
        addImageSrc:"",
        isEdit: false,
      };
    },
  methods: {
    //Добавить товар
    addItem(){
      if(this.addName && this.addPrice && this.addTags && this.addImageSrc){
        this.addTags = this.addTags.split(",");
        console.log(this.addTags, "addItem");
        var item = {
          "id": this.addPrice+this.addName,
          "name": this.addName,
          "price": this.addPrice,
          "srcImage": this.addImageSrc,
          "tags": this.addTags,
        };
        this.$store.commit("catalog/addProduct", item);
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
.add-item__wrapper

  .add-item__title
    margin-bottom: 1em;
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

@media screen and (max-width: 1024px)
  .add-item__wrapper
    form
      width: 50vw;

@media screen and (max-width: 600px)
  .add-item__wrapper
    form
      width: 70vw;

</style>
