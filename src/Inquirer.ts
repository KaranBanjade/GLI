import * as inquirer from 'inquirer'

class InquirerClass {
    constructor(){
        console.log("Inquirer Class Object Created");
    }
    frameworkChoice(){
        inquirer
        .prompt({
            name:"framework",
            type: "list",
            message: "Choose Framework",
            choices: ["React", "Express", "Angular"]
        })
        .then((answers: any) => {
            console.log(answers);
        })
    }
    helpChoice(){
        inquirer
        .prompt({
            name:"help",
            type: "list",
            message: "Choose Help",
            choices: ["List", "Help"]
        })
        .then((answers: any) => {
            console.log(answers);
        })
    }   
}
const Inquirer  = new InquirerClass();
export default Inquirer;
