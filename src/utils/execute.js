const util = require('util');
const exec = util.promisify(require('child_process').exec);
const print = require("../utils/print");
const execute = async (cmd) => {
    try {
        await exec(cmd);
        return true;
    } catch (e) {
        // log the stderr output
        print(e.stderr, "red");
        return false;
    }
}

module.exports = execute;