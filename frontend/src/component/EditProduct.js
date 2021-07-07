import React, { Component } from 'react'
import axios from 'axios';
import Header from './Header';
import Footer1 from './Footer1';
import Footer2 from './Footer2';
export default class EditProduct extends Component {
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
    async componentDidMount() {
        const product= await axios.get(`/products/${this.props.match.params.id}/edit`);
        this.setState({
            id:product.data._id,
            title:product.data.title,
            img:product.data.img,
            price:product.data.price,
            desc:product.data.desc,
            quantity:product.data.quantity,
            category:product.data.category
        })  
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
            await axios.patch(`/products/${this.props.match.params.id}` ,this.state);
            this.props.history.push(`/products/${this.props.match.params.id}`);
        }
        else {
            this.props.history.push('/login');
        }
    }
    render() {
        return (
            <div>
                <Header />
                <h1 style={{textAlign:'center'}}>Edit Product</h1>
                <div className="newproduct">
                    <form onSubmit={this.submitHandler}>
                        <label htmlFor="title">Title</label><br></br>
                        <input type="text" placeholder="Enter Title" value={this.state.title} className="forminput" id="title" name="title" onChange={this.changeHandler} /><br></br><br></br>
                        <label htmlFor="img">Image URL</label><br></br>
                        <input type="text" placeholder="Enter Image URL" value={this.state.img} className="forminput" img="img" name="img" onChange={this.changeHandler} /><br></br><br></br>
                        <label htmlFor="price">Price</label><br></br>
                        <input type="text" placeholder="Enter Price" value={this.state.price} className="forminput" id="price" name="price" onChange={this.changeHandler} /><br></br><br></br>
                        <label htmlFor="desc">Description</label><br></br>
                        <textarea placeholder="Enter Description" value={this.state.desc} className="forminput" id="desc" name="desc" rows="6" onChange={this.changeHandler} /><br></br><br></br>
                        <label htmlFor="quantity">Quantity</label><br></br>
                        <input type="text" placeholder="Enter Quantity" value={this.state.quantity} className="forminput" id="quantity" name="quantity" onChange={this.changeHandler} /><br></br><br></br>
                        <label htmlFor="category">Category</label><br></br>
                        <input type="text" placeholder="Enter Category" value={this.state.category} className="forminput" id="category" name="category" onChange={this.changeHandler} /><br></br><br></br>
                        <div className="btn">
                             <button className="newproductbtn">Submit</button>
                        </div>
                    </form>
                </div>
                <Footer1 />
                <Footer2 />
            </div>
        )
    }
}
