const { boilerplates, requirements } = require("../meta/boilerplate");
const execute = require("../utils/execute");
const print = require("../utils/print");
const readline = require('readline');
const { osMap } = require("../meta/osMapper");
const os = require('os');

// Actutal execution logic for the desired entity chosen by the user
module.exports = async function (meta, id) {
    let bp = boilerplates.find(bp => bp.id == id);
    let isReqMet = await checkRequirements(bp.requirements, requirements);
    if (isReqMet) {
        let init = true;
        for (index = 0; index < bp.commands.length; index++) {
            let cmd = bp.commands[index];
            Object.keys(meta).forEach(key => {
                if (cmd.includes(`{${key}}`) && meta[key]) {
                    cmd = cmd.replace(`{${key}}`, meta[key]);
                }
            })
            cmd = cmd.replaceAll(/{.*}/g, '');
            let cmdSuccess = await execute(cmd, `Initializing ${bp.id}`);
            init = init && cmdSuccess;
        };
        if (init) print(`Initialized ${bp.id}`, "green");
    }
    else {
        print("Requirements not met", "red");
    }
}

const checkRequirements = async (commandRequirements, coreRequirements) => {

    for (index = 0; index < commandRequirements.length; index++) {
        try {
            let req = commandRequirements[index];
            let cmdSuccess = await execute(coreRequirements[req], `Checking for ${req}`);
            if (!cmdSuccess) {
                await new Promise(resolve => {

                    const rl = readline.createInterface({
                        input: process.stdin,
                        output: process.stdout,
                    });

                    rl.question(`Do you want to install ${req}? (y/n) `, async (resp) => {
                        if (resp.toLowerCase() === 'y') {
                            // install requirement
                            cmdSuccess = await requirementsInstaller([req]);
                            if (cmdSuccess) {
                                print(`${req} installed`, "green");
                            }
                            else {
                                print(`${req} installation failed`, "red");
                            }
                        }
                        rl.close(); 
                    });
                });
                return cmdSuccess;
            }
        } catch (err) {
            r1.close();
            return false;
        }
    }
    return true;
};

const requirementsInstaller = async (requirements) => {
    const OS = osMap.find(OS => OS.id == os.type());
    for (index = 0; index < requirements.length; index++) {
        try {
            let req = requirements[index];
            let cmdSuccess = await execute(OS.installers[req], `Installing ${req}`);
            if (!cmdSuccess) return cmdSuccess;
            else {
                print(`Installed ${req}`, "green");
                return true;
            }
        } catch (err) {
            print(`Failed to install ${req}`, "red");
            return false;
        }
    };
    return true;
}