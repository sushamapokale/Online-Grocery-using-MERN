import axios from "axios";
import React,{Component} from "react";
import { Link } from "react-router-dom";
 export default class ViewItems extends Component{
   constructor(){
     super()
     this.state={
       item_list:[]
     }
   }
   componentDidMount() {
    axios.get("http://localhost:3001/viewItems")
      .then(res => {
        this.setState({ item_list: res.data });
       console.log(this.state.item_list)
      });
  }
 
  delete=(id)=>{
 console.log(id);
 axios.delete(`http://localhost:3001/viewItems/`+id).then(res=>{
   alert( "item deleted ,changes will reflect shortly" );
 })
  }
render(){
  return(
  <div>
  <Link className="link" to={"/itemAdmin"}>Add Item</Link>
  <div className="table">
    <h3 style={{color:"darkgreen"}}>Items</h3>
  <table>
    <thead>
      <tr>
      <th>Name</th>
      <th>Price</th>
      <th>mfg_date</th>
      <th>exp_date</th>
      </tr>
    </thead>
     <tbody>
       {this.state.item_list.map(item=>{
        return<tr>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.mfg_date}</td>
          <td>{item.exp_date}</td>
          <td> <Link to={`/update/${item.name}`}><button className="btn btn-outline-secondary">Update</button></Link></td>
          <td  >
          <button onClick={this.delete.bind(this, item._id)} className="btn btn-outline-danger">Delete</button>
          </td>
        </tr>
      })
    }
       </tbody>
  </table>
 
  </div>
  

  </div>
)
}
}