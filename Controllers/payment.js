require('dotenv').config();
const formidable=require('formidable');
const {v4:uuidv4}=require('uuid');
const https=require('https');
// const paytmChecksum=require('./paytmChecksum');
exports.payment=(req,res)=>{
    const {email,amount}=req.body;

}