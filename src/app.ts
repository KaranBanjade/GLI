import {program} from 'commander'
import Inquirer from './Inquirer'
program
    .version("0.0.1")
    .description("CLI for GLI")


program
    .command('list')
    .alias("l")
    .description('Show help')
    .action(function(){
        Inquirer.frameworkChoice();
    })

program
    .command('help')
    .alias("h")
    .description("Show help")
    .action(function(){
        Inquirer.helpChoice();
    })
program.parse(process.argv);