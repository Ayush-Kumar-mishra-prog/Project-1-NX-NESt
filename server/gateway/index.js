import express from 'express'
const app = express()
app.use(express.json())
import dotenv from 'dotenv'
import proxy from 'express-http-proxy'
dotenv.config()
const port = process.env.PORT || 8000
import cors from 'cors'
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))

app.get('/',(req,res)=>{
    const ip= req.ip
    res.send("Gateway started"+ ip)
    
})

app.use('/auth',proxy(process.env.AUTH_SERVER_URL))
app.use('/settings',proxy(process.env.SETTINGS_SERVER_URL,{parseReqBody:false}))
app.use('/category',proxy(process.env.SETTINGS_CATEGORY_URL,{parseReqBody:false},))

app.listen(port,()=>{
    console.log("server started" + port)
})