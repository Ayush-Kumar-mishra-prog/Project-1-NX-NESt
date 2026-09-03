import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js'
import path from 'path'
import catRouter from './routers/category.router.js'
import projectRouter from './routers/project.routes.js'
dotenv.config()
const app = express()
app.use(cookieParser())
const port = process.env.PORT || 8003
connectDB()
app.use("/uploads",express.static(path.join(process.cwd(),"uploads")))
app.use(express.json({limit:"100mb"}))
app.use(express.urlencoded({extended:true,limit:"100mb"}))

app.get('/',(req,res)=>{
    res.send("Project server statrted")
})

app.use('/api/v1/categoryRouter',catRouter)
app.use('/api/v1/project',projectRouter)

app.listen(port,()=>{
    console.log("server started on port" + port)
})
