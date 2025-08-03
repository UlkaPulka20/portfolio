<script setup lang="ts">
//const profileImage = '/img/skai.jpg';
</script>

<template>
  <div class="portfolio">
    <!-- Hero секция -->
    <section class="hero">
      <div class="hero__content">
        <h1>Тут будут проекты /работы</h1>
      </div>
      <!-- <div class="hero__image">
        <img :src="profileImage" alt="Profile Photo" />
       </div>-->
    </section>
  </div>
</template>

<style scoped>
.portfolio {
  text-align: center;
  width: 100%;

  /*.hero {
     background: url('/img/skai.jpg') no-repeat center center/cover;
     color: white;
     padding: 5rem 2rem;
     display: flex;
     flex-direction: column;
     align-items: center;
   }*/

  .hero__content h1 {
    font-size: 2.5rem;
  }

  .hero__image img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-top: 1rem;
    border: 4px solid white;
  }
}
</style>
