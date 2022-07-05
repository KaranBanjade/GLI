const { exec } = require(`child_process`);
const os = require('os');
const osCheck = (link) =>{
    switch(os.type()) {
        case 'Darwin':
            console.log(`You are using MacOS\nOpening ${link} in Default Browser`);
            exec(`open ${link}`);
            break;
        case 'Linux': 
            console.log(`You are using Linux operating system\nOpening ${link} in Default Browser`);
            exec(`xdg-open ${link}`)
            break;
        case 'Windows_NT':
            console.log(`You are using Windows operating system\nOpening ${link} in Default Browser`);
            exec(`explorer ${link}`)
            break;    
        default: 
            console.log(`other operating system`);
    }
}
module.exports = osCheck;