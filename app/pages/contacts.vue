<script setup lang="ts">
//const profileImage = '/img/skai.jpg';
</script>

<template>
  <div class="container">
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
      <h5>with interest for UX/UI design</h5>
      <h5>️ I'm a python developer</h5>
    </section>

    <section class="tech">
      <h2>TECH</h2>
      <h5>HTML • CSS • Python • Vue • Nuxt • C# • Docker</h5>
    </section>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  color: #eab676 !important;
  width: 100%;
  height: fit-content;

  /*.hero {
    background: url('/img/skai.jpg') no-repeat center center/cover;
    color: white;
    padding: 5rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }*/

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
}

.tech {
  background-color: rgba(199, 210, 254, 0.18);
  padding: 2rem;
}
</style>
