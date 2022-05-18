import { createApp } from "vue";
import App from "./App.vue";

if (!localStorage.color) {
  localStorage.color = "brew";
}

window.$productionURL = "https://panel.jubot.site";
window.$developmentURL = "http://localhost:5000";

var scripts = ["/src/assets/taildown.js", "/src/assets/index.js"];
for (let i = 0; i < scripts.length; i++) {
  setTimeout(() => {
    const script = scripts[i];
    let tag = document.createElement("script");
    tag.setAttribute("src", script);
    document.head.appendChild(tag);
  }, i * 100);
}

console.log();
window.$BackendURL =
  window.location.hostname == "localhost"
    ? window.$developmentURL
    : window.$productionURL;
createApp(App).mount("#app");
