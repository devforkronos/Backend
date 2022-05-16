<script setup>
import Header from "./components/Header.vue";
import HomeHero from "./components/HomeHero.vue";
import ColorThemeBox from "./components/ColorThemeBox.vue";
import Features from "./components/Features.vue";
import Preview from "./components/Preview.vue";
</script>

<template>
  <main>
    <Header />
    <ColorThemeBox />
    <HomeHero />
    <Features />
    <Preview />
  </main>
</template>

<style>
@import "./assets/main.css";
@import "./assets/tailwinds.css";
</style>
