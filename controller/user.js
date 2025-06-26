import mongoose from "mongoose"
import {v4 as uuidv4} from "uuid"

import {setUser} from "../service/auth.js"
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

    const {email,password} = req.body;

    const user = await User.findOne({email,password})
    if(!user){
        console.log("all set")
        return res.render("login",{error:"Invalid email and password"})
    }

    const token = setUser(user);
    // res.cookie("uid",token)

    return res.json({token})


}
