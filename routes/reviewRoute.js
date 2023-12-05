const express=require('express');
const Review=require('../models/Review');
// const Review=require('./models/Review');
const router=express.Router();

router.get('/review' , async (req,res)=>{
    // let allreviews = await review.find();
    res.render('rating')
});
router.post('/review',async (req,res)=>{
    let {rating}=req.body;
    if(rating){
        let rev=await Review.create({rating}); 
        console.log(rev);
        console.log(rating);
    }
    
    
});

module.exports=router;