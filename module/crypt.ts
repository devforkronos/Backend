require("dotenv").config();
const salt: String = process.env.ENCRYPT_KEY;
const saltRounds: Number = parseInt(process.env.BYCRYPT_PASSWORD_SALT_ROUNDS);
const bcrypt = require("bcrypt");

module.exports = {
  async hash(string: string) {
    return new Promise((res, rej) => {
      bcrypt.hash(string, saltRounds, async function (err, hash) {
        if (err) {
          rej(err);
        } else {
          res(hash);
        }
      });
    });
  },
  async matchHash(string: string, hash: string) {
    return new Promise(async (res, rej) => {
      bcrypt.compare(string, hash, function (err, result: Boolean) {
        if (err) {
          console.log(err);
          res(err);
        } else {
          res(result);
        }
      });
    });
  },
  encrypt: (text) => {
    return text;

    // const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    // const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
    // const applySaltToChar = (code) =>
    //   textToChars(salt).reduce((a, b) => a ^ b, code);
    // try {
    //   return text
    //     .split("")
    //     .map(textToChars)
    //     .map(applySaltToChar)
    //     .map(byteHex)
    //     .join("");
    // } catch {
    //   return text;
    // }
  },
  decrypt: (encoded) => {
    return encoded;
    // const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    // const applySaltToChar = (code) =>
    //   textToChars(salt).reduce((a, b) => a ^ b, code);
    // try {
    //   return encoded
    //     .match(/.{1,2}/g)
    //     .map((hex) => parseInt(hex, 16))
    //     .map(applySaltToChar)
    //     .map((charCode) => String.fromCharCode(charCode))
    //     .join("");
    // } catch {
    //   return encoded;
    // }
  },
};
