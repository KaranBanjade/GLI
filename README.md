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
    >![image](https://user-images.githubusercontent.com/40836009/178242791-551456a7-1061-4019-97b6-6008fd871af8.png)

- ```gli visit ``` command is used to visit the docs or the official website of the frameworks provided.  
To visit docs of the language flag ```-d``` is used.
    - ```gli visit [framework name]```
        > ![image](https://user-images.githubusercontent.com/40836009/178242841-1e5ea08a-efb8-420e-b578-8f9130b39790.png)

    - ```gli visit -d [framwork name]```
        >   ![image](https://user-images.githubusercontent.com/40836009/178242891-06997cd0-94dc-42a0-9dfc-cb7ca2854c40.png)

- ``` gli make``` command is used to generate the boilerplate of the desired framwork. Further subcommands are used to specify the actual requirement.
    > ![image](https://user-images.githubusercontent.com/40836009/178242960-5316a3ff-f1d8-4560-971b-5d9f114f9af1.png)

    - ```gli make <framework name> [options] ```
        > https://user-images.githubusercontent.com/40836009/178244921-f80abb2c-5979-418d-9303-3ea3af34c390.mp4


