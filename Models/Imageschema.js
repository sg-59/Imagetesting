const mongoose=require('mongoose')

const Imageschema=new mongoose.Schema({
    image: { type: Buffer, required: true }
},{timestamps:true})

module.exports=mongoose.model("Imagetesing",Imageschema)