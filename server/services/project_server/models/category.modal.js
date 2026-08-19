import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    full_name:{type:String},
    username:{type:String},
    role:{type:String,enum:["admin","seller","null"], default:null},
    category:{type:String},
     date:{type:String,default:""},
},{timestamps:true})

const Category = mongoose.model("Category",categorySchema)

export default Category