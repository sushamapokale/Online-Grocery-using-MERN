const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    username:String,
    products: [
      {
       
        quantity: Number,
        name: String,
        price: Number
      }
    ],
   
    
}
);

 var Cart= mongoose.model("Cart", CartSchema,'cart');
 module.exports=Cart;