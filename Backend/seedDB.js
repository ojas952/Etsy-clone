const mongoose=require('mongoose');
const Product=require('./models/product/products');
const arr=[
    {
        title:"Zara Perfume",
        img:"https://images.unsplash.com/photo-1613138413312-0ca57a7adb80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        price:200,
        desc:'A mood-lifting premium gifting option - sure to make your gifting experience worthwhile. It is gender-neutral and packed with cult-favourite coffee. It is also layered with the heavenly aroma of coffee.',
        category:'Self Care',
        quantity:20,
    },
    {
        title:"Pendant",
        img:"https://images.unsplash.com/photo-1609245340409-cad2474ab1d5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price:400,
        desc:'Is everyday glimmer always on your mind? Here is a pendant you can pick to bring some of that glimmer to your neckline.',
        category:'Jwellery & Accessories',
        quantity:10,
    },
    {
        title:"Titan Wrist Watch",
        img:"https://images.unsplash.com/photo-1588186939549-c087e0796efd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjEzfHx3b21lbiUyMGJhZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price:350,
        desc:'A Timeless Classic Petite Melrose Features An Eggshell White Dial And An Undeniably Elegant Gold Mesh Strap. This Watch Elevates Your Everyday Outfit, Your Mood And Your Spirit.',
        category:'Gift',
        quantity:15,
    },
    {
        title:"Silver Ring",
        img:"https://images.unsplash.com/photo-1566977744263-79e677f4e7cf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price:1000,
        desc:'Sterling Silver Twisted Shape Diamond Ring Wedding Band 18KGP Two Tone Rose-gold Silver Fashion Jewelry Engagement Rings for Women.',
        category:'Jwellery & Accessories',
        quantity:30,
    },
    {
        title:"Girls Dress",
        img:"https://images.unsplash.com/photo-1589810635657-232948472d98?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjU5fHx3b21lbiUyMGJhZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price:100,
        desc:'Women casual dress featuring a halter neck, waist tie and a regular fit. It is crafted from fine fabric.',
        category:'Clothing & Shoes',
        quantity:100,
    },
    {
        title:"Leather Wallet",
        img:" https://images.unsplash.com/photo-1614330316655-51dbca10f5f0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2FsbGV0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price:50,
        desc:'Experience luxury and redefined sophistication with the classic and brilliantly crafted leather multi-card coin wallet by Kalibrado',
        category:'Gift',
        quantity:100,
    },


]

async function seedDB() {
    await Product.insertMany(arr);
    console.log("DB seeded");
}
module.exports=seedDB;