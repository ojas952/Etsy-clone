import axios from 'axios';
import React, { Component } from 'react'
import Categories from './Categories'
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import Header from './Header'
import './ShowProduct.css'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Product from './Product';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import './Comment.css'
export default class ShowProduct extends Component {
    constructor(props) {
        super();
        this.state=({
            id:'',
            title:'',
            img:'',
            price:'',
            desc:'',
            quantity:'',
            category:'',
            relatedproducts:[],
            auth:'no',
            rating:'',
            body:'',
        
        })
    }
    async componentDidMount() {
        const product =await axios.get(`/products/${this.props.match.params.id}`);
        this.setState({
            id:product.data._id,
            title:product.data.title,
            img:product.data.img,
            price:product.data.price,
            desc:product.data.desc,
            quantity:product.data.quantity,
            category:product.data.category
        })
        const relatedproducts =await axios.get(`/products/category/${this.state.category}`);
        this.setState({relatedproducts:relatedproducts.data})

        

        const auth=await axios.get('/isauthorised');
        this.setState({auth:auth.data});
    }
    deleteHandler=async()=> {
        await axios.delete(`/products/${this.props.match.params.id}`);
        this.props.history.push('/');
    }
    notauthoriseddeleteHandler=async()=> {
        this.props.history.push('/login');
    }
    ratingChanged = (newRating) => {
        this.setState({rating:newRating});
    };
    changeHandler=(e)=>{   
        this.setState({[e.target.name]:e.target.value});
    }
    submitHandler=async(e)=>{
        // this.setState({id:this.props.id});
        // console.log(this.state.id);
        // if(this.state.auth==='yes') {
        //     await axios.post(`/products/${this.state.id}/review`,this.state);
            
        // }
        // else {
        //     this.props.history.push('/login');
        // }
    }
    oncartHandler=async()=>{
        await axios.post(`/user/${this.state.id}/cart`);
        window.navigator.vibrate(400);
        this.props.history.push('/user/cart');
    }
    onnotcartHandler=()=>{
        this.props.history.push('/login');
    }

    // selectHandler=(e)=>{
    //     this.setState({cartquantity:e.target.value})
    // }
    render() {
        let allrelatedproducts;
        if(this.state.relatedproducts.length<=1) {
            allrelatedproducts=<h3 style={{textAlign:'center',margin:'15px'}}>No Related Products Found</h3>;
        } 
        else {
            allrelatedproducts = this.state.relatedproducts.map(rpr=>{
                return <Product
                key={rpr._id}
                id={rpr._id} 
                title={rpr.title}
                price={rpr.price}
                img={rpr.img}
                />
            })
        }


        let isAvailable,isbtnavailable;
        if(this.state.quantity>0) {
            isAvailable=<small style={{float:'right',paddingTop:'13px'}}>✔ In Stock</small>
            if(this.state.auth==='yes') {
                isbtnavailable=<button onClick={this.oncartHandler} className="addtocartbtn">Add to Basket</button>
            }
            else {
                isbtnavailable=<button onClick={this.onnotcartHandler} className="addtocartbtn">Add to Basket</button>
            }
        }
        else {
            isAvailable=<small style={{color:'red',float:'right',paddingTop:'13px'}}>Out of Stock</small>
            isbtnavailable=<button disabled className="addtocartbtn">Out of Stock</button>
        }


        let isdelete,isedit;
        if(this.state.auth==='yes') {
            isedit= <Link to={`/products/${this.props.match.params.id}/edit`}><EditIcon className="editbtn"/></Link>
            isdelete=<DeleteForeverIcon className="deletebtn" onClick={this.deleteHandler}></DeleteForeverIcon>
        }
        else {
            isedit=<Link to={`/login`}><EditIcon className="editbtn"/></Link>;
            isdelete=<DeleteForeverIcon className="deletebtn" onClick={this.notauthoriseddeleteHandler}></DeleteForeverIcon>;
        }
        return (
            <div>
                <div className="full_nav">
                    <Header />
                    <Categories />
                </div>
                <div className="showproduct">
                    <div className="showproductimg">
                        <img src={this.state.img} alt="..."></img>
                    </div>
                    <div className="showproducttext">
                        <p className="showproducttitle">{this.state.title}{isedit}{isdelete}</p>
                        <div>
                            <h1 className="showproductprice">US$ {this.state.price}</h1>
                                {isAvailable}
                        </div>
                        <div className="showproductcart">
                            {/* <p style={{paddingBottom:'5px'}}>Quantity</p> */}
                            {/* <select style={{width:'100%',height:'50px',marginBottom:'20px'}} onChange={this.selectHandler}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select><br></br> */}
                            {isbtnavailable} 
                        </div>
                        <h5 className="showproductdescheading">Description</h5>
                        <p className="showproductdesc">{this.state.desc}</p><br></br>
                    {/* comments section */}
                        <div className="commets">
                                <hr></hr>
                                <br></br>
                                <h3>Review for this item</h3><br></br>
                                <ReactStars
                                    count={5}
                                    onChange={this.ratingChanged}
                                    size={30}
                                    activeColor="#000000"
                                /><br></br>
                                <textarea onChange={this.changeHandler} className="commenttext" name="body" placeholder="Enter Your Comment"></textarea>
                                <div className="commentbtndiv">
                                    <button onClick={this.submitHandler} className="commentbtn">Submit</button>
                                </div>    
                        </div>
                    {/* comments section */}
                    
                    </div>
                </div>
                <h1 style={{textAlign:'center'}}>Related Products</h1>
                <div className="product_list" style={{paddingBottom:'40px'}}>
                    {allrelatedproducts}
                </div>
                <Footer1 />
                <Footer2 />
            </div>
        )
    }
}
