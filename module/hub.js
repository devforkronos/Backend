const fs = require("fs");
const template = fs.readFileSync(`${__dirname}/hub.lua`, "utf-8");
module.exports = function main(data) {
    return template.replace(/{{ScriptData}}/gi, data);
};
