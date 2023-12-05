const express=require('express');
const router=express.Router();
const passport=require('passport');
const User=require('../models/User');

router.get('/login',(req,res)=>{
    res.render('login');
})


router.post('/register', async(req,res)=>{
    let {username,email,password}=req.body;
    const user=new User({email,username});
    const newUser=await User.register(user,password);
    console.log(newUser);
    res.redirect('/login');
});
router.post('/login',
passport.authenticate('local',{failureRedirect:'/login'}),
function(req,res){
    console.log("jj");
    //console.log(req.user , "new");//req.user humko sari attrinutes dega db ka
    res.redirect('/choose');
});



module.exports=router;