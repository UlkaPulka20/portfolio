<script setup lang="ts">
import initialConfig from '@@/configs/initial.config';
import HeroSection from '@/components/sections/HeroSection.vue';

useHead({
  title: initialConfig.username,
});
</script>

<template>
  <section>
    <HeroSection />
  </section>
</template>
