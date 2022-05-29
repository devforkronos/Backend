const Cooler = require("./cooler");
const _fs = require("fs");
const luainjs = require("lua-in-js");
const luaEnv = luainjs.createEnv();
const template = _fs
    .readFileSync(`${__dirname}/jaycator.lua`, "utf8")
    .replace();
Cooler.green(`Obfuscator Has Been Loaded`);
module.exports = function main(code) {
    return luaEnv.parse(template.replace(/{{SourceCode}}/gi, code)).exec();
};
