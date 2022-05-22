require("dotenv").config();
const salt = process.env.ENCRYPT_KEY;
const saltRounds = parseInt(process.env.BYCRYPT_PASSWORD_SALT_ROUNDS);
const bcrypt = require("bcrypt");
module.exports = {
    async hash(string) {
        return new Promise((res, rej) => {
            bcrypt.hash(string, saltRounds, async function (err, hash) {
                if (err) {
                    rej(err);
                }
                else {
                    res(hash);
                }
            });
        });
    },
    async matchHash(string, hash) {
        return new Promise(async (res, rej) => {
            bcrypt.compare(string, hash, function (err, result) {
                if (err) {
                    console.log(err);
                    res(err);
                }
                else {
                    res(result);
                }
            });
        });
    },
    encrypt: (text) => {
        return text;
    },
    decrypt: (encoded) => {
        return encoded;
    },
};
