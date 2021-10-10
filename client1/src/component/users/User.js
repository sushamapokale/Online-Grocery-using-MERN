import React,{Component} from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
export default class User extends Component{
     
    logout=()=>{
        window.location='/home'
    }
    render(){
        let user1 = this.props.user;
        
        
        return(
            <div>
            <nav className=" pt-3 pb-3 navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <span className="navbar-brand " >Logo</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon curser-pointer"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active mx-3" aria-current="page" to={`/useritem/${user1}`}> Add Products</Link>
                            </li> 
                            <li className="nav-item">
                                <Link className="nav-link active mx-3" aria-current="page" to={`/cart/${user1}`}>My cart </Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <span className="nav-link active mx-3" aria-current="page" ><h4>Welcome {user1}</h4></span>
                            </li>
                      
                            <li className="nav-item">
                            <span className="nav-link active mx-3 pointer"onClick={()=>this.logout()} >Logout</span>
                            </li>
                           
                            
                        </ul>
                        </div>
                    </div>
                </div>
            </nav>
        <h1 style={{color:"darkgreen"}}>User Portal</h1>

        </div>
         )
    }
}