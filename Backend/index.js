require("dotenv").config();
var bodyParser = require("body-parser");
var express = require("express");
var DB = require("./sql");
var App = express();
App.use(require("cors")());
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: false }));
App.use("/", require("./routes/home"));
App.use(require("./module/jayware.js"));
App.use("/api/v1", require("./apis/v1.js"));
App.listen(process.env.PORT, function (err) {
    console.log("Listening to http://".concat(process.env.SERVER_HOST, ":").concat(process.env.PORT));
});
