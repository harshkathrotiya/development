const express=require('express');

const app=express();
let numOfRequests=0;
function calculate_requests(req,res,next){
    numOfRequests++;
    console.log(numOfRequests);
    next();
}
app.use(calculate_requests);
app.use(express.json());
app.post('/health-checkup',(req,res)=>{
        res.json({
            msg:"hi there "
        })
});
app.get('/health-checkup2',(req,res)=>{
    
    res.json({
        msg:"highere health 2"
    })
});
app.listen(3000,()=>{
    console.log("server started on port 3000");
})