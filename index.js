require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const App = express();
App.use(require("cors")());
App.use(bodyParser.json());
App.use(require("compression")());
App.use(bodyParser.urlencoded({ extended: false }));
App.use("/", require("./routes/home"));
App.use(require("./module/jayware.js"));
App.use("/api/v1", require("./apis/v1.js"));
App.use("*", function (req, res) {
    res.json({
        Success: false,
        ErrCode: 404,
        Message: "Route/Content Not Found",
    });
});
App.listen(process.env.PORT, function (err) {
    console.log(`Listening to http://${process.env.SERVER_HOST}:${process.env.PORT}`);
});
