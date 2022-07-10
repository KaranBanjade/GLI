const util = require('util');
const exec = util.promisify(require('child_process').exec);
const print = require("../utils/print");
const { createSpinner } = require('nanospinner');

const execute = async (cmd, loaderText) => {
    let spinner = null;
    try {
        
        if (loaderText) {
            spinner = createSpinner(loaderText).start()
        }
        await exec(cmd);
        if (spinner) spinner.success()
        return true;
    } catch (e) {
        
        if(spinner) spinner.error();
        // log the stderr output
        print("\n" + e.stderr, "red");
        return false;
    }
}

module.exports = execute;