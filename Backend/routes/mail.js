const express=require('express');
const router =express.Router();
const Smail=require('../models/suscribemail/suscribemail')
var nodemailer = require('nodemailer');

router.post('/suscribed/:mail',async(req,res)=>{
    const rmail=req.params.mail;
    const alreadycustomer = await Smail.find({mail:{$regex:rmail, $options: "i"}})
    console.log(alreadycustomer.length);
    if(alreadycustomer.length>0) {
      res.send("You subscribed already")
    }
    else {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'lakshayjawa17@gmail.com',
          pass: 'password'
        }
      });
      
      var mailOptions = {
        from: 'lakshayjawa17@gmail.com',
        to: rmail,
        subject: 'Thank You for Subscribing Etsy Clone',
        html: '<h1>Welcome to the Etsy Clone World</h1><img src="cid:logo"/><p>From now you will get all upadated from Etsy Clone</p>',
        attachments: [{
          filename: 'logo.png',
          path: __dirname +'/logo.png',
          cid: 'logo'
      }]
      };
      
      transporter.sendMail(mailOptions,async function(error, info){
        if (error) {
          res.send("Please enter a correct mail");
        } else {
          await Smail.create(req.params);
          res.send("Your email is succesfully subscribed");
        }
      });
    }
})

module.exports=router;
