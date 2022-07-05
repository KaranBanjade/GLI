const { Make } = require("../core/maker");
module.exports = {
    name: "make",
    option: ["help", "Makes the specified boilerplate"],
    argument: [['<entity_name>', 'name of the boilerplate to make']],
    action: function (entity_name) {
        Make(entity_name);
    }
}