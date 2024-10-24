import mongoose from "mongoose";

const schema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,    
    },
    role:{
        type:String,
        default:"user",
    },
    password:{
        type:String,
        required:true,
    }
})
export const User=mongoose.model("User",schema);