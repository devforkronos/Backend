const Obfuscator = require("../module/obfuscator");
const Routes = require("../config/routes.json");
const scriptHub = require("../module/hub");
const Cryptor = require("../module/crypt");
const Router = require("express").Router();
const DB = require("../sql/index");
const misc = require("../config/misc.json");
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
    if (!req.body.data)
        return res.json(Routes.errors[`400`]);
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
            max: misc["maxScripts"],
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
            }
            else {
                res.end(data.Data.obfuscated_content);
            }
        }
        else {
            res.json({
                max: misc.maxScripts,
                Success: true,
                Data: data.Data,
            });
        }
    })
        .catch((err) => {
        res.json(Routes.errors[`${err.ErrCode}`]);
    });
});
Router.post("/script/data/:id", async (req, res) => {
    DB.getScriptDataById(req.body.token, req.params.id)
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
Router.post("/webhook/data/:id", async (req, res) => {
    DB.getWebhookDataById(req.body.token, req.params.id)
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
Router.post("/api/data/:id", async (req, res) => {
    DB.getAPIDataById(req.body.token, req.params.id)
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
Router.post("/script/update", async function (req, res) {
    DB.updateScript(req.body.id, req.body.token, req.body.data || {})
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
Router.post("/webhook/update", async function (req, res) {
    DB.updateWebhook(req.body.id, req.body.token, req.body.data || {})
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
            Data: { Code: Obfuscator(req.body.code || "", req.body.minify || false) },
        });
    }
    catch {
        res.json(Routes.errors[`500`]);
    }
});
Router.post("/apis/me", async function (req, res) {
    DB.getAPIsByToken(req.body.token)
        .then((data) => {
        res.json({
            max: misc["maxAPIs"],
            Success: true,
            Data: data.Data,
        });
    })
        .catch((err) => {
        res.json(Routes.errors[`${err.ErrCode}`]);
    });
});
Router.post("/webhooks/me", async function (req, res) {
    DB.getWebhooksByToken(req.body.token)
        .then((data) => {
        res.json({
            max: misc["maxWebhooks"],
            Success: true,
            Data: data.Data,
        });
    })
        .catch((err) => {
        res.json(Routes.errors[`${err.ErrCode}`]);
    });
});
Router.post("/apis/create", async function (req, res) {
    DB.createAPIKey(req.body.token, req.body.data || {})
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
Router.post("/webhooks/create", async function (req, res) {
    DB.createWebhook(req.body.token, req.body.data || {})
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
Router.post("/script/hub", async function (req, res) {
    DB.getScriptsByToken(req.body.token)
        .then((data) => {
        res.json({
            Success: true,
            Data: { Content: scriptHub(JSON.stringify(data.Data)) },
        });
    })
        .catch((err) => {
        res.json(Routes.errors[`${err.ErrCode}`]);
    });
});
module.exports = Router;
