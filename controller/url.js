import shortid from "shortid";
import mongoose from "mongoose";
// import {URL1} from "../models/url.js"

import { urlSchema } from "../models/url.js";
import axios from "axios";

export const URL1 = mongoose.model("url",urlSchema)


function isValidUrl(url) {
  try {
    const nUrl = new URL(`${url}`); // Built-in Node.js constructor
    return nUrl.protocol === "http:" || nUrl.protocol === "https:";
  } catch (err) {
    return false;
  }
}

async function isReachableUrl(url1) {
  try {
    const response = await axios.head(url1);
    return response.status >= 200 && response.status < 400;
  } catch (error) {
    return false;
  }
}


export async function handleGenerateNewShortUrl(req,res) {

    const body = req.body;
    const url1 = req.body.url.trim(); // Add .trim()

    console.log(`'${isValidUrl(url1)}'`)

    if (isValidUrl(url1)==false){
        return res.status(400).json({error:"Invalid format of URL1"})
    }

    const isreachable = await isReachableUrl(url1)

    if (!isreachable){
        return res.status(400).json({error:"URL1 is not reachable"})
    }
    // console.log(body)

    const shortID = shortid.generate()
    const checkerx = await URL1.findOne({redirectUrl:body.url})

    if(!body.url) return res.status(400).json({ error:"Url is required"})
    else if (checkerx){
        return res.json({
        shortId: checkerx.shortId,
        message: "URL1 already shortened"
      });
    }
    
    await URL1.create({
        shortId: shortID,
        redirectUrl:body.url,
        visitHistory:[],
        createdBy:req.user._id

    });
    return res.json({id:shortID})
    
}

export async function handleGetReq(req,res) {
    // console.log("Entered in get request for the server")

    const  shortId = req.params.Sid
    const entry = await URL1.findOneAndUpdate(
        {shortId},
        
        {
            $push:{
                visitHistory:{
                    timestamp:Date.now()
                }
            }
        },
    );
    // console.log(entry.redirectUrl)
    res.redirect(entry.redirectUrl)

}

export async function getAnalytics(req,res) {

    const shortId = req.params.Sid

    const result = await URL1.findOne({shortId})

    return res.json({totalClicks: result.visitHistory.length,analytics : result.visitHistory})

}