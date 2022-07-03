const { program } = require('commander');
const commands = require("../commands");

class Commander {
    constructor() {
        commands.forEach(command => {
            program.command(command.name).action(command.action);
        });
        program.parse(process.argv);
    }
}

const Cmd = new Commander();
module.exports = Cmd;