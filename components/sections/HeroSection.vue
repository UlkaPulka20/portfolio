<script setup lang="ts">
import imagesConfig from "~/configs/images.config";

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
      <div class="container__row" v-for="(row, rowIndex) in groupedImages" :key="rowIndex">
        <div class="container__column">
          <div class="container__column__row" v-for="(image, colIndex) in row" :key="colIndex">
            <nuxt-img class="container__column__row__image" :src="image" />
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
  gap: 10px;
  width: 90vw;

  &__row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: fit-content;
    gap: 10px;
  }

  &__column {
    display: flex;
    height: fit-content;
    width: fit-content;
    gap: 1rem;
    justify-content: start;

    &__row {
      display: flex;
      height: fit-content;
      width: fit-content;

      :active {
        transform: scale(2.4);
        height: fit-content;
        object-fit: contain;
      }

      &__image {
        width: 25rem;
        height: 25rem;
        object-fit: cover;
      }
    }
  }
}
</style>