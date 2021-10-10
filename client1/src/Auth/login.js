import React, { Component } from "react";
import '..//App.css'
let axios = require('axios')
var user = ""
let flag = 0;
export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            customer_list: []
        }
    }
    changeName = (event) => {

        this.setState({
            username: event.target.value,
        })
    }

    changePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    login = () => {
        //console.log(this.state)
        axios.get("http://localhost:3001/read")
            .then(res => {
                this.setState({ customer_list: res.data });
                console.log(this.state.username);
                for (let val of this.state.customer_list) {

                    if (val.username === this.state.username && val.password === this.state.password) {  //window.location = '/home'

                        flag++;
                        window.location = `/loggeduser/${this.state.username}`;
                        break;
                    }

                };
                if (flag === 0)
                    alert("invalid username");


            });


    }
    render() {
        return (
            <div>
                <h1 style={{color:"darkgreen"}} >Welcome to Online Grocery Shop</h1>
                <div className="form">
                    <div>
                        <h3 className="form-header">Login</h3>
                        <div>
                            <label className="label">Username</label>
                            <br />
                            <input className="ip" type="text" onChange={(event) => this.changeName(event)}></input>
                        </div>
                        <div>
                            <label className="label">Password</label>
                            <br />
                            <input className="ip" type="password" onChange={(event) => this.changePassword(event)}></input>
                        </div>
                        <button  className="btn-1" onClick={() => {window.location='/home'}}>Back</button>
                        <button className="btn-1" onClick={() => this.login()}>Login</button>
                        <button className="btn-1" onClick={() => {window.location='register'}}>Register</button>

                    </div>

                </div>
            </div>
        )
    }
}

export { user }