import axios from "axios";
import React,{Component} from "react";
import { Link } from "react-router-dom";
import '../App.css'
 export default class Cart extends Component{
   constructor(){
     super()
     this.state={
       item_list:[]
     }
   }
   componentDidMount() {
    axios.get("http://localhost:3001/insertInCart")
      .then(res => {
        let id = this.props.match.params.id;
       //console.log(res.data)
        res.data.forEach(element => {
          console.log(element.username)
          if(element.username==id)
         {
          this.setState({ item_list: element.products });
         }
        });
       
       console.log(this.state.item_list)
      });
  }

  delete=(id)=>{
    let user = this.props.match.params.id;
    console.log(id);
    alert("item deleted, changes will be reflect in cart shortly");
    axios.post(`http://localhost:3001/deleteInCart/`+id,{user})
      
    
     }
 
render(){
  return(
 <div>
   <h1 className="cart " style={{color:"blue"}}> My Cart</h1>
     {
         this.state.item_list.map(item=>{
            return(
                <div className= "cart">
                  <div className="item">
                 <h3>{item.name}</h3>
                 <h6>price:{item.price}</h6>
                 <h6>quantity:{item.quantity}</h6>
                 <p><button onClick={this.delete.bind(this, item.name)}>Remove</button></p>
                </div>
                </div>
            )
         })
         
     }
 </div>
  
)
}
}