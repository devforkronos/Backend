const Obfuscator = require("../module/obfuscator");
const Routes = require("../config/routes.json");
const Cryptor = require("../module/crypt");
const Router = require("express").Router();
const DB = require("../sql/index");

Router.post("/me", async function (req, res) {
  DB.userByToken(req.body.token)
    .then((data) => {
      res.json({
        Success: true,
        Data: data,
      });
    })
    .catch((err) => {
      res.json(Routes.errors[`${err.ErrCode}`]);
    });
});

Router.get("/script/get/:id", async (req, res) => {
  DB.getScriptById(req.params.id)
    .then((data) => {
      if (req.query.type == "txt") {
        if (data.Data.content) {
          res.end(data.Data.content);
        } else {
          res.end(data.Data.obfuscated_content);
        }
      } else {
        res.json({
          Success: true,
          Data: data.Data,
        });
      }
    })
    .catch((err) => {
      res.json(Routes.errors[`${err.ErrCode}`]);
    });
});

Router.post("/script/create", async function (req, res) {
  DB.createScript(req.body.token, req.body.data || {})
    .then((data) => {
      res.json({
        Success: true,
        Data: data.Data,
      });
    })
    .catch((err) => {
      res.json(Routes.errors[`${err.ErrCode}`]);
    });
});

Router.get("/script/owner/:owner", async function (req, res) {
  DB.getScriptsByUser(req.params.owner)
    .then((data) => {
      res.json({
        Success: true,
        Data: data.Data,
      });
    })
    .catch((err) => {
      res.json(Routes.errors[`${err.ErrCode}`]);
    });
});

Router.post("/tools/obfuscator", async function (req, res) {
  try {
    res.json({
      Success: true,
      Data: { Code: Obfuscator(req.body.code || "") },
    });
  } catch {
    res.json(Routes.errors[`500`]);
  }
});

Router.post("/apis/me", async function (req, res) {
  DB.getAPIsByToken(req.body.token)
    .then((data) => {
      res.json({
        Success: true,
        Data: data.Data,
      });
    })
    .catch((err) => {
      res.json(Routes.errors[`${err.ErrCode}`]);
    });
});

module.exports = Router;
