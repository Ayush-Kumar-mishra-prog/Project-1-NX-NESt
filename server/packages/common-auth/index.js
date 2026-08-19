import express from 'express'
import dotenv from 'dotenv'
const app = express()
dotenv.config()
const port = process.env.PORT || 3001
app.get('/',(req,res)=>{
    res.json({message:"The package server is started successfully"})

})

app.listen(port,()=>{
    console.log("server started successfully")
})