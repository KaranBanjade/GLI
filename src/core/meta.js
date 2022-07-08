const boilerplate = require("../meta/boilerplate").boilerplates;
const execute = require("../utils/execute");
// Actutal execution logic for the desired entity chosen by the user
module.exports = function(meta, id) {
    let bp = boilerplate.find(bp => bp.id == id);
            /*
            actual logic to be implemented: 
            1. if meta is empty, then replace all the {string} with empty ''
            2. if meta is not empty check if the {string} in cmd has a pair in meta if not replace with ''
            3. if meta is not empty check if the {string} in cmd has a pair in meta if yes replace with the value in meta

            problem:
                1. unable to use regex to check for pattern matching
            */
    bp.commands.forEach(cmd => {
        Object.keys(meta).forEach(key => {
            if(cmd.includes(`{${key}}`) && meta[key]){   
                cmd = cmd.replace(`{${key}}`, meta[key]);
            }
            else{
                cmd = cmd.replace(`{${key}}`, '');
            }
            console.log(cmd);
            execute(cmd);
        })
        if(JSON.stringify(meta) === '{}'){
            cmd = cmd.replace("{name}", '')
            execute(cmd);
            return;
        }
        // // need to remove the placeholder if there is no value
        // let reg = '/{.*}/'
        // cmd = cmd.replace(reg, '')
        // console.log(cmd);
        // execute(cmd);
    })

}

// commented for now (will use if common logic doesn't work out)

// Object.freeze({
//     "react": function (meta) {

//     },
//     "angular": function (meta) {

//     },
//     "vue": function (meta) {

//     },
//     "go": function (meta) {
        
//     },
//     "rust": function (meta) {

//     }
// });