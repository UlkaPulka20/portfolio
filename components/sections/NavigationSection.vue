<script setup lang="ts">
const activeIndex = ref('1')
</script>

<template>
  <client-only>
    <div class="nav__container">
      <el-menu
          :default-active="activeIndex"
          class="nav__menu"
          mode="horizontal"
          :ellipsis="false"
      >
        <div class="nav__menu__icon">
          <el-menu-item index="0">
            <img
                class="nav__menu__icon__img"
                style="width: 150px"
                src="/img/logo.jpg"
                alt="Element logo"
            />
          </el-menu-item>
        </div>
        <div class="nav__menu__items">
          <el-menu-item class="nav__menu__items__text" index="1">Главная</el-menu-item>
          <el-menu-item class="nav__menu__items__text" index="2">Обо мне</el-menu-item>
          <el-menu-item class="nav__menu__items__text" index="3">Контакты</el-menu-item>
        </div>
      </el-menu>

    </div>
  </client-only>
</template>

<style scoped lang="scss">
//* {
//  border: 1px red solid !important;
//}


:deep(.el-menu-item.is-active) {
  color: #e6b880 !important;
  background-color: rgb(230, 218, 200) !important;
  border-radius: 40px;
  font-weight: bold;
}

:deep(.el-menu-item:hover) {
  color: #e6b880 !important;
  background-color: rgba(230, 218, 200) !important;
}


.el-menu--horizontal {
  border-bottom: none !important;
  box-shadow: none !important;
}

.nav__container {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
}

.nav__menu {
  padding: 0 10rem;
  width: 100%;
  justify-content: space-between;
  background: transparent;

  &__icon {
    display: flex;
  }

  &__items {
    display: flex;
    flex-direction: row;

    &__text {
      font-size: 1.2rem;
      border-radius: 20rem;
      font-family: 'UrbanistUrbanist', serif;
    }
  }
}

</style>