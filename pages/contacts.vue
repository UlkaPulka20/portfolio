<script setup lang="ts">
import { ref } from 'vue';


//const profileImage = '/img/skai.jpg';
</script>

<template>
  <div class="portfolio">
    <!-- Hero секция -->
    <section class="hero">
      <div class="hero__content">
        <h1>Привет!</h1>

        <h2>Я Улька Пулька ;)</h2>
      </div>
      <!-- <div class="hero__image">
        <img :src="profileImage" alt="Profile Photo" />
       </div>-->
    </section>


    <section class="about">
      <p>with interest for UX/UI design</p>
      <p>
        ️ I'm a python developer
      </p>
    </section>


    <section class="tech">
      <h2>TECH</h2>
      <p>HTML • CSS • Python • Vue • Nuxt • C# • Docker</p>
    </section>
  </div>
</template>

<style scoped>

.portfolio {
  font-family: 'UrbanistUrbanist', sans-serif;
  text-align: center;
  color: #eab676 !important;
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

.about {
  background-color: #f5ebe0;
  padding: 2rem;
  font-size: 2.2rem;
}

.tech {
  background-color: rgba(199, 210, 254, 0.18);
  padding: 2rem;
}

.tech h2 {
  font-size: 1.5rem;
  color: #e6b880 !important;
}

.tech p {
  font-size: 1.5rem;
  color: #e6b880 !important;
}
</style>