const meta = require("./meta");
const print = require("../utils/print");

module.exports = {
    Make: function(entity_name) {
        if(!meta[entity_name]) {
            print(`${entity_name} is either invalid or not supported`, "red");
            return;
        }

        meta[entity_name]();
    }
}