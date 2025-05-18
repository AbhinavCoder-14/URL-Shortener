import express from "express"

import { connectDB } from "./controller/db/connect.js";
import { URLrouter } from "./routes/url.js";


const app = express();

const PORT = 8001

app.use(express.json())

connectDB("mongodb://localhost/27017/url-shortener")
.then(()=>{
    console.log('MongoDB connected')
})

.catch((error)=>{
    console.log("Can't connect to MongoDB")
})

app.use("/url",URLrouter)



app.listen(PORT,()=>{
    console.log(`Server is listening at PORT ${PORT}`)
})
