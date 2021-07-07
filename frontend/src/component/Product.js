import React, { Component } from 'react'
import './Product.css'

export default class Product extends Component {
    render() {
        return (
                <div className="products">
                        <a href={`/products/${this.props.id}`}>
                            <span className="product_container">
                                <img className="product_img" src={this.props.img} alt={this.props.title} />
                                <p className="title">{this.props.title}</p>
                                <h3 className="price">US${this.props.price}</h3>
                            </span>
                        </a>
                </div>
            
        )
    }
}
