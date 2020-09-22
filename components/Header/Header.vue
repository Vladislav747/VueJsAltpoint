<template lang="pug">
  header.header
    div.header__inner
      div.header__left
        div.header__mobile-menu-wrapper.mobile-menu
          div.mobile-menu__burger(@click.prevent="showMobileMenu")
        div.header__title
          h1 {{title}}
        div.header__menu
          div.header-menu__item
            nuxt-link.header-menu-item__link(to="/") Каталог
      div.header__right
        div.header__signin
          nuxt-link.header__link(v-if="userIsAuth" to="/admin")
            i.fas.fa-user-alt
          nuxt-link.header__link(v-else to="/login")
            i.fas.fa-sign-in-alt

</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'Админка'
    }
  },

  computed: {
    userIsAuth() {
      const userRole = localStorage.getItem('isAuth');
      return userRole;
    }
  },
  methods: {
    showMobileMenu() {
      const menuBtn = document.querySelector('.mobile-menu');
      const mobileMenu = document.querySelector('.sidebar');
      menuBtn.classList.toggle('open');
      mobileMenu.classList.toggle('show');
    }
  }
};
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

    .header__right
      justify-content: flex-end;

    .header__left
      flex: 1 1;

    .header__right, .header__left
      align-items: center;
      display: flex;

      .header__menu
        margin: 0 1em;

        .header-menu__item
          padding: 1rem 0;

          .header-menu-item__link
            display: block;
            color: #141c3a;
            text-decoration: none;
            font-size: 1.3rem;
            margin: 0 .5rem;
            font-weight: 600;

      .header__signin
        width: 40px;
        height: auto;

        svg
          width: 100%;
          height: 100%;
          cursor: pointer;

        .header__link
          color: #141c3a;

          &:hover
            color: #333f6c;

      .mobile-menu
        display:none;

@media screen and (max-width: 850px)
  header
    .header__inner
      .header__left

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
