let fs=require("fs");
const { builtinModules } = require("module");
let path=require("path");

"├──"
"└──"

function treeFn1(srcPath){
    let basename=path.basename(srcPath);
    console.log(basename);
    console.log("\t"+"└──");
    let content=fs.readdirSync(srcPath);
    let all_Entity="";
    for(let i=0;i<content.length;i++)
    {
        let filename=path.join(srcPath,content[i]);
        if(fs.lstatSync(filename).isFile())
        {
        all_Entity+="\n\t"+"├──"+content[i];
        }
        else
        {
            treeFn1(filename);
        }

    }
    console.log(all_Entity);

};

module.exports=
{
    treeFn:treeFn1
}