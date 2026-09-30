const express = require("express");
const app = express();
app.use(express.json());
app.get("/api/health", (_,res)=>res.json({status:"ok"}));
app.get("/api/pizzas", (_,res)=>res.json([{id:1,name:"Margherita",price:199}]));
app.post("/api/orders", (req,res)=>res.status(201).json({message:"Order received",order:req.body}));
app.listen(5000,()=>console.log("API running on http://localhost:5000"));
