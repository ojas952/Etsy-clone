const express=require('express');
const router =express.Router();
const Product=require('../models/product/products');


router.get('/products',async(req,res)=>{
    const products=await Product.find({});
    res.send(products);
})
router.post('/products',async(req,res)=>{
    try {
        const product=await Product.create(req.body);
        res.send("Added successfully");
    }
    catch(err) {
        res.send("Please fill all details")
    }

})
router.get('/search/:query',async(req,res)=>{
        const query=req.params.query;
        const products=await Product.find({$or:[{desc:{$regex:query, $options: "i"}},{title:{$regex:query, $options: "i"}},{category:{$regex:query, $options: "i"}}]})
        res.send(products);   
})
router.get('/products/:id',async(req,res)=>{
    const id=req.params.id;
    const product=await Product.findById(id);
    res.send(product);
})
router.delete('/products/:id',async(req,res)=>{
    const product =await Product.findByIdAndDelete(req.params.id);
    res.send(product);
})
router.get('/products/category/:category',async(req,res)=>{
    const category=req.params.category;
    const products=await Product.find({category:{$regex:category, $options: "i"}})
    res.send(products);
})
router.get('/products/:id/edit',async(req,res)=>{
    const id=req.params.id;
    const product=await Product.findById(id);
    res.send(product);

})

router.patch('/products/:id',async(req,res)=>{
    const product=await Product.findByIdAndUpdate(req.params.id,req.body);
    res.send(product);
})

module.exports=router;