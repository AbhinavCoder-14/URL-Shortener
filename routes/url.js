import express from "express";
import mongoose from "mongoose";

import {handleGenerateNewShortUrl , handleGetReq, getAnalytics} from '../controller/url.js'


export const URLrouter = express.Router()




URLrouter.post("/",handleGenerateNewShortUrl)

URLrouter.get("/:Sid",handleGetReq)

URLrouter.get("/analytics/:Sid",getAnalytics)

