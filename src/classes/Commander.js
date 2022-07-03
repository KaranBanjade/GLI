const { program } = require('commander');
const commands = require("../commands");

class Commander {
    constructor() {
        commands.forEach(command => {
            const arr = ["program"]
            if (command.name)
                arr.push(`.command('${command.name}')`);
            if (command.argument)
                arr.push(`.argument('${command.argument.join(',')}')`);
            if (command.option) {
                command.option.map((opt)=>{
                    arr.push(`.option('${opt[0]}','${opt[1]}')`);
                })
            }
            if (command.action)
                arr.push(`.action(${command.action})`)
            const code = arr.join('');
            eval(code);
        });
        program.parse(process.argv);
    }
}

const Cmd = new Commander();
module.exports = Cmd;