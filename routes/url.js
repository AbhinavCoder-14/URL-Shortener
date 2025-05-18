import express from "express";
import mongoose from "mongoose";

import {handleGenerateNewShortUrl , handleGetReq} from '../controller/url.js'


export const URLrouter = express.Router()




URLrouter.post("/",handleGenerateNewShortUrl)

URLrouter.get("/",handleGetReq)

