let path=require("path");
let fs=require("fs");

let inputArray=process.argv.slice(2);
//console.log(inputArray);

let filename=inputArray[0];
let content=inputArray[1];

// console.log(filename);
// console.log(content);

let curr_path=process.cwd();
//console.log(curr_path);


let join_path=path.join(curr_path,"abc","def.txt");
//console.log(join_path);

let base_path=path.basename("/Users/A-G/Desktop/Web_Development_course/PEPCODING_WEB_DEV/fileorganiser/PathModule/path.js");
//console.log(base_path);

let extname=path.extname("/Users/A-G/Desktop/Web_Development_course/PEPCODING_WEB_DEV/fileorganiser/PathModule/path.js");
console.log(extname);