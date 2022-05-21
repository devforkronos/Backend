const Obfuscator = require("../module/obfuscator");
const Routes = require("../config/routes.json");
const Cryptor = require("../module/crypt");
const Router = require("express").Router();
const DB = require("../sql/index");

Router.get("/", async function (req, res) {
  res.json({ Success: true });
});

Router.post("/me", async function (req, res) {
  DB.userByToken(req.body.token)
    .then((data) => {
      delete data.password;
      res.json({
        Success: true,
        Data: data,
      });
    })
    .catch((err) => {
      res.json(Routes.errors[`${err.ErrCode}`]);
    });
});

Router.post("/stats/me", async function (req, res) {
  DB.getUserStats(req.body.token)
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

Router.post("/login", async function (req, res) {
  if (!req.body.data) return res.json(Routes.errors[`400`]);
  DB.getUser(req.body.data.username, req.body.data.password)
    .then((data) => {
      res.json({
        Success: true,
        Data: data.Data,
      });
    })
    .catch((err) => {
      let resp = Routes.errors[`${err.ErrCode}`];
      if (err.DisplayMessage) {
        resp["DisplayMessage"] = err.DisplayMessage;
      }
      res.json(resp);
    });
});

Router.post("/register", async function (req, res) {
  DB.createUser(req.body.data)
    .then((data) => {
      res.json({
        Success: true,
        Data: data.Data,
      });
    })
    .catch((err) => {
      let resp = Routes.errors[`${err.ErrCode}`];
      if (err.DisplayMessage) {
        resp["DisplayMessage"] = err.DisplayMessage;
      }
      res.json(resp);
    });
});

Router.post("/scripts/me", async function (req, res) {
  DB.getScriptsByToken(req.body.token)
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
