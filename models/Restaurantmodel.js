const mongoose=require("mongoose")
const {Usermodel}=require("./Usermodel")
const restaurantSchema=mongoose.Schema({
    name:{type:String, required:true},
    food:{type:[String], required:true},
    price:{type:Number, required:true},
    rating:{type:String, required:true},
    image:{type:String, required:true},
    userID:String
    
})

const Restaurantmodel=mongoose.model("restaurant",restaurantSchema)

module.exports={Restaurantmodel}