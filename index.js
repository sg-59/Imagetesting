const express=require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')
const dotenv=require('dotenv')


app.use(cors())
dotenv.config()

const imgRouter=require("./Router/router")

mongoose.connect(process.env.Mongo).then(()=>{
    console.log("data base are connected");
})

app.use(express.json())
app.use("/api",imgRouter)

app.listen(3000,()=>{
    console.log("port is 3000 is connected");
})