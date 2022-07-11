module.exports = Object.freeze({
    requirements: {
        "node": "node -v",
        "npm": "npm -v",
        "go": "go version",
        "ng": 'ng version',
        "cargo": "cargo --version",
        "python": "python -V"
    },
    boilerplates: [
        {
            "id": "react",
            "commands": [
                `npx create-react-app {name}` //to create react app
            ],
            "requirements": [
                "node",
                "npm"
            ],
            "options": [
                {
                    "name": "name",
                    "alias": "n",
                    "context": "Name of the react app",
                    "required": true,
                    "booleanOpt": false
                }
            ],
            "details": "Command is used to check the version of React installed in your system",
            "website": "https://reactjs.org",
            "docs": "https://reactjs.org/docs/getting-started.html"
        },
        {
            "id": "vue",
            "commands": [
                "npm init vue@latest" // to start a new vue app
            ],
            "requirements": [
                "node"
            ],
            "details": "Command is used to check the version of vue installed in your system",
            "website": "https://vuejs.org",
            "docs": "https://vuejs.org/guide/introduction.html"
        },
        {
            "id": "angular",
            "commands": [
                "ng new {name}" //to start a new angluar app
            ],
            "requirements": [
                "node",
                "ng"
            ],
            "options": [
                {
                    "name": "name",
                    "alias": "n",
                    "context": "Name of the react app",
                    "required": true,
                    "booleanOpt": false
                }
            ],
            "details": "Command is used to check the version of angluar installed in your system",
            "website": "https://angular.io/",
            "docs": "https://angular.io/docs"
        },
        {
            "id": "go",
            "commands": [
                "go mod init {name}"
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
                "cargo new"
            ],
            "requirements": [
                "cargo"
            ],
            "details": "Command is used to check the version of Golang install in your system",
            "website": "https://www.rust-lang.org/",
            "docs": "https://doc.rust-lang.org/cargo/index.html"
        }
    ]
});