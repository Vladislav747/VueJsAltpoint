<template lang="pug">

  div.container
    Header(title="Админ панель")
    div.content-wrapper
      div.left-part
        AdminMenu
      div.right-part
        ManageCatalog
    
</template>

<script>
export default {}
</script>

<style lang="stylus">
.container
  margin: 0 auto;

  h1
    text-align: center;

  .content-wrapper
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    .left-part
      width 15%;

    .right-part
      padding: 7em 3em 0;
      width: 80%;

    @media screen and (max-width: 600px)

      .left-part
        width: 0;

      .right-part
        width: 100%;
        padding: 7em 1em 0;




</style>
