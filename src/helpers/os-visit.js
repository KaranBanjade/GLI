const print = require("../utils/print");
const os = require('os');
const osMap = require('../meta/osMapper').osMap;

const osCheck = (link) =>{
    osId = os.type();
    const osObj = osMap.find(osObj => osObj.id === osId);
    if(!osObj){
        print(`other operating system`,"red");
        return    
    }
    print(`You are using ${osObj.os}\nOpening ${link} in Default Browser`,"green");
    const command = osObj.commands.LINK + " " +link;
    print(command,"yellow");
    exec(command);
}
module.exports = osCheck;