import axios from 'axios';
import React, { Component } from 'react'
import './Cart.css'
export default class Cart extends Component {
    constructor(props) {
        super();
        this.state={
            total:''
        }
    }
    deleteHandler=async(e)=>{
        await axios.delete(`/cart/item/${e.target.value}`)
        window.location.reload(false);
    }
    render() {
        return (
            <div className="maincart">
            <div className="cart">
                <div className="cartimg">
                    <img src={this.props.img} alt="....."/>
                </div>
                <div className="carttext">
                   <a href={`/products/${this.props.id}`}><p>{this.props.title}</p></a>
                    <p>US${this.props.price}</p>
                    
                </div>
                <div className="cartbtn">
                    <button value={this.props.id} onClick={this.deleteHandler}>Delete</button>
                </div>
            </div>
            <hr></hr>
            </div>

        )
    }
}
