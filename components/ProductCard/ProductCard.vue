<template lang="pug">
  div.product
    div.product-inner
      div.product-header
        div.product-header--top
          div.product-title {{ product.name }}
        div.product-image-wrapper
          div.image-wrapper
            img.product-image(:src="product.srcImage")
      div.product-properties
        div.price-block
          span.price {{product.price}}
            span.currency {{currency}}
</template>
<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      default: function() {
        return{
          name: "",
          price:"",
          currency:"",
          srcImage:"",
        }
      }
    }
  },
  data() {
    return {
      currency:"Руб",
    };
  },

}
</script>

<style lang="stylus">

.product
  margin: 10px;
  flex: 30%;
  width: 30%;
  max-width: 30%;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid #e1e1e1;
  flex-direction: column;
  display: flex;

  .product-inner
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 20px 0;
    transition: box-shadow 0.2s ease-in-out;

    &:hover
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);

  .product-header
    height: 50%;

    .product-header--top
      text-align: center;
      margin-bottom: 5%;

      .product-title
        font-weight: 600;
        padding-top: 2px;
        font-size: 2rem;
        min-height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;

    .product-image-wrapper
      position: relative;

      .image-wrapper

        text-align: center;
        overflow: hidden;

        .product-image
          width: auto;
          max-height: 200px;


  .product-properties
    height: 20%;
    word-wrap: break-word;
    padding: 15px 0;
    align-items: center;
    display: flex;

    .price-block
      margin: 0 auto;
      padding: 15px;
      text-align: center;

      .price
        text-transform: uppercase;
        font-size: 2rem;
        font-weight: 600;

        .currency
          margin-left: 1em;

    @media (max-width: 1240px)
      .price-block
        padding: 5px;

    .property-section
      margin-bottom: 1rem;

  @media screen and (max-width: 550px)
    .image-wrapper .product-image
      max-width: 140px;
      max-height: 280px;

@media screen and (max-width: 1023px)
  .product
    flex: 45%;
    width: 45%;
    max-width: 45%;



  @media screen and (max-width: 767px)
    .product
      max-width: 100%;
      flex: 0 0 100%;
      width: 100%;

@media screen and (max-width: 550px)

  .product
    flex: 0 0 100%;
    padding: 5%;

    .description
      word-wrap: break-word;
      width: 250px;

@media screen and (max-width: 320px)

  .product
    .product-image-wrapper
      .image-wrapper
        min-height: 100px;

</style>
