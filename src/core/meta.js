const boilerplate = require("../meta/boilerplate").boilerplates;
// const { exec } = require("");
// Actutal execution logic for the desired entity chosen by the user
module.exports = function(meta, id) {
    let bp = boilerplate.find(bp => bp.id == id);

    // main execution logic
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