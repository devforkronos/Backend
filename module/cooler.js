const chalk = require("chalk");
class Cooler {
    constructor() { }
    red(arg) {
        console.log(`[${chalk.hex(`#D44A4A`)(`-`)}] ${arg}`);
    }
    green(arg) {
        console.log(`[${chalk.hex(`#4AD45A`)(`+`)}] ${arg}`);
    }
}
module.exports = new Cooler();
