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
> wiz is a cli tool for generatiing boilerplate for multiple languages and framworks.  
> Whether you need to find source of docs or the website for the language/framework. ```wiz visit``` got your back.  
> Not sure what to start your new project with? Type ```wiz list``` and find list of languages you can start with.
---
### Dependencies
---
> For wiz itself npm is required to begin with. 
> Once wiz is installed, further dependencies will be visible as per required framwork/language, just type ```wiz list -r``` or ```wiz list``` to get list of languages and everything related to them
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
