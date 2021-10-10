import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./Admin";
import User from "./User";
import Home from "../Home";
import CustomerList from "../CustomerList";
import Items from "../Items"
import ViewItems from "../viewItems";
import UserItem from "../userItem";
import Cart from "../cart";
import ItemAdmin from "../itemAdmin";
import Update from "../updateadmin";
import UpdateCustomer from "../updatecustomer";

export default class LoggedUser extends Component {

    render() {

        let user = this.props.match.params.id;
        console.log(user);
        if (user === "admin") {
            return (
                <div>
                   
                    <Router>

                    <Admin user={user}></Admin>
                    <Route path='/manage' component={CustomerList} />
                    <Route path='/addItems' component={Items} />
                    <Route path='/viewItems' component={ViewItems} />
                    <Route path='/itemAdmin' component={  ItemAdmin} />
                    <Route path='/update/:id' component={Update} />
                    <Route path='/updatecust/:id' component={UpdateCustomer} />
                  
                </Router>
                
                
                </div>

            )



        }
        else {

            return (
                <div>
                <Router>
                   
                    <User user={user}></User>
                    <Route path='/useritem/:id' component={UserItem} />
                    <Route path='/cart/:id' component={Cart} />
                </Router>
                 
                  </div>
            )
        }


    }
}