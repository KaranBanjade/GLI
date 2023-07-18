const { boilerplates, requirements } = require("../meta/boilerplate");
const { osMap } = require("../meta/osMapper");
const execute = require("../utils/execute");
const print = require("../utils/print");
const os = require('os');
const readline = require('readline');
const { exit } = require("process");

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

        if (init) {
            print(`Initialized ${bp.id}`, "green");
            exit(0);
        } else {
            print(`Failed to initialize ${bp.id}`, "red");
        }
    } else {
        print("Requirements not met", "red");
    }
}


// to create streams for reading user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const checkRequirements = async (commandRequirements, coreRequirements) => {
    const OS = osMap.find(OS => OS.id == os.type());

    async function processRequirement(index) {
        if (index >= commandRequirements.length) return true;

        const req = commandRequirements[index];
        let cmdSuccess = await execute(coreRequirements[req], `Checking for ${req}`);

        // promp generation if requirement not met
        if (!cmdSuccess) {
            print(`${req} not found`, "blue");

            await new Promise(resolve => {
                rl.question(`Do you want to install ${req}? (y/n) `, async (resp) => {
                    if (resp.toLowerCase() === 'y') {
                        print(`Installing ${req}`, "yellow");
                        // install requirement
                        cmdSuccess = await requirementsInstaller([req]);
                    }
                    resolve(); 
                });
            });
        }


        if (!cmdSuccess) return cmdSuccess;
        // if requirement is met, check for next requirement
        return processRequirement(index + 1); 
    }

    return processRequirement(0); 
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
            return false;
        }
    };
    return true;
}