const express=require("express");
const cors=require("cors");
const app=express();
app.use(cors());

app.get("/sum",(req,res)=>{
    let a =parseInt(req.query.a);
    let b=parseInt(req.query.b);
    const ans=a+b;
    res.send(ans.toString());
})
app.get("/interest",(req,res)=>{
    let p=parseInt(req.query.principle);
    let r=parseInt(req.query.rate);
    let n=parseInt(req.query.time);
    const ans=(p*r*n)/100;
    res.send(ans.toString());
})
app.listen(3000,()=>{
    console.log("server is started on port 3000");
})
