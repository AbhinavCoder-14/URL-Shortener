import shortid from "shortid";
import mongoose from "mongoose";
// import {URL} from "../models/url.js"

import { urlSchema } from "../models/url.js";

const URL = mongoose.model("url",urlSchema)



export async function handleGenerateNewShortUrl(req,res) {

    const body = req.body;

    const shortID = shortid.generate()

    if(!body.url) return res.status(400).json({ error:"Url is required"})

    await URL.create({
        shortid: shortID,
        redirectURL:body.url,
        visitHistory:[],
    });
    return res.json({id:shortID})
    
}

export async function handleGetReq(req,res) {
    console.log("Entered in get request for the server")

    const showURL = URL.find({})
    return res.json(showURL)
}