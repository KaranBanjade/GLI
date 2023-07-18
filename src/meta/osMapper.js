module.exports = Object.freeze({
    osMap: [
        {
            id: "Darwin",
            os: "MacOS",
            commands: { LINK: "open" },
            installers: {
                "node": `curl -fsSL https://webinstall.dev/node@stable | bash`,
                "npm" : `npm install -g npm | bash`,
                "ng" : `npm install -g @angular/cli | bash`,
                "go": `curl -fsSL https://webinstall.dev/golang@1.14 | bash`,
                "cargo": `curl https://sh.rustup.rs -sSf | sh`,
            }
        },
        {
            id: "Linux",
            os: "Linux",
            commands: { LINK: "xdg-open" },
            installers: {
                "Node" : `curl -fsSL https://webinstall.dev/node@stable | bash`,
                "npm" : `npm install -g npm | bash`,
                "ng" : `npm install -g @angular/cli | bash`,
                "go" : `curl -fsSL https://webinstall.dev/golang@1.14 | bash`,
                "cargo" : `curl https://sh.rustup.rs -sSf | sh`,
            }
        },
        {
            id: "Windows_NT",
            os: "Windows",
            commands: { LINK: "explorer" },
        }
    ]
});