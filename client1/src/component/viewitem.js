import axios from "axios";
import React, { Component } from "react";
import '../App.css'
export default class ViewItem extends Component {
    constructor() {
        super()
        this.state = {
            item_list: [],
        }
    }
    componentDidMount() {
        axios.get("http://localhost:3001/viewItems")
            .then(res => {
                this.setState({ item_list: res.data })
            })
    }

    render() {

        return (
            <div>
                <h3 style={{color:'blue', marginTop:'10px',marginBottom:'-5px'}}>Available Product</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>mfg_date</th>
                            <th>exp_date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.item_list.map(item => {
                            return <tr>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.mfg_date}</td>
                                <td>{item.exp_date}</td>
                            </tr>
                        })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}