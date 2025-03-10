<script setup lang="ts">
import { ref } from 'vue';


const profileImage = '/img/skai.jpg';
</script>

<template>
  <div class="portfolio">
    <!-- Hero секция -->
    <section class="hero">
      <div class="hero__content">
        <h1>FullStack Developer</h1>
        <p>with interest for UX/UI design</p>
      </div>
      <div class="hero__image">
        <img :src="profileImage" alt="Profile Photo" />
      </div>
    </section>


    <section class="about">
      <p>
        Hi, I'm Ulyana ☀️️ I'm a python developer
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
  font-family: 'Arial', sans-serif;
  text-align: center;
  width: 100%;

  .hero {
    background: url('/img/skai.jpg') no-repeat center center/cover;
    color: white;
    padding: 5rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

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
  font-size: 1.2rem;
}

.tech {
  background-color: #c7d2fe;
  padding: 2rem;
}

.tech h2 {
  font-size: 1.5rem;
  color: #333;
}

.tech p {
  font-size: 1.1rem;
  color: #222;
}
</style>