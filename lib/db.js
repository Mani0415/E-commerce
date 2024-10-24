import mongoose from "mongoose";

const connectDB= async()=>{
    try {
        await mongoose.connect(process.env.DB);
        console.log("Mongodb connected...");
    }    
    catch (error) {
        console.error(error.message
        )        
    }
}
export default connectDB;