import express from express

import {handleSignUp ,handleLogin} from "../controller/user.js"



export const userRoutes = express.Routes()

userRoutes.post("/",handleSignUp)
userRoutes.post("/login",handleLogin)
