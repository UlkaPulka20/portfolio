<script setup lang="ts">
import imagesConfig from '~/configs/images.config';

const columns = ref(3);
const groupedImages = computed(() => {
  const rows = [];
  for (let i = 0; i < imagesConfig.length; i += columns.value) {
    rows.push(imagesConfig.slice(i, i + columns.value));
  }
  return rows;
});
</script>

<template>
  <client-only>
    <div class="container">
      <div class="container__row">
        <div
          class="container__row"
          v-for="(row, rowIndex) in groupedImages"
          :key="rowIndex">
          <div class="container__row__column__text">
            Привет!

            <p>Я Улька Пулька ;)</p>
            Тут будет скоро интересное, xe-xe)
          </div>

          <div class="container">
            <div
              class="container__row"
              v-for="(image, colIndex) in row"
              :key="colIndex">
              <NuxtImg
                class="container__row__column__image"
                :src="image"
                loading="lazy"
                placeholder />
            </div>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<style scoped lang="scss">
//* {
//  border: 1px red solid !important;
//}

.container {
  display: flex;
  flex-direction: column;
  width: 95rem;
  height: 95rem;

  &__row {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    background: transparent;
    padding: 0 7rem;

    &__column {
      display: contents;
      flex-direction: row;

      &__text {
        color: #e6b880 !important;
        font-size: 1.8rem;
        border-radius: 1rem;
        font-family: 'UrbanistUrbanist', serif;
        min-height: fit-content;
        min-width: fit-content;
      }

      &__image {
        width: fit-content;
        height: fit-content;
        border-radius: 0.5rem;
        object-fit: cover;
      }
    }
  }
}
</style>
