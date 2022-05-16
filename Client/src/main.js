import { createApp } from "vue";
import App from "./App.vue";

if (!localStorage.color) {
  localStorage.color = "royal";
}
createApp(App).mount("#app");
