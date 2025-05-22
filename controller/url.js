import shortid from "shortid";
import mongoose from "mongoose";
// import {URL} from "../models/url.js"

import { urlSchema } from "../models/url.js";

export const URL = mongoose.model("url",urlSchema)



export async function handleGenerateNewShortUrl(req,res) {

    const body = req.body;

    const shortID = shortid.generate()

    if(!body.url) return res.status(400).json({ error:"Url is required"})

    await URL.create({
        shortId: shortID,
        redirectUrl:body.url,
        visitHistory:[],
    });
    return res.json({id:shortID})
    
}

export async function handleGetReq(req,res) {
    console.log("Entered in get request for the server")

    const  shortId = req.params.Sid
    const entry = await URL.findOneAndUpdate(
        {shortId},
        
        {
            $push:{
                visitHistory:{
                    timestamp:Date.now()
                }
            }
        },
    );
    console.log(entry.redirectUrl)
    res.redirect(entry.redirectUrl)

}

