const mongoose =require('mongoose');
const suscribeSchema=new mongoose.Schema({
    mail: {
        type:String
    }
})

const Smail=mongoose.model('Smail',suscribeSchema);

module.exports=Smail;