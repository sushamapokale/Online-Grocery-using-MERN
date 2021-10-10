require('./db');
var Customer= require('./modals/customer')
var Items=require('./modals/items')
var Cart=require('./modals/cart')
var express = require('express');
const cors= require('cors');
const { createIndexes } = require('./modals/customer');
const Item = require('./modals/items');
const app = express()
const PORT = 3001;
app.use(express.json());
app.use(cors());


app.get('/read',(req,res)=>{
   Customer.find({},(err,result)=>{
   if(err)
   res.send(err)
   else { 
    res.send(result)
   }  
});
});


app.get('/viewItems',(req,res)=>{
   Items.find({},(err,result)=>{
   if(err)
   res.send(err)
   else { 
    res.send(result)
   }  
});
});

app.delete('/viewItems/:id',async(req,res)=>{
   
   const _id = req.params.id;
   try {
    const item = await Items.findByIdAndDelete(_id);
    if (!item) return res.sendStatus(404);
    return res.send(item.name);
   } catch (e) {
    return res.sendStatus(400);
   }
});


app.delete('/customer/:id',async(req,res)=>{
   
   const _id = req.params.id;
   try {
    const item = await Customer.findByIdAndDelete(_id);
    if (!item) return res.sendStatus(404);
    return res.send(item.name);
   } catch (e) {
    return res.sendStatus(400);
   }
});

app.post('/deleteInCart/:id',(req,res)=>{
   const name=req.params.id;
   //console.log(req.body)
   Cart.collection.updateOne(
      { username:req.body.user},
      { $pull: { 'products': { name:name } } }
    )
    

});


app.get('/insertInCart',(req,res)=>{
   Cart.find({},(err,result)=>{
      if(err)
      res.send(err)
      else { 
       res.send(result)
      }  
   });  
})

app.post('/insert',(req,res)=>{
   Customer.collection.findOne({username: req.body.username})
   .then(user=>{
    
      if(user){
         console.log(user);
         return res.send("username already registered")
         }   else{
   Customer.collection.insertOne(req.body,(err,result)=>{
    if(err)
    console.log(err)
    else
    return res.status(200).send(`${req.body.username} registerd successfully`);
  
   })
}}
   )
})

app.post('/insertItems',(req,res)=>{
   Items.findOne({name: req.body.name})
   .then(item=>{
    
      if(item){
        // console.log(user);
         return res.send("item already registered")
         }   else{
   Items.collection.insertOne(req.body,(err,result)=>{
    if(err)
    console.log(err)
    else
    return res.status(200).send("data inserted");
   })

   }}
   )
})


app.post('/insertInCart',async(req,res)=>{
   const { username,quantity, name, price } = req.body;
    //TODO: the logged in user id
    //console.log(req.body)
  try {
    let cart = await Cart.findOne({ username });

    if (cart) {
      //cart exists for user
      let itemIndex = cart.products.findIndex(p => p.name == name);

      if (itemIndex > -1) {
        //product exists in the cart, update the quantity
        let productItem = cart.products[itemIndex];
        productItem.quantity = quantity;
        cart.products[itemIndex] = productItem;
      } else {
        //product does not exists in cart, add new item
        cart.products.push({ quantity, name, price });
      }
      cart = await cart.save();
      return res.status(201).send("item inserted");
    } else {
      //no cart for user, create new cart
      const newCart = await Cart.create({
       username,
        products: [{  quantity, name, price }]
      });

      return res.status(201).send("cart created");
    }
  } catch (err) {
    console.log(err); 
    res.status(500).send("Something went wrong");
  }
  
})

app.put('/update/:id',(req,res)=>{
   let item=req.params.id;
   console.log(req.body.name)
    Item.collection.updateOne({"name":item},{$set:req.body},(err,result)=>{
       console.log(err)
       res.send(err);
    })
})

app.put('/updatecust/:id',(req,res)=>{
   let customer=req.params.id;
    Customer.collection.updateOne({"username":customer},{$set:req.body},(err,result)=>{
     if(err)
     res.send("error")
     else
     res.send("customer record updated")
    })
})

app.listen(PORT, () => {
    console.log('server listening on port ' + PORT);
})