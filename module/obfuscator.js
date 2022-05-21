const Luamin = require("./obfuscator/index");
const Settings = {
    RenameVariables: true,
    RenameGlobals: false,
    SolveMath: true,
};
module.exports = function main(Code, Minify) {
    return Minify == true
        ? Luamin.Minify(Luamin.Uglify(Code, Settings), Settings)
        : Luamin.Uglify(Code, Settings);
};
