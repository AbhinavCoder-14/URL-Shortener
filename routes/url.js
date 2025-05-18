import express from "express";
import mongoose from "mongoose";

import {handleGenerateNewShortUrl} from '../controller/url.js'


export const URLrouter = express.Router()




URLrouter.post("/",handleGenerateNewShortUrl)

