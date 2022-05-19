var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var Obfuscator = require("../module/obfuscator");
var Routes = require("../config/routes.json");
var Cryptor = require("../module/crypt");
var Router = require("express").Router();
var DB = require("../sql/index");
Router.get("/", function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            res.json({ Success: true });
            return [2 /*return*/];
        });
    });
});
Router.post("/me", function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            DB.userByToken(req.body.token)
                .then(function (data) {
                res.json({
                    Success: true,
                    Data: data,
                });
            })
                .catch(function (err) {
                res.json(Routes.errors["".concat(err.ErrCode)]);
            });
            return [2 /*return*/];
        });
    });
});
Router.post("/login", function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!req.body.data)
                return [2 /*return*/, res.json(Routes.errors["400"])];
            DB.getUser(req.body.data.username, req.body.data.password)
                .then(function (data) {
                res.json({
                    Success: true,
                    Data: data.Data,
                });
            })
                .catch(function (err) {
                var resp = Routes.errors["".concat(err.ErrCode)];
                if (err.DisplayMessage) {
                    resp["DisplayMessage"] = err.DisplayMessage;
                }
                res.json(resp);
            });
            return [2 /*return*/];
        });
    });
});
Router.post("/register", function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            DB.createUser(req.body.data)
                .then(function (data) {
                res.json({
                    Success: true,
                    Data: data.Data,
                });
            })
                .catch(function (err) {
                var resp = Routes.errors["".concat(err.ErrCode)];
                if (err.DisplayMessage) {
                    resp["DisplayMessage"] = err.DisplayMessage;
                }
                res.json(resp);
            });
            return [2 /*return*/];
        });
    });
});
Router.get("/script/get/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        DB.getScriptById(req.params.id)
            .then(function (data) {
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
                    Success: true,
                    Data: data.Data,
                });
            }
        })
            .catch(function (err) {
            res.json(Routes.errors["".concat(err.ErrCode)]);
        });
        return [2 /*return*/];
    });
}); });
Router.post("/script/create", function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            DB.createScript(req.body.token, req.body.data || {})
                .then(function (data) {
                res.json({
                    Success: true,
                    Data: data.Data,
                });
            })
                .catch(function (err) {
                res.json(Routes.errors["".concat(err.ErrCode)]);
            });
            return [2 /*return*/];
        });
    });
});
Router.get("/script/owner/:owner", function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            DB.getScriptsByUser(req.params.owner)
                .then(function (data) {
                res.json({
                    Success: true,
                    Data: data.Data,
                });
            })
                .catch(function (err) {
                res.json(Routes.errors["".concat(err.ErrCode)]);
            });
            return [2 /*return*/];
        });
    });
});
Router.post("/tools/obfuscator", function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                res.json({
                    Success: true,
                    Data: { Code: Obfuscator(req.body.code || "") },
                });
            }
            catch (_b) {
                res.json(Routes.errors["500"]);
            }
            return [2 /*return*/];
        });
    });
});
Router.post("/apis/me", function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            DB.getAPIsByToken(req.body.token)
                .then(function (data) {
                res.json({
                    Success: true,
                    Data: data.Data,
                });
            })
                .catch(function (err) {
                res.json(Routes.errors["".concat(err.ErrCode)]);
            });
            return [2 /*return*/];
        });
    });
});
module.exports = Router;
