<template lang="pug">

  div.container
    Header(title="Главная")
    main
      div.product-list
        ProductCard(v-for="item in items" :key="item" :product="item")
        
</template>

<script>
import {goods} from "../api/index.js";
export default {
  data: () => ({
    items: goods,
  }),
}
</script>

<style lang="stylus" scoped>
.container
  margin: 0 auto;

  main
    padding: 7rem 0 0 0;

    .product-list
      display:flex;
      padding: 30px;

</style>


