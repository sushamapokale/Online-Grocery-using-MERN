import axios from "axios";
import React,{Component} from "react";
import { Link } from "react-router-dom";
 export default class CustomerList extends Component{
   constructor(){
     super()
     this.state={
       customer_list:[]
     }
   }
   componentDidMount() {
    axios.get("http://localhost:3001/read")
      .then(res => {
        this.setState({ customer_list: res.data });
        console.log(this.state.customer_list);
      });
  }

  delete=(id)=>{
    console.log(id);
    axios.delete(`http://localhost:3001/customer/`+id).then(res=>{
      alert( "customer deleted ,changes will reflect shortly" );
    })
     }
render(){
  return(
  <div className="table">
  <table>
    <thead>
      <tr>
      <th>Username</th>
      <th>Email</th>
      <th>Password</th>
      <th>Password</th>
      </tr>
    </thead>
     <tbody>
       {this.state.customer_list.map(cust=>{
        return<tr>
          <td>{cust.username}</td>
          <td>{cust.email}</td>
          <td>{cust.mobile}</td>
          <td>{cust.password}</td>
          <td> <Link to={`/updatecust/${cust.username}`}><button className="btn btn-outline-secondary">Update</button></Link></td>
          <td  >
          <button onClick={this.delete.bind(this, cust._id)} className="btn btn-outline-danger">Delete</button>
          </td>
        </tr>
      })
    }
       </tbody>
  </table>
 
  

  </div>
)
}
}