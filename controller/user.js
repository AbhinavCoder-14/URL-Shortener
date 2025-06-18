import mongoose from "mongoose"
import { userSchema } from "../models/user.js"


const User = mongoose.model("user",userSchema)



export async function handleSignUp(req,res) {

    const {name,email,password} = req.body
    await User.create({
        name,
        email,
        password,

    });
    return res.redirect("/")
}




export async function handleLogin(req,res) {

    const {email,password} = req.body
    const idenUser = await User.findOne({
        email , password
    })
    if(!idenUser){
        return res.render("login.ejs",{error:"invalid user name or password"})
    }

    return res.render("/")
}