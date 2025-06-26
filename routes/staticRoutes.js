import express from "express";
import { URL1 } from "../controller/url.js";

export const staticRoutes = express.Router()

staticRoutes.get("/",async (req,res)=>{
    if (!req.user) return res.redirect("login")
    const allUrls = await URL1.find({})
    res.render("home.ejs",{
        urls:allUrls
    })

})

staticRoutes.get("/signup",(req,res)=>{
    return res.render("signup.ejs")
})

staticRoutes.get("/login",(req,res)=>{
    return res.render("login.ejs")
})


