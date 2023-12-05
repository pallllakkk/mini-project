const mongoose=require('mongoose');

let contactSchema=new mongoose.Schema({
name:{
    type:String,
    required:true,
    trim:true
},
email:{
    type:String,
    required:true,
    trim:true
},
phone:{
    type:Number,
    required:true,
    trim:true,
    min:10
},
desc:{
    type:String,
    required:true,
    trim:true
},

});

let Contact=mongoose.model('contact',contactSchema);
module.exports=Contact;