//just for making the schema of database

const mongoose=require('mongoose');
const passportLocalmongoose=require('passport-local-mongoose');
const userSchema=new mongoose.Schema({
    email: {type:String, required:true,trim:true},
    username: {type:String, required:true,trim:true}
   })
userSchema.plugin(passportLocalmongoose);

let user=mongoose.model('User',userSchema);
module.exports=user;