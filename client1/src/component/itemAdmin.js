import React ,{Component} from "react"
import axios from "axios"
 export default class  ItemAdmin  extends Component{
     constructor(){
         super();
        this.state={
           name:"",
           price:"",
           mfg_date:"",
           exp_date:""
         }
     }
     changeName=(event)=>{
        
         this.setState({
             name:event.target.value,
         })
     }
    changePrice=(event)=>{
        this.setState({
            price:event.target.value
        })
    }
    changemMfg=(event)=>{
        this.setState({
            mfg_date:event.target.value
        })
    }
    changeExp=(event)=>{
        this.setState({
            exp_date:event.target.value
        })
    }
    Submit=(event)=>{
        event.preventDefault();
        // console.log(this.state)
         axios.post('http://localhost:3001/insertItems',this.state).then(res=>{
             alert(res.data);
         })
       
        }
    
     render(){
         return(
        
            <div className="form">
                <h1 className="form-header">Add Item</h1>
                <div >
                <label className="label">Name</label>
                <br/>
                <input  className="ip" type="text" onChange={(event)=>this.changeName(event)}></input>
                </div>
                <div>
                <label  className="label">Price</label>
                <br/>
                <input  className="ip" type="number" onChange={(event)=>this.changePrice(event)}></input>
                </div>
                <div>
                <label  className="label">mfg_date</label>
                <br/>
  
                <input  className="ip" type="text" onChange={(event)=>this.changemMfg(event)}></input>
                </div>
                <div>
                <label  className="label">exp_date</label>
                <br/>
                <input   className="ip" type="text" onChange={(event)=>this.changeExp(event)}></input>
                </div>
                <button  className="btn-1" onClick={(event)=>this.Submit(event)}>Add</button>
         
            </div>
        
            
         )
     }
 }