import mongoose from "mongoose";

const ConnectToMongoDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Connected to MongoDb");
    } catch (error) {
        console.log("Error in Connection to MongoDB",error.message)
    }
}

export default ConnectToMongoDb;