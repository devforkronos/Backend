let inputFile = "./input.lua";
let outputFile = "output.lua";
const luamin = require("./luamin");
const fs = require("fs");
fs.readFile(`${inputFile}`, "utf8", (err, src) => {
    if (err)
        throw err;
    fs.writeFile(outputFile, luamin.Beautify(src, {
        RenameVariables: true,
        RenameGlobals: false,
        SolveMath: true,
    }), (err) => {
        if (err)
            throw err;
        console.log(`saved to ${outputFile}`);
    });
});
