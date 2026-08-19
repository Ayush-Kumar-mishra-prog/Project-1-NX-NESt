import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
dotenv.config()
const app = express()
const port =process.env.PORT || 8003
connectDB()
app.use(express.json({limit:"5mb"}))

app.get('/',(req,res)=>{
    res.send("Project server statrted")
})

app.listen(port,()=>{
    console.log("server started on port" + port)
})
