require("dotenv").config();
const App = require("express")();

App.use("/api/v1", require("./apis/v1.js"));

App.listen(process.env.PORT);
