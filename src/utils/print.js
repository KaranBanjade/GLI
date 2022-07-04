const colors = require('colors');
module.exports = function (msg, color) {
    console.log(colors[color](msg));
}