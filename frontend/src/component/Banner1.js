import React from 'react'
import './Banner1.css'
export default function Banner1() {
    return (
        <div className="banner1">
            <p className="heading">What is Etsy?</p>
            <p className="subheading">Read our wonderfully weird story</p>
            <div className="features">
                <div className="fea">
                    <p className="feature_heading">A community doing good</p>
                    <p className="feature_subheading">Etsy is a global online marketplace, where people come together to make, sell, buy and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet. Here are some of the ways we’re making a positive impact, together.</p>
                </div>
                <div className="fea">
                    <p className="feature_heading">Support independent creators</p>
                    <p className="feature_subheading">There’s no Etsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.</p>
                </div>
                <div className="fea">
                    <p className="feature_heading">Peace of mind</p>
                    <p className="feature_subheading">Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</p>
                </div>
            </div>
            <h2 className="query">Have a question? Well, we’ve got some answers.</h2>
            <div className="querybtn">
                <button className="querybutton">Go Help Center</button>
            </div>
        </div>
    )
}
