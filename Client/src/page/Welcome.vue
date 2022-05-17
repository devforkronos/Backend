<script setup>
import Header from "../components/Header.vue";
import HomeHero from "../components/HomeHero.vue";
import ColorThemeBox from "../components/ColorThemeBox.vue";
import Features from "../components/Features.vue";
import Preview from "../components/Preview.vue";
</script>

<template>
  <main style="display: none" id="WelcomeComponent">
    <Header />
    <ColorThemeBox />
    <HomeHero />
    <Features />
  </main>
</template>
