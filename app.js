const express=require('express');
const app=express();
const path=require('path');
const mongoose=require('mongoose');
const ejsmate=require('ejs-mate');
const passport=require('passport');
const seedDB=require('./Seed');
const LocalStrategy=require('passport-local'); 
const User=require('./models/User');
const authroutes=require("./routes/auth");
const chooseroutes=require('./routes/choose');
const reviewRoute=require('./routes/reviewRoute');
const gamesRoute=require('./routes/gamesRoute');
const methodOverride = require('method-override');
const session=require('express-session');
 
let configSession={
    secret:'eyes off you',
    resave: false,
    saveUninitialized:true
}
 
mongoose.set('strictQuery' , true); 
mongoose.connect('mongodb://127.0.0.1:27017/user_data') 
.then(()=>{console.log("DB CONNECTED")})
.catch((err)=>{console.log("error in DB" , err)})


// app.engine('ejs',ejsmate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.render('index');
})

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(session(configSession));

// seedDB();

// app.use(session.express_session);    
 passport.use(passport.initialize());
 passport.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//passport
passport.use(new LocalStrategy(User.authenticate()));



app.use(chooseroutes);
app.use(reviewRoute);
app.use(authroutes);
app.use(gamesRoute);

app.listen(8080,()=>{
    console.log("server connected successfully");
})