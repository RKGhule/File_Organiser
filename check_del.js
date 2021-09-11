let fs=require("fs");
let path=require("path");

console.log(fs.lstatSync("help.js").isFile());