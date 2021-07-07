import axios from 'axios';
import React, { Component } from 'react'
import Cart from './Cart';
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import Header from './Header';

export default class CartList extends Component {
    constructor(props) {
        super();
        this.state={
            cartproducts:[],
            auth:'no'
        
        }
    }
    async componentDidMount() {
        const auth=await axios.get('/isauthorised');
        this.setState({auth:auth.data});
        if(this.state.auth==='yes') {
            let cartproducts=await axios.get('/user/cart');
            this.setState({cartproducts:cartproducts.data})
        }
        else {
            this.props.history.push('/login');
        }
        
    
    }
    render() {
        let allcartproducts;
        if(this.state.cartproducts.length===0) {
            allcartproducts=<p style={{padding:'40px',textAlign:'center'}}>No products<br></br>
            <a href="/">Continue Shopping</a></p>
        }
        else {
            allcartproducts=this.state.cartproducts.map((cpr,index)=>{
                return <Cart 
                key={index}
                id={cpr._id}
                title={cpr.title}
                price={cpr.price}
                img={cpr.img} />
            })
        }
        return (
            <div>
                <Header />
                {allcartproducts}<br></br>
                <Footer1 />
                <Footer2 />
            </div>
        )
    }
}
