// const Table = require("cli-table");
// const boilerplates = require("../meta/boilerplate").boilerplates;
// const ObjectStruct = ['id', 'commands', 'preReq', 'website'];
// const table = new Table({
//     head: [...ObjectStruct],
//     colWidths: [20, 20, 20, 60]
// });
const Table = require("cli-table");
const boilerplates = require("../meta/boilerplate").boilerplates;
const ObjectStruct = ['id', 'commands', 'preReq', 'website'];
const table = new Table({
    head: [...ObjectStruct],
    colWidths: [20, 20, 20, 60]
});
boilerplates.map((dat)=>{
    table.push([
        dat.id,
        dat.commands,
        dat.preReq,
        dat.website
    ])
})

module.exports = {
    name: "list",
    option: ["help","List all available commands"],
    action: function() {
        console.log(table.toString());
    }
}