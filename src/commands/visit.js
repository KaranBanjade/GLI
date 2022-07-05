const boilerplates = require("../meta/boilerplate").boilerplates;
const { exec } = require("child_process");
const os = require('os');
const output = null;
module.exports = {
    name: "visit",
    option: [["-d", "Visit Docs"]],
    argument: [['[string]', 'Framework name']],
    action: function (str, options) {
        if (!str) {
            switch(os.type()) {
                case 'Darwin':
                    console.log("You are using MacOS\nOpening CLI Docs in Default Browser");
                    exec("open http://www.google.com");
                    break;
                case 'Linux': 
                    console.log("You are using Linux operating system\nOpening CLI Docs in Default Browser");
                    exec("xdg-open https://google.com")
                    break;
                case 'Windows_NT':
                    console.log("You are using Windows operating system\nOpening CLI Docs in Default Browser");
                    exec("explorer https://google.com")
                    break;    
                default: 
                    console.log("other operating system");
            }
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
