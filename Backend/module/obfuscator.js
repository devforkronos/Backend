var Luamin = require("lua-format");
var Settings = {
    RenameVariables: true,
    RenameGlobals: false,
    SolveMath: true,
};
module.exports = function main(Code) {
    return Luamin.Minify(Luamin.Uglify(Code, Settings), Settings);
};
