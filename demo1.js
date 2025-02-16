const express=require('experss');

const app=express();
const port=3000;

app.get('/',(req,res)=>{
    console.log("hello");
    res.send("hello world");
});

app.listen(port,()=>{
    console.log(`server is runn ing at http://localhost:${port}`);
})