<script>
import Welcome from "./components/HomeHero.vue";
import Home from "./components/DashboardComponent.vue";
import Auth from "./components/AuthComponent.vue";
import APIs from "./components/APIsDashboardComponent.vue";
import Scripts from "./components/ScriptsComponent.vue";
import Tools from "./components/ToolsDashboardComponent.vue";
import SHub from "./components/ScriptHubComponent.vue";
import Manage from "./components/ManageScriptComponent.vue";
import Docs from "./components/DocsComponent.vue";
import NotFound from "./components/ErrorComponent404.vue";
import NewScript from "./components/NewScriptComponent.vue";
import Obfuscator from "./components/ObfuscatorComponent.vue";

const routes = {
  "/": {
    component: Welcome,
  },
  "/dashboard": {
    component: Home,
  },
  "/auth": {
    component: Auth,
  },
  "/apis": {
    component: APIs,
  },
  "/scripts": {
    component: Scripts,
  },
  "/docs": {
    component: Docs,
  },
  "/tools": {
    component: Tools,
  },
  "/scripts/new": {
    component: NewScript,
  },
  "/manage-script": {
    component: Manage,
  },
  "/tools/hub": {
    component: SHub,
  },
  "/tools/obfuscator": {
    component: Obfuscator,
  },
  "/404": {
    component: NotFound,
  },
};

export default {
  components: {
    Master: (routes[window.location.pathname] || routes["/404"]).component,
  },
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"] || NotFound;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
};
</script>

<template>
  <Master />
</template>

<style>
@import "./assets/main.css";
@import "./assets/tailwinds.css";
</style>
