const express =require('express');
const app=express();
const mongoose=require('mongoose');
const seedDB=require('./seedDB');
const User=require('./models/product/user');
const productroutes=require('./routes/product')
const mailroutes=require('./routes/mail');
const authroutes=require('./routes/auth');
const reviewroutes=require('./routes/review');
const cartroutes=require('./routes/cart');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const session=require('express-session');
const passport=require('passport');
const localStrategy=require('passport-local');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }))
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
mongoose.connect('mongodb://localhost:27017/etsy', {useNewUrlParser: true,useUnifiedTopology:true,useFindAndModify:false})
.then(()=>{
    console.log("DataBase Connected");
})
.catch((err)=>{
    console.log(err);
    console.log("Db connection failed");
})
app.use(productroutes);
app.use(mailroutes);
app.use(authroutes);
app.use(reviewroutes);
app.use(cartroutes);
// seedDB();


app.listen(8000,()=>{
    console.log("Connected to 8000");
})