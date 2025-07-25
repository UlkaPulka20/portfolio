<script setup lang="ts">
import imagesConfig from '~/configs/images.config';
</script>

<template>
  <client-only>
    <div class="container">
      <div class="container__row">
        <h4 class="container__text">{{ 'Привет! \n Я Улька Пулька ;) \n Тут будет скоро интересное, xe-xe)' }}</h4>
        <div class="container__image">
          <NuxtImg class="container__image__img" :src="imagesConfig.home" loading="lazy" placeholder />
        </div>
      </div>
    </div>
  </client-only>
</template>

<style scoped lang="scss">
// * {
//   border: 1px red solid !important;
// }

.container {
  display: flex;
  flex-direction: column;
  width: 67vw;
  height: fit-content;
  padding-bottom: 2rem;

  &__row {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    background: transparent;
    gap: 1rem;
  }

  &__text {
    width: 100%;
    white-space: pre-line;
  }

  &__image {
    width: fit-content;

    &__img {
      border-radius: 1rem;
      width: fit-content;
      height: fit-content;
      object-fit: cover;
    }
  }
}
</style>
