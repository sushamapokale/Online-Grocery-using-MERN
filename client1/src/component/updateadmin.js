import React ,{Component} from "react"
import axios from "axios"
import { Link } from "react-router-dom";
 export default class  Update  extends Component{
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
         axios.put('http://localhost:3001/update/'+ this.props.match.params.id,this.state).then(res=>{
             alert(res.data);
         })
       
        }

        componentDidMount() {
            axios.get(`http://localhost:3001/viewItems`)
                .then(result => {
                    
                    result.data.forEach(element => {
                        //console.log(element)
                       // console.log(this.props.match.params.id)
                        if(element.name==this.props.match.params.id)
                       {
                         this.setState({
                             name:element.name,
                             price:element.price,
                             mfg_date:element.mfg_date,
                             exp_date:element.exp_date

                         })
                       }
                    })
                    //console.log(this.state);
                })
            
        }
    
     render(){
         return(
        
            <div className="form">
                <h1 className="form-header">Update Item</h1>
                <div >
                <label className="label">Name</label>
                <br/>
                <input value={this.state.name}  className="ip" type="text" onChange={(event)=>this.changeName(event)}></input>
                </div>
                <div>
                <label  className="label">Price</label>
                <br/>
                <input value={this.state.price} className="ip" type="number" onChange={(event)=>this.changePrice(event)}></input>
                </div>
                <div>
                <label  className="label">mfg_date</label>
                <br/>
                <input   value={this.state.mfg_date}  className="ip" type="text" onChange={(event)=>this.changemMfg(event)}></input>
                </div>
                <div>
                <label  className="label">exp_date</label>
                <br/>
                <input   value={this.state.exp_date}  className="ip" type="text" onChange={(event)=>this.changeExp(event)}></input>
                </div>
                <button onClick={(event)=>this.Submit(event)} className="btn-1">Update</button>
                <Link to="/viewItems"><button  className="btn-1">View Items</button></Link>
         
            </div>
        
            
         )
     }
 }