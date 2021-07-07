const express=require('express');
const User = require('../models/product/user');
const router =express.Router();
const passport=require('passport');

router.post('/register',async(req,res)=>{
    try {
        const user={
            username:req.body.username,
            email:req.body.email

        }
        const newuser=await User.register(user,req.body.password);
        res.send("Signed Up Successfully");
    }
    catch(e) {
        res.send("Username Already exist");
    }
    
})
router.get('/loginfailed',(req,res)=>{
    
    res.send("no");
})
router.get('/login/success',(req,res)=>{
    if(req.user) {
        res.send({auth:"yes",user:req.user});
    }else {
        res.send({auth:"no",user:req.user});
    }
    
})
router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/loginfailed' }),
  function(req, res) {
    res.send('yes');
});
router.get('/logout',(req,res)=>{
    req.logout();
    res.send({auth:"no"});

})
router.get('/isauthorised',(req,res)=>{
    if(!req.isAuthenticated()) {
        res.send('no');
    }
    else {
        res.send('yes');
    }
})


module.exports=router;