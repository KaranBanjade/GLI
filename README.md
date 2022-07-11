# gli
----
>**CLI for boilerplates**

[//]: <> (I know exaggeration but jab koi catchphrase aega to daal denge)
## Table of contents

[//]: <> (we could use this to go to required page when and if docs become too much)
---
    
### Version 
---
> *1.0.0*

### Description

[//]: <> (languges ya framework ya kya?)
---
> gli is a cli tool for generating boilerplate for multiple languages/framworks.  
> Whether you need to find source of docs or the website for the language/framework. ```gli visit``` got your back.  
> Not sure what to start your new project with? Type ```gli list``` and find list of framworks/languages you can start with.
---
### Dependencies
---
> For gli itself npm is required to begin with. 
> Once gli is installed, further dependencies will be visible as per required framwork/language, just type ```gli list -r``` or ```gli list``` to get list of frameworks and everything related to them

---
## For developers
### Steps to run
- ```npm i``` to install all the dependencies that we have used
- ```npm link``` This is handy for installing your own stuff, so that you can work on it and test iteratively without having to continually rebuild.  

> Package linking is a two-step process.  

> First, npm link in a package folder with no arguments will create a symlink in the global folder {prefix}/lib/node_modules/<package> that links to the package where the npm link command was executed. It will also link any bins in the package to {prefix}/bin/{name}. Note that npm link uses the global prefix (see npm prefix -g for its value).

- ```gli <command>``` to run gli commands
### Commands
- ```gli -h``` or ```gli --help``` commands present the help menu for gli.

    >   ![image](https://user-images.githubusercontent.com/40836009/178242562-15c402e7-badb-423e-8e55-dcbe914d9687.png)



- ```gli list``` commnad prints the table of frameworks supported by gli alongwith their requirements and the official websites of the framworks.
    >``` 
    $ gli list
┌─────────┬─────────────────────────────┬──────────────┬────────────────────────────┐
│ Id      │ Commands                    │ Requirements │ Website                    │
├─────────┼─────────────────────────────┼──────────────┼────────────────────────────┤
│ react   │ npx create-react-app {name} │ node, npm    │ https://react.org          │
├─────────┼─────────────────────────────┼──────────────┼────────────────────────────┤
│ vue     │ npm init vue@3              │ nodejs       │ https://vuejs.org          │
├─────────┼─────────────────────────────┼──────────────┼────────────────────────────┤
│ angular │ ng new {name}               │ node, ng     │ https://angular.io/        │
├─────────┼─────────────────────────────┼──────────────┼────────────────────────────┤
│ go      │ go version, go mod init     │ go           │ https://golang.org         │
├─────────┼─────────────────────────────┼──────────────┼────────────────────────────┤
│ rust    │ cargo new                   │ rust, cargo  │ https://www.rust-lang.org/ │
    ```
- ```gli visit ``` command is used to visit the docs or the official website of the frameworks provided.  
To visit docs of the language flag ```-d``` is used.
    - ```gli visit [framework name]```
    > ``` 
    $ gli visit go
    Opening go website
    explorer https://golang.org
        ```
    - ```gli visit -d [framwork name]```
    >```
    Opening go docs
    explorer https://golang.org/doc/
    ```
- ``` gli make``` command is used to generate the boilerplate of the desired framwork. Further subcommands are used to specify the actual requirement.
    - ```gli make <framework name> [options] ```
        >``` 
        gli make
        Usage: index make [options] [command]
        Options:
          h                e
          M                a
          -h, --help       display help for command
        Commands:
          react [options]
          vue
          angular
          go [options]
          rust
          help [command]   display help for command
        ```


