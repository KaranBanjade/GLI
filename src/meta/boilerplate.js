module.exports = Object.freeze({
    requirements: {
        "node": "node -v",
        "npm": "npm -v",
        "go": "go version",
        "ng": 'ng version',
        "cargo": "cargo --version",
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
                    "context": "Name of the angular app",
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
                "cargo new {name}"
            ],
            "options": [
                {
                    "name": "name",
                    "alias": "n",
                    "context": "Name of the cargo module",
                    "required": true,
                    "booleanOpt": false
                },
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