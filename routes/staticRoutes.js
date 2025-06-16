import express from "express";
import { URL } from "../controller/url.js";

export const staticRoutes = express.Router()

staticRoutes.get("/",async (req,res)=>{
    const allUrls = await URL.find({})
    res.render("home.ejs",{
        urls:allUrls
    })


    




})


