const colors = require('colors');
module.exports = function (msg, color) {
    if (color && colors[color]) {
        msg = colors[color](msg);
    }
    console.log(msg);
}