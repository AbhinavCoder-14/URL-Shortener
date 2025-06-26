import mongoose from "mongoose";



export const urlSchema = new mongoose.Schema({
    shortId:{
        type:String,
        required:true,  
        unique:true,
    },
    redirectUrl:{
        type:String,
        required:true,
        unique:[true,"Shorturl is already Created"]
    },
    visitHistory:[{ timestamp:{type:Number} }],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
}, {timestamp:true});



 
