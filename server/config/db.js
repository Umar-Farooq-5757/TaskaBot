import mongoose from "mongoose";

const connectDB = ()=>{
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/TaskaBot`).then(()=>{
            console.log('connected to database.')
        })
    } catch (err) {
        console.log(err)
    }
}
export default connectDB