const Luamin = require("lua-format");
const Settings = {
    RenameVariables: true,
    RenameGlobals: false,
    SolveMath: true,
};
module.exports = function main(Code) {
    return Luamin.Minify(Luamin.Uglify(Code, Settings), Settings);
};
