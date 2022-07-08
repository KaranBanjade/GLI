const print = require("../utils/print")
const { exec } = require("child_process");

const execute = (cmd) => {
    const process = exec(cmd)

    process.stdout.on('data', (data) => {
        print(cmd + ":  " +data.toString(),'green')
    })

    process.stderr.on('data', (data) => {
        print(data.toString(),"red")
    })

    process.on('exit', (code) => {
        if(code != 0)
            print('child process exited with code ' + code.toString(), 'blue')
    })
}

module.exports = execute;