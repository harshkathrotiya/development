const fs=require('fs');
//sync
//fs.writeFileSync('./text.txt',"hello world");
//async
//fs.writeFile('./text.txt',"hello world async",(err)=>{});
//const result=fs.readFileSync('./contacts.txt','utf-8' );
//console.log(result);
fs.readFile('./contacts.txt','utf-8',(err,result)=>{
    if(err)
    {
        console.log("err",err);
    }else{
        console.log(result);
    }
});
fs.appendFileSync('/contacts.txt',new Date().getDate().toLocaleString());

