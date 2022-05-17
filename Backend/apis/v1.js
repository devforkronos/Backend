const Router = require("express").Router();

Router.get("/me", function (req, res) {
  res.json({
    Success: true,
    Data: {},
  });
});

module.exports = Router;
