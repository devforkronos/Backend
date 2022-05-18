<script setup>
import Welcome from "./page/Welcome.vue";
import Home from "./page/Dashboard.vue";
import Auth from "./page/Auth.vue";
import APIs from "./page/APIs.vue";
import Tools from "./page/Tools.vue";
import Manage from "./page/Manage.vue";
import Docs from "./page/Docs.vue";

var scripts = ["/src/assets/taildown.js", "/src/assets/index.js"];
for (let i = 0; i < scripts.length; i++) {
  setTimeout(() => {
    const script = scripts[i];
    let tag = document.createElement("script");
    tag.setAttribute("src", script);
    document.head.appendChild(tag);
  }, i * 100);
}
</script>

<template>
  <Welcome />
  <Home />
  <Auth />
  <APIs />
  <Tools />
  <Manage />
  <Docs />
</template>

<style>
@import "./assets/main.css";
@import "./assets/tailwinds.css";
</style>
