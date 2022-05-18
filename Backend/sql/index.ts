const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("./database/db.json");
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
      let Owner = await this.userByToken(token);
      console.log(Owner);
      Conn.query(
        "INSERT INTO scripts(content, owner, id) VALUES(?, ?, ?)",
        [Cryptor.encrypt(data.content), Owner["username"], id],
        function (err, results) {
          if (err) {
            console.log(err);
            rej({ ErrCode: 500 });
          } else {
            console.log(results);
            res({
              Data: { id: id },
            });
          }
        }
      );
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
}
module.exports = new Master(require("../config/sql.json"));
