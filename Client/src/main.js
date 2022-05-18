import { createApp } from "vue";
import App from "./App.vue";

if (!localStorage.color) {
  localStorage.color = "royal";
}

window.$BackendURL = "localhost:5000";
createApp(App).mount("#app");
