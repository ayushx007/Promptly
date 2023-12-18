import mongoose from "mongoose";

let isConnecated = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    if (isConnecated) {
        console.log("MongoDB Already Connected!");
        return;
    }
    else {
        try {
            await mongoose.connect(process.env.MONGODB_URI, {
                dbName: "share_prompt",
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            isConnecated = true;
            console.log("MongoDB Connected!")
        } catch (error) {
            console.log(error);
        }
    }
}