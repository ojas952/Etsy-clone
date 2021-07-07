const express=require('express');
const router=express.Router();
const Product=require('../models/product/products');
const User=require('../models/product/user')




router.post('/user/:id/cart',async(req,res)=>{
    const product=await Product.findById(req.params.id);
    const user=req.user;
    user.cart.push(product);
    // await user.updateOne({cartquantity:req.body.cartquantity});
    await user.save();
    res.send("Successfully added");
})
router.get('/user/cart',async(req,res)=>{
    const user =await User.findById(req.user._id).populate('cart');
    res.send(user.cart);
})

router.delete('/cart/item/:id',async(req,res)=>{
    const userid=req.user._id;
    const id=req.params.id;
    await User.findByIdAndUpdate(userid,{$pull:{cart:id}});
    res.send("Deleted")
})

module.exports=router;