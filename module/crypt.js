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
    encrypt: (c) => {
        var x = "charCodeAt", b, e = {}, f = c.split(""), d = [], a = f[0], g = 256;
        for (b = 1; b < f.length; b++)
            (c = f[b]),
                null != e[a + c]
                    ? (a += c)
                    : (d.push(1 < a.length ? e[a] : a[x](0)),
                        (e[a + c] = g),
                        g++,
                        (a = c));
        d.push(1 < a.length ? e[a] : a[x](0));
        for (b = 0; b < d.length; b++)
            d[b] = String.fromCharCode(d[b]);
        return d.join("");
    },
    decrypt: (b) => {
        var o, f;
        var a, e = {}, d = b.split(""), c = (f = d[0]), g = [c], h = (o = 256);
        for (b = 1; b < d.length; b++)
            (a = d[b].charCodeAt(0)),
                (a = h > a ? d[b] : e[a] ? e[a] : f + c),
                g.push(a),
                (c = a.charAt(0)),
                (e[o] = f + c),
                o++,
                (f = a);
        return g.join("");
    },
};
