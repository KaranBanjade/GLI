const boilerplate = require("../meta/boilerplate").boilerplates;
const execute = require("../utils/execute");
// Actutal execution logic for the desired entity chosen by the user
module.exports = function(meta, id) {
    let bp = boilerplate.find(bp => bp.id == id);
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