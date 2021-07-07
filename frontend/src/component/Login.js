import axios from 'axios';
import React, { Component } from 'react'
import Header from './Header';
export default class Login extends Component {
    constructor(props) {
        super();
        this.state={
            username:'',
            password:''
        }
    }
    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    submitHandler=async(e)=>{
        e.preventDefault();
        const user=await axios.post('/login',this.state);
        if(user.data==='yes') {
            this.props.history.push('/')
        }
        else {
            alert("Please check id password")
        }
    }
    render() {
        return (
            <div>
                <Header />
                <h1 style={{textAlign:'center',paddingBottom:'70px',paddingTop:'30px'}}>Login</h1>
               <div className="newproduct">
                    <form onSubmit={this.submitHandler}>
                        <label htmlFor="username">Username</label><br></br>
                        <input type="text" placeholder="Enter Username" className="forminput" id="username" name="username" onChange={this.changeHandler} /><br></br><br></br>
                        <label htmlFor="email">Password</label><br></br>
                        <input type="password" placeholder="Enter Password" className="forminput" id="password" name="password" onChange={this.changeHandler} /><br></br><br></br>
                        <div className="btn">
                            <button className="newproductbtn">Submit</button>
                        </div>
                    </form>
               </div>
               <p style={{textAlign:'center',paddingBottom:'70px',paddingTop:'15px'}}>Dont Have An Account? <a href="/signup">Sign Up</a></p>
            </div>
        )
    }
}
