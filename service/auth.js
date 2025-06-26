
    import jwt from "jsonwebtoken"


    const secret = "Abhinav123@#"

    export function setUser(user){

        return jwt.sign(
            {
                _id:user._id,
                email:user.email,
            }
            ,secret)
    }



    export function getUser(token){
        if(!token) return null;
        try{

            return jwt.verify(token,secret)
        }
        catch{
           return "wrong token" 
        }
        
    }


