const express= require("express");
const cors=require("cors");

const app=express();
app.use(cors());
app.use(express.json());

let serverstate="Running";

app.get("/state",(req,res)=>{
    res.json({state:serverstate})
})

app.post("/state",(req,res)=>{
    serverstate=req.body.state;
    res.json({message:"state updated",state:serverstate})
})

app.listen(5000,()=>{
    console.log("Backend running on port 5000")
})