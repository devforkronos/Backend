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
var FileSync = require("lowdb/adapters/FileSync");
var adapter = new FileSync("./database/db.json");
var rString = require("../module/rString");
var low = require("lowdb");
var db = low(adapter);
var Master = /** @class */ (function () {
    function Master(data) {
        this["data"] = data;
        db.defaults({ Users: [], APIKeys: [], Scripts: [] }).write();
    }
    /**
     * Get a user's data by a valid token.
     */
    Master.prototype.userByToken = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (res, rej) {
                        var user = db.get("Users").filter({ token: token }).value();
                        try {
                            res({
                                Success: true,
                                Data: user
                            });
                        }
                        catch (err) {
                            rej({ ErrCode: 404 });
                        }
                    })];
            });
        });
    };
    /**
     * Add new script to database
     */
    Master.prototype.createScript = function (token, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log(token);
                return [2 /*return*/, new Promise(function (res, rej) { return __awaiter(_this, void 0, void 0, function () {
                        var user, owner;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!data.content) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this.userByToken(token)];
                                case 1:
                                    user = _a.sent();
                                    owner = (user["Data"][0] || {}).username || undefined;
                                    if (owner) {
                                        try {
                                            data["owner"] = owner;
                                            data["id"] = rString(11);
                                            db.get("Scripts").push(data).write();
                                            res({ Success: true, Data: data });
                                        }
                                        catch (err) {
                                            console.log(err);
                                            rej({ ErrCode: 500 });
                                        }
                                    }
                                    else {
                                        rej({ ErrCode: 403 });
                                    }
                                    return [3 /*break*/, 3];
                                case 2:
                                    rej({ ErrCode: 400 });
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Get script from database
     */
    Master.prototype.getScriptById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (res, rej) {
                        if (id) {
                            var script = db.get("Scripts").filter({ id: id }).value();
                            if (script.length > 0) {
                                try {
                                    if (script) {
                                        res({
                                            Success: true,
                                            Data: script
                                        });
                                    }
                                    else {
                                        rej({ ErrCode: 404 });
                                    }
                                }
                                catch (err) {
                                    rej({ ErrCode: 404 });
                                }
                            }
                            else {
                                rej({ ErrCode: 404 });
                            }
                        }
                        else {
                            rej({ ErrCode: 400 });
                        }
                    })];
            });
        });
    };
    return Master;
}());
module.exports = new Master(require("../config/sql.json"));
