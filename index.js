import express from "express"

import { connectDB } from "./db/connect";


const app = express();

PORT = 8001


connectDB("mongodb://localhost/27017/url-shortener")
.then(()=>{
    console.log('MongoDB connected')
})

.catch((error)=>{
    console.log("Can't connect to MongoDB")
})

app.use()



app.listen(POST,()=>{
    console.log(`Server is listening at PORT ${8000}`)
})
