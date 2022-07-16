const util = require('util');
const exec = util.promisify(require('child_process').exec);
const print = require("../utils/print");
const { createSpinner } = require('nanospinner');
const { type } = require('os');
const { exit } = require('process');

// const ex = async(cmd) =>{
//     await exec(cmd,(err, stdout, stderr,stdio) => {
//         if (err) {
//             // node couldn't execute the command
//             console.log(err);
//             return;
//         }

//         // the *entire* stdout and stderr (buffered)
//         console.log(`stdout: ${stdout}`);
//     });
// }
const ex2 = (cmd) => {
        const ex = exec(cmd);
        const child = ex.child;

        child.stdout.on('data', function(data) {
        console.log(data );
            child.stdin.write("\n");
            process.stdout.clearLine();
            process.stdout.cursorTo(1); 
            process.stdout.clearLine();
            process.stdout.cursorTo(1); 
        if(data.includes("npm run dev")){
            exit();
        }
        });
        child.stderr.on('data', function(data) {
            console.log('stderr: ' + data);
        });
        child.on('close', function(code) {
            console.log('closing code: ' + code);
            child.stdin.write("Press Ctrl+C to exit GLI");
        });
}
const execute = async (cmd, loaderText) => {
    let spinner = null;
    try {
        
        if (loaderText) {
            spinner = createSpinner(loaderText).start()
        }
         ex2(cmd);
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