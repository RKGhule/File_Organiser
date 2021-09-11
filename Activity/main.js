let treeObj=require("./command/tree.js");
let helpObj=require("./command/help.js");
let organiseObj=require("./command/organise.js");

let inputArr=process.argv.slice(2);
let command=inputArr[0];
let path=inputArr[1];

switch(command)
{
    case "help":
        helpObj.helpFn();
        break;
    case "tree":
        treeObj.treeFn(path);
        break;
    case "organise":
        organiseObj.organizeFn(path);
        break;
    default:
        console.log("Invalid Command");
        break;
}