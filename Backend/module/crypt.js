require("dotenv").config();
var salt = process.env.ENCRYPT_KEY;
module.exports = {
    encrypt: function (text) {
        var textToChars = function (text) { return text.split("").map(function (c) { return c.charCodeAt(0); }); };
        var byteHex = function (n) { return ("0" + Number(n).toString(16)).substr(-2); };
        var applySaltToChar = function (code) {
            return textToChars(salt).reduce(function (a, b) { return a ^ b; }, code);
        };
        return text
            .split("")
            .map(textToChars)
            .map(applySaltToChar)
            .map(byteHex)
            .join("");
    },
    decrypt: function (encoded) {
        var textToChars = function (text) { return text.split("").map(function (c) { return c.charCodeAt(0); }); };
        var applySaltToChar = function (code) {
            return textToChars(salt).reduce(function (a, b) { return a ^ b; }, code);
        };
        return encoded
            .match(/.{1,2}/g)
            .map(function (hex) { return parseInt(hex, 16); })
            .map(applySaltToChar)
            .map(function (charCode) { return String.fromCharCode(charCode); })
            .join("");
    },
};
