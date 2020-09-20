<template>
  <div class="container">
    <Header />
    <div class="content-wrapper">
      <div class="left-part"><AdminMenu /></div>
      <div class="right-part"><ListUsers /></div>
    </div>


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
      padding: 100px 0 0 0;
      width: 80%;
</style>
