//express,routing  and middle ware

const express=require('express');

const app =express();
//create routes it means url
app.get('/',(req,res)=>{
    res.send("hello world");
})


app.listen(3000,()=>{
    console.log("server started");
})