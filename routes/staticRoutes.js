import express from "express";
import { URL1 } from "../controller/url.js";

export const staticRoutes = express.Router()

staticRoutes.get("/",async (req,res)=>{
    const allUrls = await URL1.find({})
    res.render("home.ejs",{
        urls:allUrls
    })

})

// staticRoutes


