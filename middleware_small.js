const express=require('express');
const zod=require('zod');
const app=express();

app.use(express.json());

const schema=zod.array(zod.number());
app.post('/health-chekup',(req,res)=>{
    const kidney=req.body.kidney;
    const response=schema.safeParse(kidney);
    const kidneyLength=kidney.length;
    res.send({
        response
    })

})


app.listen(3000,()=>{
    console.log("server is running on port 3000");
})
