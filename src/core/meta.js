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
            else{
                cmd = cmd.replace(`{${key}}`, '');
            }
            console.log(cmd);
            execute(cmd);
        })
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