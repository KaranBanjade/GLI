# wiz
----
>**CLI for everything**

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
> wiz is a cli tool for generating boilerplate for multiple languages and framworks.  
> Whether you need to find source of docs or the website for the language/framework. ```wiz visit``` got your back.  
> Not sure what to start your new project with? Type ```wiz list``` and find list of framworks you can start with.
---
### Dependencies
---
> For wiz itself npm is required to begin with. 
> Once wiz is installed, further dependencies will be visible as per required framwork/language, just type ```wiz list -r``` or ```wiz list``` to get list of frameworks and everything related to them
---
### Directories
---
> See folders to learn about where wiz puts stuff.
In particular, wiz has two modes of operation:
- local mode: wiz installs packages into the current project directory, which defaults to the current working directory. Packages install to ./node_modules, and bins to ./node_modules/.bin.
- global mode: wiz installs packages into the install prefix at $npm_config_prefix/lib/node_modules and bins to $npm_config_prefix/bin.

[//]: <> (Directories field is copied from npm, the final product will deciede the )


> Local mode is the default. Use -g or --global on any command to run in global mode instead.
---
## For developers
### Steps to run
- ```npm i``` to install all the dependencies that we have used
- ```npm link``` This is handy for installing your own stuff, so that you can work on it and test iteratively without having to continually rebuild.  

> Package linking is a two-step process.  

> First, npm link in a package folder with no arguments will create a symlink in the global folder {prefix}/lib/node_modules/<package> that links to the package where the npm link command was executed. It will also link any bins in the package to {prefix}/bin/{name}. Note that npm link uses the global prefix (see npm prefix -g for its value).

- ```wiz <command>``` to run wiz commands
### Commands
- ```wiz -h``` or ```wiz --help``` commands present the help menu for wiz.

    > ``` 
    $ wiz help
    Usage: index [options] [command]
    Options:
    -h, --help                display help for command
    Commands:
      list [options]
      make [options]
      visit [options] [string]
      help [command]            display help for command
    ```
- ```wiz list``` commnad prints the table of frameworks supported by wiz alongwith their requirements and the official websites of the framworks.
    >``` 
    $ wiz list
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
- ```wiz visit ``` command is used to visit the docs or the official website of the frameworks provided.  
To visit docs of the language flag ```-d``` is used.
    - ```wiz visit [framework name]```
    > ``` 
    $ wiz visit go
    Opening go website
    explorer https://golang.org
        ```
    - ```wiz visit -d [framwork name]```
    >```
    Opening go docs
    explorer https://golang.org/doc/
    ```
- ``` wiz make``` command is used to generate the boilerplate of the desired framwork. Further subcommands are used to specify the actual requirement.
    - ```wiz make <framework name> [options] ```
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


