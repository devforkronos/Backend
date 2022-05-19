const Obfuscator = require("../module/obfuscator");
const Cooler = require("../module/cooler");
const rString = require("../module/rString");
const Cryptor = require("../module/crypt");
const MySQL = require("mysql2");
const path = require("path");
const fs = require("fs");

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
              console.log(err);
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
  /**
   * Get a user by login credentials
   */
  getUser(username: String, password: String) {
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
            if (results.length > 0) {
              res(results[0]);
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
        .then((Owner) => {
          if (Owner) {
            let name = data["name"];
            if (!name) rej({ ErrCode: 400 });
            let content = Cryptor.encrypt(data["content"]);
            let obcontent = Cryptor.encrypt(Obfuscator(data["content"]));
            Conn.query(
              "INSERT INTO scripts(name, content, obfuscated_content, owner, id) VALUES(?, ?, ?, ?, ?)",
              [name, content, obcontent, Owner["username"], id],
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
            console.log(err);
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
   * Get user's scripts by username, private script contetn is removed
   */
  getScriptsByUser(owner: String) {
    return new Promise(async (res, rej) => {
      Conn.query(
        "SELECT * FROM scripts WHERE LOWER(owner) = ?",
        [owner.toLowerCase()],
        function (err, results) {
          if (err) {
            console.log(err);
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
   * Get user's APIs by token. Never send back this data to client as response
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
}
module.exports = new Master(require("../config/sql.json"));
