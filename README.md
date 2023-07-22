# gli
----
>**A minimalist CLI tool to generate boilerplates/projects of various languages and frameworks**

## Table of contents

### Description

> A cli tool for generating boilerplate for multiple languages/framworks.  
> Whether you need to find source of docs or the website for the language/framework. The ```visit``` command got your back.  
> See list of frameworks/languages we support by running the  ```list``` command.
---
### Dependencies
---
> Gli requires node (and npm obviously) to run. 

---
## Installation
- Open terminal and run
    ```npm i @banjade/gli```
- Run ```gli``` to get started.
### Commands
- ```gli -h``` or ```gli --help``` commands present the help menu for gli.

    >   ![image](https://user-images.githubusercontent.com/40836009/178242562-15c402e7-badb-423e-8e55-dcbe914d9687.png)



- ```gli list``` commnad prints the table of frameworks supported by gli alongwith their requirements and the official websites of the framworks. (Can obviously change in future as we add support for more languages and frameworks)
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
    
    >   https://user-images.githubusercontent.com/40836009/178244921-f80abb2c-5979-418d-9303-3ea3af34c390.mp4


