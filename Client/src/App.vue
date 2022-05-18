<script setup>
import Welcome from "./page/Welcome.vue";
import Home from "./page/Dashboard.vue";
import Auth from "./page/Auth.vue";
import APIs from "./page/APIs.vue";
import Scripts from "./page/Scripts.vue";
import Tools from "./page/Tools.vue";
import Manage from "./page/Manage.vue";
import Docs from "./page/Docs.vue";
</script>

<template>
  <Welcome />
  <Home />
  <Auth />
  <APIs />
  <Tools />
  <Scripts />
  <Manage />
  <Docs />
</template>

<style>
@import "./assets/main.css";
@import "./assets/tailwinds.css";
</style>
