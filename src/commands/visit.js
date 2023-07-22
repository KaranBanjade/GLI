const boilerplates = require("../meta/boilerplate").boilerplates;
const osCheck = require("../helpers/os-visit");
const print = require("../utils/print");
const SELF_DOC = "https://www.npmjs.com/package/@banjade/gli";
module.exports = {
    name: "visit",
    option: [["-d", "Visit Docs"]],
    argument: [['[string]', 'Framework name']],
    action: function (str, options) {
        // if no entity is provided, open GLI's doc link
        if (!str) {
            osCheck(SELF_DOC);
        }
        else if (options.d === true) {
            const boilerplate = boilerplates.find(boilerplate => boilerplate.id === str);
            if (boilerplate) {
                print(`Opening ${boilerplate.id} docs`, "green");
                osCheck(boilerplate.docs);
            }
            else
                print("No such framework", "red");
        }
        else {
            const boilerplate = boilerplates.find(boilerplate => boilerplate.id === str);
            if (boilerplate) {
                print(`Opening ${boilerplate.id} website`, "green");
                osCheck(boilerplate.website);
            }
            else
                print("No such framework", "red");
        }
    }
}
