import axios from 'axios';
import React, { Component } from 'react'
import Header from './Header';
import Product from './Product';
import Categories from './Categories'
import Footer from './Footer'
import Footer1 from './Footer1'
import Footer2 from './Footer2'
import './Search.css'

export default class Search extends Component {
    constructor(props) {
        super();
        this.state={
            searchedproducts:[],
            size:''
        }
    }
    async componentDidMount() {
        const searchedproducts = await axios.get(`/search/${this.props.match.params.query}`)
        // console.log(searchedproducts.data.length);
        this.setState({searchedproducts:searchedproducts.data})
        this.setState({size:searchedproducts.data.length})
    }
    render() {
        let allsearchedproducts=this.state.searchedproducts.map(sp=>{
            return <Product
            key={sp._id}
            id={sp._id} 
            title={sp.title}
            price={sp.price}
            img={sp.img}
            />
        })
        return (
            <div>
                <div className="full_nav">
                    <Header />
                    <Categories />
                </div>
                <h3 className="searched_result">{this.state.size} results for "{this.props.match.params.query}"</h3>
                <div className="product_list">
                    {allsearchedproducts}
                </div>
                <Footer />
                <Footer1 />
                <Footer2 />
            </div>
        )
    }
}
