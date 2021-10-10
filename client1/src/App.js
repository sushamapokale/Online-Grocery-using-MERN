import React,{Component} from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import LoggedUser from "./component/users/loggedUser";
import  Login  from "./Auth/login";
import  Home  from "./component/Home";
import  Register  from "./Auth/register";




class App extends  Component{
  render(){
    return(
      <div>
        <Router>
          
      
       
      
      
       <Route exact path='/' component={Home}/>
        <Route  path='/home' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        
       
        <Route path='/loggeduser/:id' component={LoggedUser}/>
        
       

       
       
      </Router>
      
      </div>
    )
  }
}
export default App;