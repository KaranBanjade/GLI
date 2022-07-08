const Table = require("cli-table");
const boilerplates = require("../meta/boilerplate").boilerplates;
const print = require("../utils/print");
const ObjectStruct = ['Id', 'Commands', 'Requirements', 'Website'];
const table = new Table({
    head: [...ObjectStruct]
});
boilerplates.map((dat) => {
    table.push([
        dat.id,
        dat.commands.join(", "),
        dat.requirements.join(", "),
        dat.website
    ])
})

module.exports = {
    name: "list",
    option: ["help", "List all available commands"],
    action: function () {
        print(table.toString(), "blue");
    }
}