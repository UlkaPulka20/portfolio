<script setup lang="ts">
const activeIndex = ref('1');

const getPage = (key: string) => {
  switch (key) {
    case '1':
      return '/';
    case '2':
      return '/about';
    case '3':
      return '/contacts';
    case '4':
      return '/serves';
  }
};

const goToPage = async (key: string, keyPath: string[]) => {
  await navigateTo(getPage(key));
};
</script>

<template>
  <client-only>
    <div class="nav__container">
      <el-menu :default-active="activeIndex" class="nav__menu" mode="horizontal" :ellipsis="false" @select="goToPage">
        <div class="nav__menu__items">
          <el-menu-item class="nav__menu__items__text" index="1">Главная</el-menu-item>
          <el-menu-item class="nav__menu__items__text" index="2">Работы</el-menu-item>
          <el-menu-item class="nav__menu__items__icon" index="1">
            <nuxt-img class="nav__menu__items__icon__img" src="https://0af29f8f-sleaf.s3.twcstorage.ru/ulkapulka/potfolio/Home.jpg" />
          </el-menu-item>
          <el-menu-item class="nav__menu__items__text" index="3">Обо мне</el-menu-item>
          <el-menu-item class="nav__menu__items__text" index="4">Услуги</el-menu-item>
        </div>
      </el-menu>
    </div>
  </client-only>
</template>

<style scoped lang="scss">
@use '/assets/scss/screens.scss' as *;
//* {
//  border: 1px red solid !important;
//}

:deep(.el-menu-item.is-active) {
  color: #ef8605 !important;
  background-color: rgba(221, 209, 192, 0) !important;
  border-radius: 0px;
  font-weight: bold;
}

:deep(.el-menu-item:hover) {
  color: #e6b880 !important;
  background-color: rgba(230, 218, 200, 0) !important;
  border-bottom: 1px solid #e6b880 !important;
}

.el-menu--horizontal {
  border-bottom: none !important;
  box-shadow: none !important;
}

.nav__container {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 8rem !important;
  width: 100% !important;
  align-content: center;
  justify-content: center;
  background-color: #fef2e2 !important;

  //@media screen and (max-width: $macbook) {
  //  height: 8rem !important;
  //  width: 100% !important;
  //}
}

.nav__menu {
  width: 67vw !important;
  max-width: 67vw !important;
  background: transparent;
  height: 6rem !important;

  @media screen and (max-width: $tablet) {
    padding: 0;
    width: 100% !important;
    max-width: 100% !important;
  }

  &__items {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px #ef8605 solid !important;

    @media screen and (max-width: $macbook) {
      width: 100%;
    }

    @media screen and (max-width: $tablet) {
      justify-content: space-evenly;
    }

    &__icon {
      display: flex;
      width: 6rem;
      height: 6rem;
      object-fit: cover;

      @media screen and (max-width: $tablet) {
        display: none;
      }

      &__img {
        width: 100%;
        height: auto;
        display: flex;
        border-radius: 0.5rem;
      }
    }

    &__text {
      color: #e6b880 !important;
      font-size: 1.8rem;
      border-radius: 0rem;
    }
  }
}
</style>
