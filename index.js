import express from "express"
import path from "path"

import { connectDB } from "./db/connect.js";
import { URLrouter } from "./routes/url.js";
import { URL1 } from "./controller/url.js";
import {staticRoutes} from "./routes/staticRoutes.js"
import { userRoutes } from "./routes/user.js";
import cookieParser from "cookie-parser";

import { restrictToLoggedinUserOnly, checkAuth } from "./middlewares/auth.js";
import { ftruncate } from "fs";

const app = express();

const PORT = 8001

app.set("view engine","ejs");

app.set("views",path.resolve("./views"))


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

connectDB("mongodb://127.0.0.1:27017/url-shortener")
.then(()=>{
    console.log('MongoDB connected')
})

.catch((error)=>{
    console.log("Can't connect to MongoDB")
})

app.use("/url",restrictToLoggedinUserOnly,URLrouter)
app.use("/",checkAuth,staticRoutes)
app.use("/user",userRoutes)





app.listen(PORT,()=>{
    console.log(`Server is listening at PORT ${PORT}`)
})

 