import axios from 'axios';
import React, { Component } from 'react'
import Header from './Header';
import './NewProduct.css'
export default class SignUp extends Component {
    constructor(props) {
        super();
        this.state={
            username:'',
            email:'',
            password:'',
            msg:''
        }
    }
    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    submitHandler=async(e)=>{
        e.preventDefault();
        const msg=await axios.post('/register',this.state);
        this.setState({msg:msg.data,username:'',email:'',password:''});
        // this.props.history.push('/login');
    }
    render() {
        let msg;
        if(this.state.msg==="Username Already exist") {
            msg=<p style={{textAlign:'center',paddingBottom:'10px',paddingTop:'10px',color:'red'}}>{this.state.msg}</p>
        }
        else {
            msg=<p style={{textAlign:'center',paddingBottom:'10px',paddingTop:'10px',color:'green'}}>{this.state.msg}</p>
        }
        return (
            <div>
                <Header />
                <h1 style={{textAlign:'center',paddingBottom:'70px',paddingTop:'30px'}}>Sign Up</h1>
                {msg}
               <div className="newproduct">
                    <form onSubmit={this.submitHandler}>
                        <label htmlFor="username">Username</label><br></br>
                        <input type="text" placeholder="Enter Username" value={this.state.username} className="forminput" id="username" name="username" onChange={this.changeHandler} /><br></br><br></br>
                        <label htmlFor="email">Email</label><br></br>
                        <input type="text" placeholder="Enter Email" value={this.state.email} className="forminput" img="email" name="email" onChange={this.changeHandler} /><br></br><br></br>
                        <label htmlFor="password">Password</label><br></br>
                        <input type="password" placeholder="Enter Password" value={this.state.password} className="forminput" id="password" name="password" onChange={this.changeHandler} /><br></br><br></br>
                        <div className="btn">
                            <button className="newproductbtn">Submit</button>
                        </div>
                    </form>
               </div>
               <p style={{textAlign:'center',paddingBottom:'70px',paddingTop:'15px'}}>Already Have An Account? <a href="/login">Login</a></p>
            </div>
        )
    }
}
