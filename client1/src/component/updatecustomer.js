import React ,{Component} from "react"
import axios from "axios"
import { Link } from "react-router-dom";
 export default class  UpdateCustomer  extends Component{
     constructor(){
         super();
        this.state={
           username:"",
           email:"",
           mobile:"",
           password:""
         }
     }
     changeName=(event)=>{
        
         this.setState({
             username:event.target.value,
         })
     }
    changeEmail=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    changeMobile=(event)=>{
        this.setState({
            mobile:event.target.value
        })
    }
    changePassword=(event)=>{
        this.setState({
            password:event.target.value
        })
    }
    Submit=(event)=>{
        event.preventDefault();
        // console.log(this.state)
         axios.put('http://localhost:3001/updatecust/'+ this.props.match.params.id,this.state).then(res=>{
             alert(res.data);
         })
       
        }

        componentDidMount() {
            axios.get(`http://localhost:3001/read`)
                .then(result => {
                    
                    result.data.forEach(element => {
                      
                        //console.log(this.props.match.params.id)
                        if(element.username==this.props.match.params.id)
                       {
                        console.log(element)
                         this.setState({
                             username:element.username,
                             email:element.email,
                             mobile:element.mobile,
                             password:element.password

                         })
                       }
                    })
                    //console.log(this.state);
                })
            
        }
    
     render(){
         return(
        
            <div className="form">
                <h3 className="form-header">Update Customer</h3>
                <div >
                <label className="label">Username</label>
                <br/>
                <input value={this.state.username}  className="ip" type="text" onChange={(event)=>this.changeName(event)}></input>
                </div>
                <div>
                <label  className="label">Email</label>
                <br/>
                <input value={this.state.email} className="ip" type="email" onChange={(event)=>this.changeEmail(event)}></input>
                </div>
                <div>
                <label  className="label">Mobile</label>
                <br/>
                <input   value={this.state.mobile}  className="ip" type="text" onChange={(event)=>this.changeMobile(event)}></input>
                </div>
                <div>
                <label  className="label">Password</label>
                <br/>
                <input   value={this.state.password}  className="ip" type="text" onChange={(event)=>this.changePassword(event)}></input>
                </div>
                <button onClick={(event)=>this.Submit(event)} className="btn-1">Update</button>
                <Link to="/manage"><button  className="btn-1">View Customer</button></Link>
         
            </div>
        
            
         )
     }
 }