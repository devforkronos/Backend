function setThemeColor(color) {
  localStorage.color = color;
  window.location.reload();
}

routes = {
  "/": {
    component: "HomeComponent",
  },
  "/welcome": {
    component: "WelcomeComponent",
  },
  "/auth": {
    component: "AuthComponent",
  },
  "/apis": {
    component: "APIsComponent",
  },
  "/tools": {
    component: "ToolsComponent",
  },
};
path = window.location.pathname ? window.location.pathname : "/";
console.log(path);
routes[path]
  ? (document.getElementById(routes[path].component).style.display = "")
  : "";
