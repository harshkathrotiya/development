const express=require("express");
const jwt=require("jsonwebtoken");
const jwtpassword="123456";

const app=express();
app.use(express.json());

const ALL_USERS=[
    {
        username:"harsh@gmail.com",
        password:"1232"
    },
    {
        username:"raj@gmail.com",
        password:"2432"
    },
    {
        username:"prakash@gmail.com",
        password:"3212"
    }

];
function userExists(username,password)
{
    let exists=false;
    for(let i=0;i<ALL_USERS.length;i++)
    {
        if(ALL_USERS[i].username==username && ALL_USERS[i].password==password)
        {
            exists=true;
        }
    }
    return exists;
}

app.post('/signin',function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    if(!userExists(username,password))
    {
        return res.status(403).json({
            msg:"user doesn't exist"
        });
    }
    var token =jwt.sign({username:username},"shhh");
    return res.json({
        token,
    });
});


app.get('/users',(req,res)=>{
    const token=req.headers.authorization;
    try{
        const decoded=jwt.verify(token,jwtpassword);
        const username=decoded.username;

    }
    catch(err)
    {
        return res.status(403).json({
            msg:"invalid token"
        });
    }
})
app.listen(3000,()=>
{
    console.log("server is started on port 3000");
});