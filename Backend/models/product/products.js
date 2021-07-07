const mongoose=require('mongoose');

const productSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        min:0,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ]
})

const product=mongoose.model('Product',productSchema);
module.exports=product;