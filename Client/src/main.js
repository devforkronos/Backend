import { createApp } from "vue";
import App from "./App.vue";
import Index from "./assets/index";
import ScrollBar from "./assets/scrollbar";

if (
  !localStorage.color ||
  localStorage.color == "undefined" ||
  localStorage.color == ""
) {
  localStorage.color = "brew";
}

window.$productionURL = "https://panel.jubot.site";
window.$developmentURL = "http://localhost:5000";

// var scripts = ["/src/assets/taildown.js", "/src/assets/index.js"];
// for (let i = 0; i < scripts.length; i++) {
//   setTimeout(() => {
//     const script = scripts[i];
//     let tag = document.createElement("script");
//     tag.setAttribute("src", script);
//     document.head.appendChild(tag);
//   }, i * 100);
// }

window.$BackendURL =
  window.location.hostname == "localhost"
    ? window.$developmentURL
    : window.$productionURL;
createApp(App).mount("#app");
Index();

let tag = document.createElement("script");
tag.innerHTML = `
function setThemeColor(color) {
  localStorage.color = color;
  window.location.reload();
}
`;
document.head.appendChild(tag);
ScrollBar();
