const express=require('express');
const router=express.Router();
const Product=require('../models/product/products');
const Review=require('../models/product/review');

router.post('/products/:id/review',async(req,res)=>{
    console.log("Hello");
    const product=await Product.findById(req.params.id);
    const {rating,body}=req.body;
    const {username}=req.user;
    const review= new Review({rating,body,username});
    product.reviews.push(review);
    await review.save();
    await product.save();
})


module.exports=router;