import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL).then(()=>{
            console.log("db connected")
        })
    } catch (error) {
        console.log("error"+error)
    }
}

export default connectDB