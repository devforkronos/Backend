const fs = require("fs");
const template = require("./obfuscator/index").Minify(
  fs.readFileSync(`${__dirname}/hub.lua`, "utf-8"),
  {
    RenameVariables: true,
    RenameGlobals: true,
    SolveMath: true,
  }
);

module.exports = function main(data: string) {
  return template.replace(
    /{{ScriptData}}/gi,
    JSON.stringify(JSON.parse(data), null, 4)
  );
};
