module.exports = {
    name: "react",
    option:[["--start[type]","help"],["--s[type]","help"],["--st[type]","help"]],
    argument: [['[string]', 'arg',['[string]', 'arg'],['[string]', 'arg']]],
    action: function(str, options) {
        console.log(Object.keys(options));
    }
}