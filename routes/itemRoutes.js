const express=require("express")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const {Restaurantmodel}=require("../models/Restaurantmodel")

const itemRouter=express.Router()


itemRouter.get("/",async(req,res)=>{
    const {q,sort,rating}=req.query
    if(q&&sort){
        const keywordRegex = new RegExp(q, "i");
        if(sort===`rating`){
            let items = await Restaurantmodel.find({ $or: [ { food: keywordRegex }, { name: keywordRegex } ],rating: { $gt: rating }  }).sort({rating:-1})
            res.send({everyitem:items})
        }else if(sort===`asc`){
            let items = await Restaurantmodel.find({ $or: [ { food: keywordRegex }, { name: keywordRegex } ],rating: { $gt: rating }  }).sort({price:1})
            res.send({everyitem:items})
        }else if(sort===`desc`){
            let items = await Restaurantmodel.find({ $or: [ { food: keywordRegex }, { name: keywordRegex } ],rating: { $gt: rating }  }).sort({price:-1})
            res.send({everyitem:items})
        }
    }
    else if(q){
        const keywordRegex = new RegExp(q, "i");
        let items = await Restaurantmodel.find({ $or: [ { food: keywordRegex }, { name: keywordRegex } ],rating: { $gt: rating }  })
        res.send({everyitem:items})
    }else if(sort){
        if(sort===`rating`){
            let items = await Restaurantmodel.find({rating: { $gt: rating } }).sort({rating:-1})
            res.send({everyitem:items})
        }else if(sort===`asc`){
            let items = await Restaurantmodel.find({rating: { $gt: rating } }).sort({price:1})
            res.send({everyitem:items})
        }else if(sort===`desc`){
            let items = await Restaurantmodel.find({rating: { $gt: rating } }).sort({price:-1})
            res.send({everyitem:items})
        }
    }else{
        let items = await Restaurantmodel.find()
        res.send({everyitem:items})
     }
})



itemRouter.get("/personal",async(req,res)=>{
    const userID=req.userID
   const items = await Restaurantmodel.find({userID:userID})
   res.send({everyitem:items})
})

// itemRouter.get("/:sort",async(req,res)=>{
//     // const userID=req.userID

//     const{page}=req.query
//     const spage=5
//     const {sort}=req.params
    
//     console.log(sort)
//         if(sort==1){
//             const employees=await Employeemodel.find().skip( page > 0 ? ( ( page - 1 ) * spage ) : 0 ).limit(5).sort({salary:1})
//             res.send({msg:"success",employees:employees})
//         }else if(sort==-1){
//             const employees=await Employeemodel.find().skip( page > 0 ? ( ( page - 1 ) * spage ) : 0 ).limit(5).sort({salary:-1})
//             res.send({msg:"success",employees:employees})

//         }
    
// })



itemRouter.post("/create",async(req,res)=>{
const{name,food,price,rating,image}=req.body
const userID=req.userID
const new_employee=new Restaurantmodel({
    name,
    food,
    price,
    rating,
    image,
    userID:userID
})

await new_employee.save()
res.send("item added")

   
})

itemRouter.put("/edit/:itemID",async(req,res)=>{
    const updates=req.body
    const userID=req.userID
    const {itemID}=req.params
    const result=await Restaurantmodel.findOneAndUpdate({_id:itemID,userID:userID},updates)
    console.log(userID)
    console.log(result)
    if(result){
        res.send("edited employee")
    }else{
        res.send("something went wrong in editing")
    }
})

itemRouter.delete("/remove/:itemID",async(req,res)=>{
    const {itemID}=req.params
    const userID=req.userID
    const result=await Restaurantmodel.findOneAndDelete({_id:itemID,userID:userID})
    console.log(result)
    if(result){
        res.send("edited deleted")
    }else{
        res.send("something went wrong in deleting")
    }
   
    
})




module.exports={itemRouter}