let mongoose=require('mongoose');

let url='mongodb://localhost:27017/Project';
mongoose.connect(url,{useNewUrlParser:true});
let db=mongoose.connection

db.on('error',()=>{
    console.log('error')
})

db.once('open',()=>{
    console.log('db connected');
})

