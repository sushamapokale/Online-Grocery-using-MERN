import React, { Component } from "react";
import axios from "axios";
import '../App.css'
import { Link } from "react-router-dom";
import ViewItem from './viewitem'
export default class UserItem extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            quantity: "",
            name: "",
            price: "",
            itemlist: []
        }
    }
    changeName = (event) => {

        this.setState({
            name: event.target.value,
        })
    }
    changeQuantity = (event) => {
        this.setState({
            quantity: event.target.value
        })
    }
    changePrice = (event) => {
        this.setState({
            price: event.target.value
        })
    }
    Add = () => {
        let id = this.props.match.params.id;
        let data = { username: id, quantity: this.state.quantity, name: this.state.name, price: this.state.price }
        console.log(data)

        axios.post('http://localhost:3001/insertInCart', data).then(res => {
            alert(res.data)
        })
    }


    render() {
        return (

            <div className="view">
                  < ViewItem></ViewItem>
                <div className="form">
                    <h3 className="form-header">Add Item</h3>
                    <div>
                        <label className="label">Name</label>
                        <br />
                        <input className="ip" type="text" onChange={(event) => this.changeName(event)}></input>
                    </div>
                    <div>
                        <label className="label">Quantity</label>
                        <br />
                        <input className="ip" type="number" onChange={(event) => this.changeQuantity(event)}></input>
                    </div>
                    <div>
                        <label className="label">Price</label>
                        <br />
                        <input className="ip" type="number" onChange={(event) => this.changePrice(event)}></input>
                    </div>

                    <button className="btn-1" onClick={() => this.Add()}>Add</button>

                </div>
            </div>

        )
    }
}