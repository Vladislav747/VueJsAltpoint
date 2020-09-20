<template>
  <header class="header">
      <div class="header__inner">
          <div class="header__mobile-menu-wrapper mobile-menu">
            <div
              class="mobile-menu__burger"
              @click.prevent="showMobileMenu">
            </div>
          </div>
          <div class="header__title"><h1>{{title}}</h1></div>
          <div class="header__logout">
            <font-awesome-icon :icon="['fas', 'sign-in-alt']" />
          </div>
      </div>

  </header>
</template>



<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: "Админка"
    }
  },
  data() {
      return {

      };
    },
  methods: {
    showMobileMenu(){
      const menuBtn = document.querySelector('.mobile-menu');
      const mobileMenu = document.querySelector('.mobile-menu-wrapper');
      console.log(this.HideMobileMenu)
      if(!this.HideMobileMenu) {
        menuBtn.classList.add('open');
        mobileMenu.classList.add('show');
      } else {
        menuBtn.classList.remove('open');
        mobileMenu.classList.remove('show');
      }
    },
  }
}
</script>

<style lang="stylus" scoped>

header
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  background: #fff;
  position: fixed;
  z-index: 200;
  width: 100%;
  padding: 20px;

  .header__inner
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header__logout
      width: 40px;
      height: auto;

      svg
        width: 100%;
        height: 100%;
        cursor: pointer;

    @media screen and (max-width: 600px)

      .mobile-menu
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        cursor: pointer;
        transition: all .5s ease-in-out;

        &__burger
          width: 40px;
          height: 6px;
          background: #000;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0,0,0,.2);
          transition: all .5s ease-in-out;

          &::before, &::after
            content: '';
            position: absolute;
            width: 40px;
            height: 6px;
            background: #000;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,.2);
            transition: all .5s ease-in-out;

          &::before
            transform: translateY(-16px);

          &::after
            transform: translateY(16px);


        &.open .mobile-menu__burger
          transform: translateX(-50px);
          background: transparent;
          box-shadow: none;

        &.open .mobile-menu__burger::before
          transform: rotate(45deg) translate(35px, -35px);

        &.open .mobile-menu__burger::after
          transform: rotate(-45deg) translate(35px, 35px);








</style>
