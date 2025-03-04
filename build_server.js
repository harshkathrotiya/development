const http=require('http');
const fs = require('fs');

const log = `${Date.now()}: New Req received\n`;
const  server=http.createServer((req,res)=>{ 
   const log=`${Date.now()}: New Req received`;
   fs.appendFile('./log.txt',log,(err,data)=>{
        res.end("hekllo from server again");
   });
    console.log(req.headers);
    console.log("new request received");
    res.end("hello from server");
     

});

server.listen(8000,()=>{
    console.log("server started");
});

