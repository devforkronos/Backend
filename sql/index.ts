const Obfuscator = require("../module/obfuscator");
const Cooler = require("../module/cooler");
const rString = require("../module/rString");
const Cryptor = require("../module/crypt");
const MySQL = require("mysql2");
const path = require("path");
const fs = require("fs");

const misc = require("../config/misc.json");

const Conn = MySQL.createConnection({
  host: `${process.env.MYSQL_HOSTNAME}`,
  user: `${process.env.MYSQL_USERNAME}`,
  password: `${process.env.MYSQL_PASSWORD}`,
  database: `${process.env.MYSQL_DATABASE_NAME}`,
});

class Master {
  constructor(data) {
    this["data"] = data;
    Conn.connect();
    fs.readdirSync(
      `${__dirname.replace(path.basename(__dirname), "")}/databases`
    ).forEach((table) => {
      try {
        Conn.query(
          fs.readFileSync(
            `${__dirname.replace(
              path.basename(__dirname),
              ""
            )}/databases/${table}`,
            "utf-8"
          ),
          function (err, results) {
            if (err) {
              Cooler.red(`Error Initializing MySQL Table '${table}'\n ${err}`);
            } else {
              Cooler.green(`Successfuly Initialized MySQL Table '${table}'`);
            }
          }
        );
      } catch (err) {
        Cooler.red(`Error Initializing MySQL Table '${table}', Error: ${err}`);
      }
    });
  }
  /**
   * Create a new user
   */
  createUser(data: object) {
    return new Promise(async (res, rej) => {
      if (!data["username"] || !data["password"]) rej({ ErrCode: 400 });
      let prexists = await this.userByUsername(data["username"])
        .then((data) => {
          return data["Data"].username || undefined;
        })
        .catch((err) => {
          Cooler.red(err);
          return undefined;
        });
      if (!prexists) {
        let token: String = rString(125);
        let hash: String = await Cryptor.hash(data["password"])
          .then((hash) => {
            return hash;
          })
          .catch((err) => {
            Cooler.red(err);
            return undefined;
          });
        Conn.query(
          "INSERT INTO users(username, password, token, created) VALUES(?, ?, ?, ?)",
          [data["username"], hash, token, new Date().getTime()],
          function (err, results) {
            if (err) {
              Cooler.red(err);
              rej({ ErrCode: 500 });
            } else {
              res({ Success: true, Data: { token: token } });
            }
          }
        );
      } else {
        rej({
          ErrCode: 409,
          DisplayMessage: "An account with this username already exists",
        });
      }
    });
  }
  async getStorageUsage() {
    return new Promise((res, rej) => {
      Conn.query(
        `SELECT table_schema AS "Database", SUM(data_length + index_length) / 1024 / 1024 AS "SIZE" FROM information_schema.TABLES GROUP BY table_schema`,
        function (err, data) {
          if (err) {
            rej(err);
          } else {
            res({ Data: (data[0] || {})["SIZE"] || 0 });
          }
        }
      );
    });
  }
  async getUsersUses(username: String) {
    return new Promise((res, rej) => {
      Conn.query(
        "SELECT SUM(uses) AS 'COUNT' FROM scripts WHERE LOWER(owner) = ?",
        [username.toLowerCase()],
        function (err, data) {
          if (err) {
            rej(err);
          } else {
            res({ Data: (data[0] || {})["COUNT"] || 0 });
          }
        }
      );
    });
  }
  async getScriptsCount(username: String) {
    return new Promise((res, rej) => {
      Conn.query(
        "SELECT COUNT(*) AS 'COUNT' FROM scripts WHERE LOWER(owner) = ?",
        [username.toLowerCase()],
        function (err, data) {
          if (err) {
            rej(err);
          } else {
            res({ Data: (data[0] || {})["COUNT"] || 0 });
          }
        }
      );
    });
  }
  /**
   * Create new API Key
   */
  async createAPIKey(token: String, data: Object) {
    return new Promise(async (res, rej) => {
      if (!data) data = {};
      if (!data["name"]) rej({ ErrCode: 400 });
      let count: Number = await this.getAPIsCount(token)
        .then((data) => {
          return data["Count"];
        })
        .catch((err) => {
          return undefined;
        });
      let username: String = await this.userByToken(token)
        .then((data) => {
          return data["username"];
        })
        .catch((err) => {
          return undefined;
        });

      if (username) {
        if (count >= misc["maxAPIs"])
          return rej({
            ErrCode: 400,
            DisplayMessage: "You have reached your API limit",
          });
        let key: String = rString(64);
        let id: String = rString(12);
        Conn.query(
          "INSERT INTO apis(`key`, name, created, id, owner, description) VALUES(?, ?, ?, ?, ?, ?)",
          [
            key,
            data["name"],
            new Date().getTime(),
            id,
            username,
            data["description"] || null,
          ],
          function (err, data) {
            if (err) {
              Cooler.red(err);
              rej({ ErrCode: 500 });
            } else {
              res({
                Data: { key: key, id: id },
              });
            }
          }
        );
      } else {
        rej({ ErrCode: 403 });
      }
    });
  }
  /**
   * Create new webhook
   */
  async createWebhook(token: String, data: Object) {
    return new Promise(async (res, rej) => {
      if (!data) data = {};
      if (!data["name"]) rej({ ErrCode: 400 });
      let count: Number = await this.getWebhooksCount(token)
        .then((data) => {
          return data["Count"];
        })
        .catch((err) => {
          return undefined;
        });
      let username: String = await this.userByToken(token)
        .then((data) => {
          return data["username"];
        })
        .catch((err) => {
          return undefined;
        });

      if (username) {
        if (count >= misc["maxWebhooks"])
          return rej({
            ErrCode: 400,
            DisplayMessage: "You have reached your Webhooks limit",
          });
        let id: String = rString(12);
        Conn.query(
          "INSERT INTO webhooks(id, name, created, owner, description, url, log_uses) VALUES(?, ?, ?, ?, ?, ?, ?)",
          [
            id,
            data["name"],
            new Date().getTime(),
            username,
            data["description"],
            data["url"],
            data["log_uses"] || 0,
          ],
          function (err, data) {
            if (err) {
              Cooler.red(err);
              rej({ ErrCode: 500 });
            } else {
              res({
                Data: { id: id },
              });
            }
          }
        );
      } else {
        rej({ ErrCode: 403 });
      }
    });
  }
  async getWebhooksCount(token: String) {
    return new Promise(async (res, rej) => {
      let username: String = await this.userByToken(token)
        .then((data) => {
          return data["username"];
        })
        .catch((err) => {
          return undefined;
        });

      if (username) {
        Conn.query(
          "SELECT COUNT(*) AS 'COUNT' FROM webhooks WHERE owner = ?",
          [username],
          function (err, data) {
            if (err) {
              Cooler.red(err);
              rej({ ErrCode: 500 });
            } else {
              res({
                Count: data[0]["COUNT"],
              });
            }
          }
        );
      } else {
        rej({ ErrCode: 403 });
      }
    });
  }
  async getAPIsCount(token: String) {
    return new Promise(async (res, rej) => {
      let username: String = await this.userByToken(token)
        .then((data) => {
          return data["username"];
        })
        .catch((err) => {
          return undefined;
        });

      if (username) {
        Conn.query(
          "SELECT COUNT(*) AS 'COUNT' FROM apis WHERE owner = ?",
          [username],
          function (err, data) {
            if (err) {
              Cooler.red(err);
              rej({ ErrCode: 500 });
            } else {
              res({
                Count: data[0]["COUNT"],
              });
            }
          }
        );
      } else {
        rej({ ErrCode: 403 });
      }
    });
  }

  /**
   * Get user stats
   */
  async getUserStats(token: String) {
    return new Promise(async (res, rej) => {
      let username: String = await this.userByToken(token)
        .then((data) => {
          return data["username"];
        })
        .catch((err) => {
          return undefined;
        });

      if (username) {
        let Uses = await this.getUsersUses(username)
          .then((data) => {
            return data;
          })
          .catch((err) => {
            Cooler.red(err);
            return undefined;
          });
        let Scripts = await this.getScriptsCount(username)
          .then((data) => {
            return data;
          })
          .catch((err) => {
            Cooler.red(err);
            return undefined;
          });
        let Storage = await this.getStorageUsage()
          .then((data) => {
            return data;
          })
          .catch((err) => {
            Cooler.red(err);
            return undefined;
          });
        res({
          Uses: Uses["Data"],
          Scripts: Scripts["Data"],
          Storage: Storage["Data"],
        });
      } else {
        rej({ ErrCode: 403 });
      }
    });
  }

  /**
   * Get a user by login credentials
   */
  async getUser(username: String, password: String) {
    return new Promise(async (res, rej) => {
      if (!username || !password) rej({ ErrCode: 400 });
      let user = await this.userByUsername(username)
        .then((data) => {
          return data["Data"];
        })
        .catch((err) => {
          return undefined;
        });
      if (user) {
        let passwowrdCorrect: String = await Cryptor.matchHash(
          password,
          user["password"]
        )
          .then((hash) => {
            return hash;
          })
          .catch((err) => {
            Cooler.red(err);
            return undefined;
          });

        if (passwowrdCorrect) {
          res({ Data: { token: user.token, username: user.username } });
        } else {
          rej({
            ErrCode: 401,
            DisplayMessage: "The password you entered was invalid",
          });
        }
      } else {
        rej({
          ErrCode: 404,
          DisplayMessage: "No account with this username exists",
        });
      }
    });
  }
  /**
   * Get a user's data by a username.
   */
  async userByUsername(username: String) {
    return new Promise((res, rej) => {
      Conn.query(
        "SELECT * FROM users WHERE LOWER(username) = ?",
        [username.toLowerCase()],
        function (error, results) {
          if (error) {
            rej({ ErrCode: 500 });
          } else {
            if (results.length > 0) {
              res({ Data: results[0] });
            } else {
              rej({ ErrCode: 403 });
            }
          }
        }
      );
    });
  }
  /**
   * Get a user's data by a valid token.
   */
  async userByToken(token: String) {
    return new Promise((res, rej) => {
      Conn.query(
        "SELECT * FROM users WHERE token = ?",
        [token],
        function (error, results) {
          if (error) {
            rej({ ErrCode: 500 });
          } else {
            if (results) {
              if (results.length > 0) {
                res(results[0]);
              } else {
                rej({ ErrCode: 403 });
              }
            } else {
              rej({ ErrCode: 403 });
            }
          }
        }
      );
    });
  }
  /**
   * Add new script to database
   */
  createScript(token: String, data: object) {
    return new Promise(async (res, rej) => {
      let id = rString(13);

      this.userByToken(token)
        .then(async (Owner) => {
          if (Owner) {
            let name = data["name"];
            let content = data["content"];
            if (!name || !content) return rej({ ErrCode: 400 });
            content = Cryptor.encrypt(data["content"]);
            if (content.length > misc.maxScriptCharacters)
              return rej({
                ErrCode: 400,
                DisplayMessage: `The script is too large, you can have ${misc.maxScriptCharacters} characters at most`,
              });

            let Scripts = await this.getScriptsCount(Owner["username"])
              .then((data) => {
                return data;
              })
              .catch((err) => {
                Cooler.red(err);
                return undefined;
              });
            if (Scripts >= misc.maxScripts)
              return rej({
                ErrCode: 400,
                DisplayMessage:
                  "You have reached your scripts limit, delete old scripts to create more",
              });
            try {
              var obcontent = Cryptor.encrypt(Obfuscator(data["content"]));
            } catch {
              obcontent = content;
            }
            Conn.query(
              "INSERT INTO scripts(private, obfuscate, name, description, content, obfuscated_content, owner, id) VALUES(?, ?, ?, ?, ?, ?, ?, ?)",
              [
                data["private"] == true ? 1 : 0,
                data["obfuscate"] == true ? 1 : 0,
                name,
                data["description"],
                content,
                obcontent,
                Owner["username"],
                id,
              ],
              function (err, results) {
                if (err) {
                  Cooler.red(err);
                  rej({ ErrCode: 500 });
                } else {
                  res({
                    Data: { id: id },
                  });
                }
              }
            );
          } else {
            rej({ ErrCode: 403 });
          }
        })
        .catch((err) => {
          Cooler.red(err);
          rej({ ErrCode: 403 });
        });
    });
  }
  /**
   * Update your script
   */
  updateScript(id: String, token: String, data: object) {
    return new Promise(async (res, rej) => {
      this.userByToken(token)
        .then((Owner) => {
          if (Owner) {
            this.getScriptById(id)
              .then((results) => {
                let content = Cryptor.encrypt(data["content"]);
                try {
                  var obcontent = Cryptor.encrypt(Obfuscator(data["content"]));
                } catch {
                  obcontent = content;
                }
                if ((results["Data"].owner = Owner["username"].toLowerCase())) {
                  Conn.query(
                    "UPDATE scripts SET obfuscated_content = ?, content = ?, private = ?, obfuscate = ? WHERE id = ?",
                    [
                      obcontent,
                      content,
                      `${data["private"] == true ? 1 : 0}`,
                      `${data["obfuscate"] == true ? 1 : 0}`,
                      id,
                    ],
                    function (err, data) {
                      if (err) {
                        Cooler.red(err);
                        rej({ ErrCode: 500 });
                      } else {
                        res({ Data: { id: id } });
                      }
                    }
                  );
                } else {
                  rej({
                    ErrCode: 401,
                    DisplayMessage:
                      "You are not allowed to configure this script",
                  });
                }
              })
              .catch((err) => {
                rej({
                  ErrCode: 404,
                  DisplayMessage: "This script does not exist",
                });
              });
          } else {
            rej({ ErrCode: 403 });
          }
        })
        .catch((err) => {
          Cooler.red(err);
          rej({ ErrCode: 403 });
        });
    });
  }
  /**
   * Update a webhook
   */
  updateWebhook(id: String, token: String, data: object) {
    return new Promise(async (res, rej) => {
      this.userByToken(token)
        .then((Owner) => {
          if (Owner) {
            this.getWebhookDataById(token, id)
              .then((results) => {
                if ((results["Data"].owner = Owner["username"].toLowerCase())) {
                  Conn.query(
                    "UPDATE webhooks SET url = ?, log_uses = ? WHERE id = ?",
                    [data["url"], data["log_uses"], id],
                    function (err, data) {
                      if (err) {
                        Cooler.red(err);
                        rej({ ErrCode: 500 });
                      } else {
                        res({ Data: { id: id } });
                      }
                    }
                  );
                } else {
                  rej({
                    ErrCode: 401,
                    DisplayMessage:
                      "You are not allowed to configure this webhook",
                  });
                }
              })
              .catch((err) => {
                rej({
                  ErrCode: 404,
                  DisplayMessage: "This webhook does not exist",
                });
              });
          } else {
            rej({ ErrCode: 403 });
          }
        })
        .catch((err) => {
          Cooler.red(err);
          rej({ ErrCode: 403 });
        });
    });
  }
  /**
   * Get script from database
   */
  getScriptById(id: String | Number) {
    return new Promise(async (res, rej) => {
      Conn.query(
        "SELECT * FROM scripts WHERE id = ?",
        [id],
        function (err, results) {
          if (err) {
            Cooler.red(err);
            rej({ ErrCode: 500 });
          } else {
            if (results.length) {
              let script = results[0];
              script.content = Cryptor.decrypt(script.content);
              script.obfuscated_content = Cryptor.decrypt(
                script.obfuscated_content
              );
              if (script.private == true) {
                delete script.content;
              }
              res({
                Data: script,
              });
            } else {
              rej({ ErrCode: 404 });
            }
          }
        }
      );
    });
  }

  /**
   * Get script data from database
   */
  async incrementScriptUse(
    token: String,
    scriptId: String,
    icrementCount: Number
  ) {
    return new Promise(async (res, rej) => {
      this.userByToken(token)
        .then((Owner) => {
          if (Owner) {
            let script = this.getScriptById(scriptId)
              .then((data) => {
                return data["Data"];
              })
              .catch((err) => {
                return undefined;
              });
            if (script) {
              if (script["owner"].toLowerCase() == Owner["username"]) {
                Conn.query(
                  `UPDATE scripts SET uses = uses + ${
                    icrementCount || 1
                  } WHERE id = ?`,
                  [scriptId],
                  function (err, data) {
                    if (err) {
                      rej({ ErrCode: 500 });
                    } else {
                      res({ Data: { id: scriptId } });
                    }
                  }
                );
              } else {
                rej({ ErrCode: 401 });
              }
            } else {
              rej({ ErrCode: 403 });
            }
          } else {
            rej({ ErrCode: 403 });
          }
        })
        .catch((err) => {
          rej({ ErrCode: 403 });
        });
    });
  }

  /**
   * Get script data from database
   */
  getScriptDataById(token: String, id: String | Number) {
    return new Promise(async (res, rej) => {
      this.userByToken(token)
        .then((Owner) => {
          if (Owner) {
            Conn.query(
              "SELECT * FROM scripts WHERE id = ?",
              [id],
              function (err, results) {
                if (err) {
                  Cooler.red(err);
                  rej({ ErrCode: 500 });
                } else {
                  if (results.length > 0) {
                    let script = results[0];
                    try {
                      script.content = Cryptor.decrypt(script.content);
                    } catch {
                      script.content = "";
                    }

                    try {
                      script.obfuscated_content = Cryptor.decrypt(
                        script.obfuscated_content
                      );
                    } catch {
                      script.obfuscated_content = "";
                    }
                    if (script.owner == Owner["username"]) {
                      res({
                        Data: script,
                      });
                    } else {
                      rej({ ErrCode: 404 });
                    }
                  } else {
                    rej({ ErrCode: 404 });
                  }
                }
              }
            );
          } else {
            rej({ ErrCode: 403 });
          }
        })
        .catch((err) => {
          rej({ ErrCode: 403 });
        });
    });
  }
  /**
   * Get API data from database
   */
  getWebhookDataById(token: String, id: String | Number) {
    return new Promise(async (res, rej) => {
      this.userByToken(token)
        .then((Owner) => {
          if (Owner) {
            Conn.query(
              "SELECT * FROM webhooks WHERE id = ?",
              [id],
              function (err, results) {
                if (err) {
                  Cooler.red(err);
                  rej({ ErrCode: 500 });
                } else {
                  if (results.length > 0) {
                    let webhook = results[0];
                    if (webhook.owner == Owner["username"]) {
                      res({
                        Data: webhook,
                      });
                    } else {
                      rej({ ErrCode: 404 });
                    }
                  } else {
                    rej({ ErrCode: 404 });
                  }
                }
              }
            );
          } else {
            rej({ ErrCode: 403 });
          }
        })
        .catch((err) => {
          rej({ ErrCode: 403 });
        });
    });
  }
  /**
   * Get API data from database
   */
  getAPIDataById(token: String, id: String | Number) {
    return new Promise(async (res, rej) => {
      this.userByToken(token)
        .then((Owner) => {
          if (Owner) {
            Conn.query(
              "SELECT * FROM apis WHERE id = ?",
              [id],
              function (err, results) {
                if (err) {
                  Cooler.red(err);
                  rej({ ErrCode: 500 });
                } else {
                  if (results.length > 0) {
                    let api = results[0];
                    if (api.owner == Owner["username"]) {
                      res({
                        Data: api,
                      });
                    } else {
                      rej({ ErrCode: 404 });
                    }
                  } else {
                    rej({ ErrCode: 404 });
                  }
                }
              }
            );
          } else {
            rej({ ErrCode: 403 });
          }
        })
        .catch((err) => {
          rej({ ErrCode: 403 });
        });
    });
  }
  /**
   * Get user's scripts by username, private script contetn is removed
   */
  getScriptsByUser(owner: String) {
    return new Promise(async (res, rej) => {
      Conn.query(
        "SELECT * FROM scripts WHERE LOWER(owner) = ?",
        [owner.toLowerCase()],
        function (err, results) {
          if (err) {
            Cooler.red(err);
            rej({ ErrCode: 500 });
          } else {
            if (results.length) {
              results = results.filter((script) => {
                delete script.content;
                //  script.content = Cryptor.decrypt(script.content);
                return script;
              });
              res({
                Data: results,
              });
            } else {
              rej({ ErrCode: 404 });
            }
          }
        }
      );
    });
  }
  getScriptsByToken(token: String) {
    return new Promise(async (res, rej) => {
      let username: String = await this.userByToken(token)
        .then((data) => {
          return data["username"] || undefined;
        })
        .catch((err) => {
          return undefined;
        });
      if (username) {
        this.getScriptsByUser(username)
          .then((data) => {
            res({ Data: data["Data"] });
          })
          .catch((err) => {
            rej({ ErrCode: 404 });
          });
      } else {
        rej({ ErrCode: 403 });
      }
    });
  }
  /**
   * Get user's Webhooks by token.
   */
  getWebhooksByToken(token: String) {
    return new Promise(async (res, rej) => {
      this.userByToken(token)
        .then((Owner) => {
          if (Owner) {
            if (Owner["username"]) {
              this.getWebhooksByUsername(Owner["username"])
                .then((results) => {
                  res({ Data: results["Data"] });
                })
                .catch((err) => {
                  rej({ ErrCode: err.errCode });
                });
            } else {
              rej({ ErrCode: 403 });
            }
          } else {
            rej({ ErrCode: 403 });
          }
        })
        .catch((err) => {
          rej({ ErrCode: 403 });
        });
    });
  }
  /**
   * Get user's APIs by token.
   */
  getAPIsByToken(token: String) {
    return new Promise(async (res, rej) => {
      this.userByToken(token)
        .then((Owner) => {
          if (Owner) {
            if (Owner["username"]) {
              this.getAPIsByUsername(Owner["username"])
                .then((results) => {
                  res({ Data: results["Data"] });
                })
                .catch((err) => {
                  rej({ ErrCode: err.errCode });
                });
            } else {
              rej({ ErrCode: 403 });
            }
          } else {
            rej({ ErrCode: 403 });
          }
        })
        .catch((err) => {
          rej({ ErrCode: 403 });
        });
    });
  }
  /**
   * Get user's APIs by Username. Never send back this data to client as response
   */
  getAPIsByUsername(username: String) {
    return new Promise(async (res, rej) => {
      Conn.query(
        "SELECT * FROM apis WHERE owner = ?",
        [username],
        function (err, results) {
          if (err) {
            rej({ ErrCode: 500 });
          } else {
            res({
              Data: results,
            });
          }
        }
      );
    });
  }
  /**
   * Get user's webhooks by Username. Never send back this data to client as response
   */
  getWebhooksByUsername(username: String) {
    return new Promise(async (res, rej) => {
      Conn.query(
        "SELECT * FROM webhooks WHERE owner = ?",
        [username],
        function (err, results) {
          if (err) {
            rej({ ErrCode: 500 });
          } else {
            res({
              Data: results,
            });
          }
        }
      );
    });
  }
}
module.exports = new Master(require("../config/sql.json"));
