const print = require("../utils/print");
const os = require('os');
const execute = require("../utils/execute");
const osMap = require('../meta/osMapper').osMap;

const osCheck = (link) => {
    osId = os.type();
    const osObj = osMap.find(osObj => osObj.id === osId);
    if (!osObj) {
        print(`other operating system`, "red");
        return
    }
    const command = osObj.commands.LINK + " " + link;
    print(command, "yellow");
    execute(command, null);
}
module.exports = osCheck;