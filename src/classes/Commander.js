const { program } = require('commander');
const commands = require("../commands");

class Commander {
    constructor() {
        commands.forEach(command => {
            let prg = program.command(command.name);

            if (command.action) {
                prg.action(command.action);
            }

            if (command.subcommands) {
                command.subcommands.forEach(scmd => {
                    let sub = prg.command(scmd.name);
                    if (scmd.options) {
                        scmd.options.forEach(subOpt => {
                            let optStr = `-${subOpt.alias}, `;
                            if (subOpt.booleanOpt) {
                                optStr += `--${subOpt.name}`;
                            } else {
                                optStr += `--${subOpt.name} <${subOpt.context}>`;
                            }
                            if (subOpt.required) {
                                sub.requiredOption(optStr);
                            } else {
                                sub.option(optStr);
                            }
                        });
                    }
                    sub.action(scmd.action);
                });
            }

            if (command.argument) {
                command.argument.map((arg) => {
                    prg.argument(arg[0], arg[1]);
                });
            }
            if (command.option) {
                command.option.map((opt) => {
                    prg.option(opt[0], opt[1]);
                });
            }
        });
        program.parse(process.argv);
    }
}

const Cmd = new Commander();
module.exports = Cmd;