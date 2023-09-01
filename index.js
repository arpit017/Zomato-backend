const express=require("express")
const {connection}=require("./configure/db")
// const { Usermodel } = require("./models/Usermodel")
const {userRouter}=require("./routes/userRoutes")
const{employeeRouter, itemRouter}=require("./routes/itemRoutes")
const jwt=require("jsonwebtoken")
const cors=require("cors")
require('dotenv').config()

const app=express()
app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Home")
})

const authentication=(req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1]
if(!token){
    return res.send("plz login")
}
jwt.verify(token,process.env.SECRET_KEY , function(err, decoded) {
    if(decoded){
        const {userID}=decoded
        req.userID=userID
        next()
    }else{
        res.send("plz login")
    }
  });


}





app.use("/users",userRouter)
app.use("/items",authentication,itemRouter)


app.listen(process.env.PORT,async(req,res)=>{

    try{
        await connection
        console.log("connected")

    }catch(err){
        console.log("dbs not connected")
        console.log(err)
    }
})
