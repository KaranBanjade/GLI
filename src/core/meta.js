const boilerplate = require("../meta/boilerplate").boilerplates;
const execute = require("../utils/execute");
const print = require("../utils/print");
// Actutal execution logic for the desired entity chosen by the user
module.exports = function(meta, id) {
    let bp = boilerplate.find(bp => bp.id == id);
    if(checkRequirements(bp.requirements)) {
        bp.commands.forEach(cmd => {
            Object.keys(meta).forEach(key => {
                if(cmd.includes(`{${key}}`) && meta[key]){   
                    cmd = cmd.replace(`{${key}}`, meta[key]);
                }
            })
            cmd = cmd.replaceAll(/{.*}/g, '');
            execute(cmd);
            return;
            })
    }
    else{
        print("Requirements not met", "red");
    }
    }

    
const checkRequirements = (req) => {
    return true;
}