"use strict";
exports.__esModule = true;
import ('inquirer')
var InquirerClass = /** @class */ (function () {
    function InquirerClass() {
        console.log("Inquirer Class Object Created");
    }
    InquirerClass.prototype.frameworkChoice = function () {
        inquirer
            .prompt({
            name: "framework",
            type: "list",
            message: "Choose Framework",
            choices: ["React", "Express", "Angular"]
        })
            .then(function (answers) {
            console.log(answers);
        });
    };
    InquirerClass.prototype.helpChoice = function () {
        inquirer
            .prompt({
            name: "help",
            type: "list",
            message: "Choose Help",
            choices: ["List", "Help"]
        })
            .then(function (answers) {
            console.log(answers);
        });
    };
    return InquirerClass;
}());
var Inquirer = new InquirerClass();
exports["default"] = Inquirer;
