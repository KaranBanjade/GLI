module.exports = Object.freeze({
    boilerplates: [
        {
            "id": "react",
            "commands": [
                "react -v",
                "npm create-react-app my-app" //to create react app
            ],
            "requirements": [
                "nodejs"
            ],
            "details": "Command is used to check the version of React installed in your system",
            "website": "https://react.org",
            "docs": "https://reactjs.org/docs/getting-started.html"
        },
        {
            "id": "vue",
            "commands": [
                "npm v vue",
                "npm init vue@3" // to start a new vue app
            ],
            "requirements": [
                "nodejs"
            ],
            "details": "Command is used to check the version of vue installed in your system",
            "website": "https://vuejs.org",
            "docs": "https://vuejs.org/guide/introduction.html"
        },
        {
            "id": "angular",
            "commands": [
                "ng version",
                "ng v",
                "ng new myNewApp" //to start a new angluar app
            ],
            "requirements": [
                "nodejs",
                "ng"
            ],
            "details": "Command is used to check the version of angluar installed in your system",
            "website": "https://angular.io/",
            "docs": "https://angular.io/docs"
        },
        {
            "id": "go",
            "commands": [
                "go version",
                "go mod init"
            ],
            "options": [
                {
                    "name": "name",
                    "alias": "n",
                    "context": "Name of the go module",
                    "required": true,
                    "booleanOpt": false
                },
                {
                    "name": "test",
                    "alias": "t",
                    "required": false,
                    "booleanOpt": true
                }
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
        }
    ]
});