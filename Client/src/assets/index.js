function index() {
  if (localStorage.token) {
    if (
      window.location.pathname == "/auth" ||
      window.location.pathname == "/register"
    ) {
      window.location.href = "/dashboard";
    }
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
    if (window.location.pathname != "/auth") {
      console.log(window.location.href);
      if (window.location.pathname == "/register") return;
      window.location.href = "/auth";
    }
  }
}

export default index;
