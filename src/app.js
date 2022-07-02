"use strict";
exports.__esModule = true;
var commander_1 = require("commander");
var Inquirer_1 = require("./Inquirer.js");
commander_1.program
    .version("0.0.1")
    .description("CLI for GLI");
commander_1.program
    .command('list')
    .alias("l")
    .description('Show help')
    .action(function () {
    Inquirer_1["default"].frameworkChoice();
});
commander_1.program
    .command('help')
    .alias("h")
    .description("Show help")
    .action(function () {
    Inquirer_1["default"].helpChoice();
});
commander_1.program.parse(process.argv);
