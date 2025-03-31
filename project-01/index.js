const express=require("express");

const app=express();
const PORT=8000;
//routes


app.listen(PORT,()=>{ 
    console.log(`server started on port ${PORT}`);
})