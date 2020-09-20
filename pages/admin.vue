<template>

  <div class="container">
    <Header title="Админ панель"/>
    <div class="content-wrapper">
      <div class="left-part"><AdminMenu /></div>
      <div class="right-part"><ManageCatalog /></div>
    </div>


  </div>
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
