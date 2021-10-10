import React ,{Component} from "react"
import axios from "axios"
 export default class Register  extends Component{
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
         axios.post('http://localhost:3001/insert',this.state).then(res=>{
             alert(res.data);
         })   
     }
    
     render(){
         return(
           <div>
                <h1 style={{color:"darkgreen"}} >Welcome to Online Grocery Shop</h1>
                <div className="form">
                    <h3 className="form-header">Register</h3>
                <div >
                <label  className="label">Username</label>
                <br/>
                <input  className="ip" type="text" onChange={(event)=>this.changeName(event)}></input>
                </div>
                <div>
                <label  className="label">Email</label>
                <br/>
                <input  className="ip" type="text" onChange={(event)=>this.changeEmail(event)}></input>
                </div>
                <div>
                <label  className="label">Mobile</label>
                <br/>
                <input  className="ip" type="text" onChange={(event)=>this.changeMobile(event)}></input>
                </div>
                <div>
                <label  className="label">Password</label>
                <br/>
                <input className="ip" type="text" onChange={(event)=>this.changePassword(event)}></input>
                </div>
                <button className="btn-1" onClick={(event)=>{window.location="/home"}}>Back</button>
                <button  className="btn-1" onClick={(event)=>this.Submit(event)}>Submit</button>
                <button  className="btn-1" onClick={(event)=>{window.location="/login"}}>Login</button>
         
            </div>
           </div>
         )
     }
 }