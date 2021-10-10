let mongoose=require('mongoose');
var mySchema=mongoose.Schema({
    username:String,
     email:String,
     mobile:Number,
     password:String
})

var Customer=mongoose.model('Customer',mySchema,'customer');
module.exports=Customer;