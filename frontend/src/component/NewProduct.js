import React, { Component } from 'react'
import axios from 'axios';
import './NewProduct.css'
import Header from './Header';
import Footer1 from './Footer1';
export default class NewProduct extends Component {
    constructor(props) {
        super();
        this.state={
            title:'',
            img:'',
            price:'',
            desc:'',
            quantity:'',
            category:'',
            msg:'',
            auth:'no'
        }
    }
    componentDidMount=async()=>{
        const auth=await axios.get('/isauthorised');
        console.log(auth.data);
        this.setState({auth:auth.data});
    }
    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    submitHandler=async(e)=>{
        if(this.state.auth==='yes') {
            e.preventDefault();
            const msg=await axios.post('/products',this.state);
        
            this.setState({msg:msg.data})
        }
        else {
            this.props.history.push('/login');
        }
        // this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <Header />
                <h1 style={{textAlign:'center'}}>Add New Product</h1>
                <h3 style={{textAlign:'center'}}>{this.state.msg}</h3>
                <div className="newproduct">
                    <form onSubmit={this.submitHandler}>
                        <label htmlFor="title">Title</label><br></br>
                        <input type="text" placeholder="Enter Title" className="forminput" id="title" name="title" onChange={this.changeHandler} /><br></br><br></br>
                        <label htmlFor="img">Image URL</label><br></br>
                        <input type="text" placeholder="Enter Image URL" className="forminput" img="img" name="img" onChange={this.changeHandler} /><br></br><br></br>
                        <label htmlFor="price">Price</label><br></br>
                        <input type="text" placeholder="Enter Price" className="forminput" id="price" name="price" onChange={this.changeHandler} /><br></br><br></br>
                        <label htmlFor="desc">Description</label><br></br>
                        <textarea placeholder="Enter Description" className="forminput" id="desc" name="desc" rows="6" onChange={this.changeHandler} /><br></br><br></br>
                        <label htmlFor="quantity">Quantity</label><br></br>
                        <input type="text" placeholder="Enter Quantity" className="forminput" id="quantity" name="quantity" onChange={this.changeHandler} /><br></br><br></br>
                        <label htmlFor="category">Category</label><br></br>
                        <input type="text" placeholder="Enter Category" className="forminput" id="category" name="category" onChange={this.changeHandler} /><br></br><br></br>
                        <div className="btn">
                             <button className="newproductbtn">Submit</button>
                        </div>
                    </form>
                </div>
                <Footer1 />
            </div>
        )
    }
}
