const { boilerplates } = require("../meta/boilerplate");
const execFunctions = require("../core/meta");
const print = require("../utils/print");

module.exports = {
    name: "make",
    option: ["help", "Makes the specified boilerplate"],
    subcommands: function () {
        let commands = [];
        boilerplates.forEach(bp => {
            commands.push({
                name: bp.id,
                options: bp.options,
                action: function (options) {
                    execFunctions(options, bp.id);
                }
            });
        });
        return commands;
    }(),
    action: function () {
    }
}