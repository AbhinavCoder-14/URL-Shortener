import express from "express";
import mongoose from "mongoose";



import handleGenerateNewShortUrl from '../controller/url'





export const router = express.Router()




router.post("/",handleGenerateNewShortUrl)

