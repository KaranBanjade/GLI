module.exports = {
    name: "react",
    option:[["--start[type]","help"],["--s[type]","help"],["--st[type]","help"]],
    argument: ['[string]', 'arg'],
    action: function(str, options) {
        console.log(Object.keys(options));
    }
}

/*
DIDN'T REMOVE THIS FILE TO RETAIN CONTENT (REMOVE AS SOON AS THE CODE IS REUSED)
*/