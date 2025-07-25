<script setup lang="ts">
import NavigationSection from '~/components/sections/NavigationSection.vue';
</script>

<template>
  <div class="container">
    <div class="navigation">
      <NavigationSection />
    </div>
    <slot />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  width: 100vw;
  height: fit-content;
  max-width: 100vw;
}

.navigation {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 12vh;
  padding-bottom: 4rem;
}
</style>
