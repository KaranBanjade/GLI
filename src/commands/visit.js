const boilerplates = require("../meta/boilerplate").boilerplates;
const { exec } = require("child_process");
const output = null;
const osCheck = require("../helpers/os-visit");
module.exports = {
    name: "visit",
    option: [["-d", "Visit Docs"]],
    argument: [['[string]', 'Framework name']],
    action: function (str, options) {
        if (!str) {
            osCheck();
        }
        else if (options.d === true) {
            const boilerplate = boilerplates.find(boilerplate => boilerplate.id === str);
            if (boilerplate) {
                console.log("Opening " + boilerplate.id + " docs")
                exec(`explorer ${boilerplate.docs}`);
            }
            else
                console.log("No such framework");
        }
        else {
            const boilerplate = boilerplates.find(boilerplate => boilerplate.id === str);
            if (boilerplate) {
                console.log("Opening " + boilerplate.id + " website")
                exec(`explorer ${boilerplate.website}`);
            }
            else
                console.log("No such framework");
        }
    }
}
