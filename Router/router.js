const router =require("express").Router()
const Imgschema=require("../Models/Imageschema")
const fs=require('fs')

router.post("/testImages",async (req,res)=>{
    try{
        const imagePath = req.body.image;
const imageBuffer = fs.readFileSync(imagePath);
const res1=new Imgschema({image:imageBuffer})
const savedImg=await res1.save()
res.status(200).json(savedImg)
    }catch(err){
res.status(500).json(err)
    }
})

module.exports=router