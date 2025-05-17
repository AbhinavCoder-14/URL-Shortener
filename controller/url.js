import shortid from "shortid";

import { urlSchema } from "../models/url";
const URL = mongoose.model("url",urlSchema)


async function handleGenerateNewShortUrl(req,res) {

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