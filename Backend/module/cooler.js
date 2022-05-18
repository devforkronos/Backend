var chalk = require("chalk");
var Cooler = /** @class */ (function () {
    function Cooler() {
    }
    Cooler.prototype.red = function (arg) {
        console.log("[".concat(chalk.hex("#D44A4A")("-"), "] ").concat(arg));
    };
    Cooler.prototype.green = function (arg) {
        console.log("[".concat(chalk.hex("#4AD45A")("+"), "] ").concat(arg));
    };
    return Cooler;
}());
module.exports = new Cooler();
