const boilerplates = require("../meta/boilerplate").boilerplates;
const { exec } = require("child_process");
const osCheck = require("../helpers/os-visit");
const output = null;
const CLIDocsLink = "https://google.com";
module.exports = {
    name: "visit",
    option: [["-d", "Visit Docs"]],
    argument: [['[string]', 'Framework name']],
    action: function (str, options) {
        if (!str) {
            osCheck(CLIDocsLink);
        }
        else if (options.d === true) {
            const boilerplate = boilerplates.find(boilerplate => boilerplate.id === str);
            if (boilerplate) {
                console.log("Opening " + boilerplate.id + " docs")
                osCheck(boilerplate.docs);
            }
            else
                console.log("No such framework");
        }
        else {
            const boilerplate = boilerplates.find(boilerplate => boilerplate.id === str);
            if (boilerplate) {
                console.log("Opening " + boilerplate.id + " website")
                osCheck(boilerplate.website);
            }
            else
                console.log("No such framework");
        }
    }
}
