import mongoose from "mongoose";

export const dataBaseConnection=()=>{
    const params={
        useNewUrlParser:true,
        useUnifiedTopology:true,
    };
    try {
        mongoose.connect(process.env.MONGO_URL,params);
        console.log("DB is connected");
    } catch (error) {
        console.log(error);
    }
}