const express = require("express");
const Pizza = require("../models/pizzaModel")
const router = express.Router()

router.get("/getallpizzas", async(req, res)=>{
try{
const pizzas = await Pizza.find({});
res.send(pizzas);
}catch(err){
return res.status(400).json({message:err});
}



});
module.exports = router;