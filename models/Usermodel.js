const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    
    name:String,
    email:String,
    password:String,
    confirm_password:String
    
})

const Usermodel=mongoose.model("user",userSchema)

module.exports={Usermodel}