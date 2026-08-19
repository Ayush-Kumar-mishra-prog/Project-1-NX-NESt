import express from 'express'
const app = express()
import dotenv from 'dotenv'
import connectDB from './config/db.js'
dotenv.config()
import path from 'path'
import router from './routes/setting.routes.js'
import cookieParser from 'cookie-parser'

connectDB()
app.use(cookieParser())
app.use("/uploads",express.static(path.join(process.cwd(),"uploads")))
app.use(express.json({limit:"10mb"}))
app.use(express.urlencoded({extended:true}))

const port = process.env.PORT || "8002"

app.get('/',(req,res)=>{
    res.send("Settings server started")
})

app.use('/api/vi/settings',router)

app.listen(port,()=>console.log(`setting server started on port ${port}`))