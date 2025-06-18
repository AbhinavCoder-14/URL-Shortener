import express from "express"
import path from "path"

import { connectDB } from "./db/connect.js";
import { URLrouter } from "./routes/url.js";
import { URL1 } from "./controller/url.js";
import {staticRoutes} from "./routes/staticRoutes.js"
import { userRoutes } from "./routes/user.js";

const app = express();

const PORT = 8001

app.set("view engine","ejs");

app.set("views",path.resolve("./views"))


app.use(express.json())
app.use(express.urlencoded({extended:false}))

connectDB("mongodb://127.0.0.1:27017/url-shortener")
.then(()=>{
    console.log('MongoDB connected')
})

.catch((error)=>{
    console.log("Can't connect to MongoDB")
})

app.use("/url",URLrouter)
app.use("/",staticRoutes)
app.use("/user",userRoutes)


// app.get("/sdf",async (req,res)=>{
//     const allurls = await URL1.find({})
//     return res.render("home.ejs",{
//         urls:allurls,
//         name :"test"
//     })
// })




app.listen(PORT,()=>{
    console.log(`Server is listening at PORT ${PORT}`)
})

 