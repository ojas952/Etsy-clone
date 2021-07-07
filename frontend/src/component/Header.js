import React, { Component } from 'react'
import './Header.css'
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import axios from 'axios';
export default class Header extends Component {
    constructor(props) {
        super();
        this.state={
            query:'',
            auth:'no',
            user:'',
            cartcount:'0'
        }
    }
    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    componentDidMount=async()=>{
        const auth=await axios.get('/isauthorised');
        this.setState({auth:auth.data});

        let cartproducts=await axios.get('/user/cart');
        this.setState({cartcount:cartproducts.data.length})
        

    }
    submitHandler=async(e)=>{
        // e.preventDefault();
        const msg=await axios.get('/logout');
        this.setState({auth:msg})
        // this.props.history.push('/login');
        window.location.reload(false);
    }
    render() {
        const {query}=this.state;
        const isEnable=query>0;
        let enable;
        if(!isEnable) {
            enable=<a href={`/search/${this.state.query}`}><SearchIcon className="header_search_icon1" /></a>
        } 
        else {
            enable=<a href={`/allsearch`} ><SearchIcon className="header_search_icon1" /></a>
        }

        const {auth}=this.state;
        let showbtn;
        if(auth==='yes') {
            showbtn=<span><button className="header_logout" onClick={this.submitHandler}>Log Out</button></span>
        }
        else {
            showbtn=<span><a href="/signup" className="header_sign">Sign Up</a></span>
        }


        let showcart;
        if(auth==='yes') {
            showcart=<span><a href="/user/cart" className="heaser_cart"><ShoppingCartIcon /></a><sup style={{backgroundColor:'green',padding:'5px',borderRadius:'30px',color:'white'}}>{this.state.cartcount}</sup></span>
        }
        else {
            showcart=<span><a href="/login" className="heaser_cart"><ShoppingCartIcon /></a><sup style={{backgroundColor:'green',padding:'5px',borderRadius:'30px',color:'white'}}>{this.state.cartcount}</sup></span>
        }
        return (
            <div>
                <div className="header">
                <Link to="/" user={this.state.username}><img className="header_logo" src="https://cdn.iconscout.com/icon/free/png-256/etsy-282219.png" alt="..." /></Link>
                <div className='header_search'>
                    <input className="header_searchinput" type="text" placeholder="Search for anything" name="query" onChange={this.changeHandler} />
                    {enable}
                </div>
                <div className="header_nav">
                    <div className="header_option">
                        {showbtn}
                    </div>
                    <div className="header_option">
                       {showcart}
                    </div>
                </div>
                </div>
                <div className='header_search1'>
                    <input className="header_searchinput1" type="text" placeholder="Search for anything" name="query" onChange={this.changeHandler} />
                    {enable}
                    
                </div>
            </div>
        )
    }
}
