const { program } = require('commander');
const commands = require("../commands");

class Commander {
    constructor() {
        commands.forEach(command => {
            const arr = ["program"]
            if (command.name)
                arr.push(`.command('${command.name}')`);
            if (command.argument){
                command.argument.map((arg)=>{
                    arr.push(`.argument('${arg[0]}','${arg[1]}')`);
                })
            }
            if (command.option) {
                command.option.map((opt)=>{
                    arr.push(`.option('${opt[0]}','${opt[1]}')`);
                })
            }
            const code = arr.join('');
            
            eval(code)
                .action(command.action);
        });
        program.parse(process.argv);
    }
}

const Cmd = new Commander();
module.exports = Cmd;