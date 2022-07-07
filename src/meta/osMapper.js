module.exports = Object.freeze({
    osMap: [
        {
            id: "Darwin",
            os: "MacOS",
            commands: {LINK : "open"},
        },
        {
            id: "Linux",
            os: "Linux",
            commands: {LINK : "xdg-open"},
        },
        {
            id: "Windows_NT",
            os: "Windows",
            commands: {LINK : "explorer"},
        }
    ]})