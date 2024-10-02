import mongoose from 'mongoose'

const URI='mongodb://localhost:27017/RoyalRasoi'

const connectToDb = async()=>{
    mongoose.connect((URI)).then((conn)=>{
        console.log(`MongoDb is connected :${conn.connection.host}`);
    }).catch((err)=>{
        console.log(err);
        process.exit(1)
        
    })
}

export default connectToDb;