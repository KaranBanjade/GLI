const Table = require("cli-table");
const boilerplate = require("../boilerplate")
const ObjectStruct = ['id', 'commands', 'preReq', 'website'];
const table = new Table({
    head: [...ObjectStruct],
    colWidths: [20, 20, 20, 60]
});
module.exports = {
    name: "list",
    option: ["help","List all available commands"],
    action: function() {
        boilerplate.map((dat)=>{
            table.push([
                dat.id,
                dat.commands,
                dat.preReq,
                dat.details
            ])
        })
        console.log(table.toString());
    }
}