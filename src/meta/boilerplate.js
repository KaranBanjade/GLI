module.exports = Object.freeze({
    boilerplates: [
        {
            "id": "javascipt|react",
            "commands": [
                "react -v"
            ],
            "requirements": [
                "nodejs"
            ],
            "details": "Command is used to check the version of React installed in your system",
            "website": "https://react.org",
            "docs": "https://reactjs.org/docs/getting-started.html"
        }
        ,
        {
            "id": "javascipt|vue",
            "commands": [
                "npm v vue"
            ],
            "requirements": [
                "nodejs"
            ],
            "details": "Command is used to check the version of vue installed in your system",
            "website": "https://vuejs.org",
            "docs": "https://vuejs.org/guide/introduction.html"
        }
        ,
        {
            "id": "javascipt|angular",
            "commands": [
                "ng version",
                "ng v",
                "ng new myNewApp" //to start a new angluar app
            ],
            "preReq": [
                "nodejs",
                "ng"
            ],
            "details": "Command is used to check the version of angluar installed in your system",
            "website": "https://angular.io/",
            "docs": "https://angular.io/docs"
        }
        ,
        {
            "id": "go",
            "commands": [
                "go version",
                "go mod init"
            ],
            "requirements": [
                "go"
            ],
            "details": "Command is used to initialize a new go module",
            "website": "https://golang.org",
            "docs": "https://golang.org/doc/"
        },
        {
            "id": "rust",
            "commands": [
                "cargo --version",
                "cargo new"
            ],
            "requirements": [
                "rust",
                "cargo"
            ],
            "details": "Command is used to check the version of Golang install in your system",
            "website": "https://www.rust-lang.org/",
            "docs": "https://doc.rust-lang.org/cargo/index.html"
        },
        {
            "id": "git",
            "commands": [
                "git --version"
            ],
            "requirements": [
                "git"
            ],
            "details": "Command is used to check the version of Git install in your system",
            "website": "https://git-scm.com",
            "docs": "https://git-scm.com/doc/"
        }
    ]
});