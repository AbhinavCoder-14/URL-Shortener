import { getUser } from "../service/auth.js"

export function checkForAuthentication(req,res,next){
    req.user = null
    
    const  tokenCookie = req.cookies?.token
    if (!tokenCookie) return next();
    const user = getUser(tokenCookie);
    req.user = user
    return next()
    

}

export function restrictTo(roles=[]){
    return function(req,res,next){
        if(!req.user) return res.redirect("/login")
        
        if(!roles.includes(req.user.role)) return res.end("unauthorizied")
    
        return next()
    }
}

