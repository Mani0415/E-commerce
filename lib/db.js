import mongoose from "mongoose";

const connectDB= async()=>{
    try {
        await mongoose.connect("mongodb+srv://Manikandan:Mani231@cluster0.otwvqem.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Mongodb connected...");
    }    
    catch (error) {
        console.error(error.message
        )        
    }
}
export default connectDB;