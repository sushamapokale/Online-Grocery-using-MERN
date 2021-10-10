let mongoose=require('mongoose');
var Items=mongoose.Schema({
    name:String,
     price:Number,
     mfg_date:String,
     exp_date:String
})

var Item=mongoose.model('Item',Items,'item');
module.exports=Item;