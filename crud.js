const express=require('express');

const app=express();

const users=[
    {
        name:"john",
        kidney:[{
            healthy:false
        }]
    }
]
app.use(express.json());
//get data through query parameters(query string)
app.get("/",(req,res)=>{
    //logic
    const johnKidneys=users[0].kidney;
    console.log(johnKidneys);
    const numofKidneys=johnKidneys.length; 
    let numofHealthyKidney=0;
    for(let i=0;i<johnKidneys.length;i++)
    {
        if(johnKidneys[i].healthy){
            numofHealthyKidney++;
        }
    }
    let numofUnhealthykidneys=numofKidneys-numofHealthyKidney;
    res.json({
        numofKidneys,
        numofHealthyKidney,
        numofUnhealthykidneys
    })
})
app.post("/",(req,res)=>{

    const isHealthy=req.body.isHealthy;
    users[0].kidney.push({
        healthy:isHealthy
    })
    res.json({
        msg:"done"
    })
})
function allKidneysHealthy()
{
    let allhealthy=true;
    for(let i=0;i<users[0].kidney.length;i++)
    {
        if(!users[0].kidney[i].healthy)
        {
            allhealthy=false;
        }
    }
    return allhealthy;
}k
app.put("/",(req,res)=>{
    if(!allKidneysHealthy())
    {
        for(let i=0;i<users[0].kidney.length;i++)
        {
            users[0].kidney[i].healthy=true;
        }
        res.json({
            msg:"all are healthy now"
        });

    }   
    else
    {
        res.status(409).json({
            msg:"all are healthy and stll you try to make healthy"
        })
    }
})
app.delete("/",(req,res)=>{
     const newKidney=[];
     if(atleastOneIsUnhealthyKidney())
     {
        for(let i=0;i<users[0].kidney.length;i++)
        {
            if(users[0].kidney[i].healthy)
            {
                newKidney.push({
                    healthy:true
                })
            }
        }
        users[0].kidney=newKidney;
        res.json({
            msg:"done"
        })
    }
    else{
        res.status(411).json({
            msg:"you haven't bad kidneys"
        });
    }
})
function atleastOneIsUnhealthyKidney()
{
    let atleastOneIsUnhealthyKidney=false;
    for(let i=0;i<users[0].kidney.length;i++)
    {
        if(!users[0].kidney[i].healthy)
        {
            atleastOneIsUnhealthyKidney=true;
        }
    }
    return atleastOneIsUnhealthyKidney;
}

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})


