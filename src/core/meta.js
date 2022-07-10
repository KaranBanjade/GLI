const { boilerplates, requirements } = require("../meta/boilerplate");
const execute = require("../utils/execute");
const print = require("../utils/print");
// Actutal execution logic for the desired entity chosen by the user
module.exports = async function (meta, id) {
    let bp = boilerplates.find(bp => bp.id == id);
    let isReqMet = await checkRequirements(bp.requirements, requirements);
    if (isReqMet) {
        bp.commands.forEach(cmd => {
            Object.keys(meta).forEach(key => {
                if (cmd.includes(`{${key}}`) && meta[key]) {
                    cmd = cmd.replace(`{${key}}`, meta[key]);
                }
            })
            cmd = cmd.replaceAll(/{.*}/g, '');
            execute(cmd, `Initializing ${bp.id}`);
            return;
        })
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
            if (!cmdSuccess) return cmdSuccess;
        } catch (err) {
            return false;
        }
    };
    return true;
}