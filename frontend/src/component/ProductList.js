import React, { Component } from 'react'
import Product from './Product';
import axios from 'axios'
export default class ProductList extends Component {
    constructor(props) {
        super();
        this.state={
            products:[]
        }
    }
    async componentDidMount() {
        let products=await axios.get('/products');
        this.setState({products:products.data})
    }
    render() {
        let allproducts = this.state.products.map(pr=>{
            return <Product
            key={pr._id}
            id={pr._id} 
            title={pr.title}
            price={pr.price}
            img={pr.img}
            />
        })
        return (
            <div>
                {allproducts}
            </div>
        )
    }
}
