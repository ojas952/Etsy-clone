import React from 'react'
import './Footer1.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
export default function Footer1() {
    return (
        <div className="footer1">
            <div className="overall">
                <div className="col">
                    <ul className="list">
                        <li><b>Shop</b></li>
                        <li>Gift Cards</li>
                        <li>Etsy Blog</li>
                    </ul>
                </div>
                <div className="col">
                    <ul className="list">
                        <li><b>Sell</b></li>
                        <li>Sell on Etsy</li>
                        <li>Teams</li>
                        <li>Forums</li>
                        <li>Affiliates</li>
                    </ul>
                </div>
                <div className="col">
                    <ul className="list">
                        <li><b>About</b></li>
                        <li> Etsy, Inc.</li>
                        <li>Policies</li>
                        <li>Careers</li>
                        <li>Press</li>
                        <li>Impact</li>
                        <li>Legal imprint</li>
                    </ul>
                </div>
                <div className="col">
                    <ul className="list">
                        <li><b>Help</b></li>
                        <li>Help Centre</li>
                        <li>Trust and safety</li>
                        <li>Privacy settings</li>
                    </ul>
                    <div className="querybtns">
                        <button className="querybuttons">Download the Etsy App</button>
                    </div>
                    <div className="icons">
                        
                            <InstagramIcon className="iconssub"/>
                        
                            <FacebookIcon className="iconssub"/>
                            <PinterestIcon className="iconssub" />
                            <TwitterIcon className="iconssub" />
                            <YouTubeIcon className="iconssub" />
                    </div>
                </div>
            </div>
        </div>
    )
}
