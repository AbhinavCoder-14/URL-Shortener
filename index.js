import express from "express"
import path from "path"

import { connectDB } from "./db/connect.js";
import { URLrouter } from "./routes/url.js";
import { URL } from "./controller/url.js";

const app = express();

const PORT = 8001

app.set("view engine","ejs");
app.set("views",path.resolve("./views"))


app.use(express.json())

connectDB("mongodb://127.0.0.1:27017/url-shortener")
.then(()=>{
    console.log('MongoDB connected')
})

.catch((error)=>{
    console.log("Can't connect to MongoDB")
})

app.use("/url",URLrouter)


app.get("/test",async (req,res)=>{
    const allurls = await URL.find({})
    return res.render("home.ejs")
})

app.listen(PORT,()=>{
    console.log(`Server is listening at PORT ${PORT}`)
})

 