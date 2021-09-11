let fs=require("fs");
let path=require("path");

let inputArr=process.argv.slice(2);

let maindir=inputArr[0];
let subdir=inputArr.slice(1);

let maindirpath=path.join(process.cwd(),maindir);

if(!fs.existsSync(maindirpath))
{
    fs.mkdirSync(maindirpath);
}
for(let i=0;i<subdir.length;i++)
{
    let folder=path.join(maindirpath,subdir[i]);
    console.log("folder name",folder);
    if(!fs.existsSync(folder))
    {
        fs.mkdirSync(folder);
    }
    for(j=1;j<=3;j++)
    {
        let module=path.join(folder,`Module${j}`);
        console.log("modules",module);
        fs.mkdirSync(module);
        let filename=path.join(module,"content.md");
        fs.writeFileSync(filename,"#hello Everyone");

    }
}

