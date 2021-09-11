let fs=require("fs");
let path=require("path");

let inputArr=process.argv.slice(2);

let inputdir=inputArr[0];
let all_entity=fs.readdirSync(inputdir);

let content="";

for(let i=0;i<all_entity.length;i++)
{
    let entityname=all_entity[i];
    console.log(entityname);
    let ename=path.join(inputdir,entityname);
    let stats=fs.lstatSync(ename);
    let isfile=stats.isFile();
    if(isfile)
    {
        let extName=path.extname(ename);
        if(extName==".txt")
        {
            content+=fs.readFileSync(ename);
        }
    }
}

console.log(content);


let summaryFile='C:/Users/A-G/Desktop/Web_Development_course/PEPCODING_WEB_DEV/fileorganiser/summary.txt';
fs.writeFileSync(summaryFile,content);