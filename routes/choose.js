const express=require('express');
const Contact=require('../models/Contact'); 
const router=express.Router();


router.get('/choose',(req,res)=>{
    res.render('choose');
});
 router.get('/contact',(req,res)=>{
    res.render('contact-us');
 });
 router.post('/contact',async(req,res)=>{
    let {name,email,phone,desc}=req.body;
    let c=await Contact.create({name,email,phone,desc});
    console.log(c);
    res.redirect('/back');
 })
 router.get('/back',(req,res)=>{
   res.render('back');
 })
module.exports=router;