require("dotenv").config();
var express = require("express");
var App = express();
var DB = require("./sql");
App.use("/api/v1", require("./apis/v1.js"));
App.listen(process.env.PORT);
