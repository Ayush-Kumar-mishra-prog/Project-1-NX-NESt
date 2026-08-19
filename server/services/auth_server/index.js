import express from "express";

const app = express();
app.use(express.json());
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/user.routes.js";
import cookieParser from 'cookie-parser'
dotenv.config();
const port = process.env.PORT || 8001;
connectDB()
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("Auth server started");
});

//routers

app.use('/api/v1/auth',router)

app.listen(port, () => {
  console.log("server started");
});
