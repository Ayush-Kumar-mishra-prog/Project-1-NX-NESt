import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  full_name:{
    type:String,
    required:true
  },
  role:{
    type:String,
    enum:["user","admin","seller"],
    default:"user"

  },
  token:{
    type:String
  },
  discription:{
    type:String,
    default:""
  },
  status:{
    type:String,
    enum:["approved","pending","rejected"],
    default:"pending"
  },

},{timestamps:true});

const User = mongoose.model('User', userSchema);
export default User;
