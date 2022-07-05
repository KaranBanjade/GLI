const { exec } = require("child_process");
const os = require('os');
const osCheck = () =>{
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
module.exports = osCheck;