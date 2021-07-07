import axios from 'axios'
import React, { Component } from 'react'
import Banner from './Banner'
import Banner1 from './Banner1'
import Categories from './Categories'
import Footer from './Footer'
import Footer1 from './Footer1'
import Footer2 from './Footer2'
import Header from './Header'
import './Index.css'
import ProductList from './ProductList'

export default class Index extends Component {
    constructor(props) {
        super();
        this.state={
            auth:'no'
        }
    }
    componentDidMount=async()=>{
        const auth=await axios.get('/isauthorised');
        this.setState({auth:auth.data});
    }
    render() {
        let addproductsbtn;
        if(this.state.auth==='yes') {
            addproductsbtn= <a href="/products/new" className="product_btn">Add Product</a>
        }
        else {
            addproductsbtn=<a href="/login" className="product_btn">Add Product</a>;
        }
        return (
            <div>
                <div className="full_nav">
                    <Header />
                    <Categories />
                </div>
                     <Banner />
                    <h1 className="head">Popular gifts right now</h1>
                    <div className="addproduct" id="addproduct">
                       {addproductsbtn}
                    </div>
                    <div className="product_list">
                        <ProductList />
                    </div>
                    <Banner1 />
                    <div>
                        <Footer />
                        <Footer1 />
                        <Footer2 />
                    </div>
            </div>
        )
    }
}
