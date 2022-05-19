<script setup>
import Welcome from "./page/Welcome.vue";
import Home from "./page/Dashboard.vue";
import Auth from "./page/Auth.vue";
import APIs from "./page/APIs.vue";
import Scripts from "./page/Scripts.vue";
import Tools from "./page/Tools.vue";
import SHub from "./page/SHub.vue";
import Manage from "./page/Manage.vue";
import Docs from "./page/Docs.vue";
import NotFound from "./page/404.vue";
import NewScript from "./page/NewScript.vue";
import Obfuscator from "./page/Obfuscator.vue";
</script>

<template>
  <Tools />
  <Welcome />
  <Home />
  <Auth />
  <APIs />
  <SHub />
  <Scripts />
  <Manage />
  <Docs />
  <NotFound />
  <NewScript />
  <Obfuscator />
</template>

<style>
@import "./assets/main.css";
@import "./assets/tailwinds.css";
</style>
