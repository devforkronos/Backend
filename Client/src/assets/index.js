const routes = {
  "/": {
    component: "WelcomeComponent",
  },
  "/dashboard": {
    component: "HomeComponent",
  },
  "/auth": {
    component: "AuthComponent",
  },
  "/apis": {
    component: "APIsComponent",
  },
  "/scripts": {
    component: "ScriptsComponent",
  },
  "/docs": {
    component: "DocsComponent",
  },
  "/tools": {
    component: "ToolsComponent",
  },
  "/scripts/new": {
    component: "NewScriptComponent",
  },
  "/manage-script": {
    component: "ManageComponent",
  },
  "/tools/hub": {
    component: "ScriptHubComponent",
  },
  "/tools/obfuscator": {
    component: "ObfuscatorComponent",
  },
};

function index() {
  if (localStorage.token) {
    // const path = window.location.pathname ? window.location.pathname : "/";
    // routes[path]
    //   ? (document.getElementById(routes[path].component).style.display = "")
    //   : document.getElementById("ErrorComponent404")
    //   ? (document.getElementById("ErrorComponent404").style.display = "")
    //   : "";

    fetch(`${window.$BackendURL}/api/v1/me`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: localStorage.token }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.Data.token) {
          localStorage.token = data.Data.token;
        } else {
          localStorage.removeItem("token");
        }
      });
  } else {
    // not logged in
    if (!window.location.pathname == "/auth") {
      window.location.href = "/auth";
    }
    document.getElementById("AuthComponent").style.display = "";
  }
}

export default index;
