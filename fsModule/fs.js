let fs=require("fs");
let path=require("path");
// let content=fs.readFileSync("a.txt");

// console.log(content+'');

// fs.writeFileSync("abc.txt","I am not a body");
// fs.appendFileSync("abc.txt","I am not even mind");

// fs.unlinkSync("abc.txt");

// //directories to make folder
// //fs.mkdirSync("PathModules");

// // to delete directory
// //.rmdirSync("PathModules");

// //to check file exists or not
// let val=fs.existsSync("a1.txt");
// console.log(val);

// let statusobj=fs.lstatSync("a.txt");
// console.log(statusobj.isFile());
// console.log(statusobj.isDirectory());

// //to see data of the directory
// let arr=fs.readdirSync("chk_list");
// console.log(arr);

let srcPath='C:/Users/A-G/Desktop/Web_Development_course/PEPCODING_WEB_DEV/fileorganiser/fsModule/f1.txt';
let destPath='C:/Users/A-G/Desktop/Web_Development_course/PEPCODING_WEB_DEV/fileorganiser/fsModule/f2.txt';

let tobecopied=path.basename(srcPath);
let dest=path.join('C:/Users/A-G/Desktop/Web_Development_course/PEPCODING_WEB_DEV/fileorganiser/fsModule/chk_list',tobecopied);
console.log(dest);

fs.copyFileSync(srcPath,dest);