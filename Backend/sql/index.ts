const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("./database/db.json");
const Obfuscator = require("../module/obfuscator");
const rString = require("../module/rString");
const Cryptor = require("../module/crypt");
const MySQL = require("mysql2");

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
  }
  /**
   * Get a user's data by a valid token.
   */
  async userByToken(token) {
    return new Promise((res, rej) => {
      Conn.query(
        "SELECT * FROM users WHERE token = ?",
        [token],
        function (error, results) {
          if (error) {
            rej({ ErrCode: 404 });
          } else {
            if (results.length > 0) {
              res(results[0]);
            } else {
              rej({ ErrCode: 404 });
            }
          }
        }
      );
    });
  }
  /**
   * Add new script to database
   */
  createScript(token, data) {
    return new Promise(async (res, rej) => {
      let id = rString(13);
      this.userByToken(token)
        .then((Owner) => {
          if (Owner) {
            let name = data.name;
            if (!name) rej({ ErrCode: 400 });
            let content = Cryptor.encrypt(data.content);
            let obcontent = Cryptor.encrypt(Obfuscator(data.content));
            Conn.query(
              "INSERT INTO scripts(name, content, obfuscated_content, owner, id) VALUES(?, ?, ?, ?, ?)",
              [name, content, obcontent, Owner["username"], id],
              function (err, results) {
                if (err) {
                  console.log(err);
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
  getScriptById(id) {
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
  getScriptsByUser(owner) {
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
  /**
   * Get user's APIs by token.
   */
  getAPIsByToken(token) {
    return new Promise(async (res, rej) => {
      this.userByToken(token)
        .then((Owner) => {
          if (Owner) {
            this.getAPIsByUsername(Owner["username"])
              .then((results) => {
                res({ Data: results["Data"] });
              })
              .catch((err) => {
                rej({ ErrCode: 403 });
              });
          } else {
            rej({ ErrCode: 403 });
          }
        })
        .catch((err) => {
          rej({ ErrCode: err.ErrCode });
        });
    });
  }
  /**
   * Get user's APIs by token. Never send back this data to client as response
   */
  getAPIsByUsername(username) {
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
