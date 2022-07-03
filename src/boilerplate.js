const boilerplate = [   
    {
    "id": "javascipt|react",
    "commands": [
        "react -v"
    ],
    "preReq": [
        "nodejs"
    ],
    "details":"Command is used to check the version of React installed in your system",
    "website": "https://react.org",
    "docs": "https://reactjs.org/docs/getting-started.html"
    }
    ,
    {
    "id": "javascipt|vue",
    "commands": [
        "npm v vue"
    ],
    "preReq": [
        "nodejs"
    ],
    "details":"Command is used to check the version of vue installed in your system",
    "website": "https://vuejs.org",
    "docs": "https://vuejs.org/guide/introduction.html"
    }
    ,
    {
        "id": "go",
        "commands": [
            "go version"
        ],
        "preReq": [
            "go"
        ],
        "details":"Command is used to check the version of Golang install in your system",
        "website": "https://golang.org",
        "docs": "https://golang.org/doc/"
    },
    {
        "id": "git",
        "commands": [
            "git --version"
        ],
        "preReq": [
            "git"
        ],
        "details":"Command is used to check the version of Git install in your system",
        "website": "https://git-scm.com",
        "docs": "https://git-scm.com/doc/"
    }
]
module.exports = boilerplate;