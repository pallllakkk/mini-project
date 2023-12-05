const mongoose=require('mongoose');

let reviewSchema=new mongoose.Schema({
    rating:{
        type:Number,
        min:0,
        max:5
    }
});

let Review=mongoose.model('reviews',reviewSchema);
module.exports=Review;