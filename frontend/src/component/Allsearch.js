import axios from 'axios';
import React, { Component } from 'react'
import Categories from './Categories';
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import Header from './Header';
import Product from './Product';

export default class Allsearch extends Component {
    constructor(props) {
        super();
        this.state={
            products:[],
            size:''
        }
    }
    async componentDidMount() {
        let products=await axios.get('/products');
        this.setState({products:products.data,size:products.data.length})
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
                <div className="full_nav">
                    <Header />
                    <Categories />
                </div>
                <p style={{paddingTop:'30px',paddingLeft:'80px',fontSize:'22px'}}>All Products ({this.state.size} results)</p>
                <div className="product_list" style={{marginBottom:'50px'}}>
                    {allproducts}
                </div>
                <Footer1 />
                <Footer2 />
            </div>
        )
    }
}
