import express from "express"

import {handleSignUp ,handleLogin} from "../controller/user.js"



export const userRoutes = express.Router()

userRoutes.post("/",handleSignUp)
userRoutes.post("/login",handleLogin)
