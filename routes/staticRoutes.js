import express from "express";
import { URL1 } from "../controller/url.js";
import {User} from "../controller/user.js"
import { restrictTo } from "../middlewares/auth.js";

export const staticRoutes = express.Router()

staticRoutes.get("/",restrictTo(['NORMAL','ADMIN']),async (req,res)=>{
    // if (!req.user) return res.redirect("login")
    const allUrls = await URL1.find({createdBy:req.user._id})
    const user = await User.find({email: req.user.email})
    res.render("home.ejs",{
        urls:allUrls,
        name:user[0].name
    })

})

staticRoutes.get("/signup",(req,res)=>{
    return res.render("signup.ejs")
})

staticRoutes.get("/login",(req,res)=>{
    return res.render("login.ejs")
})


staticRoutes.get("/admin/urls",restrictTo(["ADMIN"]),async (req,res)=>{
    const allUrls = await URL1.find()
    const user = await User.find({email: req.user.email})
    res.render("home.ejs",{
        urls:allUrls,
        name:user[0].name
    })

})  


