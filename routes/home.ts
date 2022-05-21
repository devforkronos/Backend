const Router = require("express").Router();

Router.get("/", async function (req, res) {
  res.json({
    Success: true,
    Message: "Backend Server Working",
    ErrCode: "200",
  });
});

module.exports = Router;
