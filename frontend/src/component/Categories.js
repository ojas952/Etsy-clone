import React from 'react'
import './Categories.css'
import {Link} from 'react-router-dom';

export default function Categories() {
    return (
        <div className="header_categories">
            <small><Link to="#" className="cat">Jwellery & Accessories</Link></small>
            <small><Link to="#" className="cat">Clothing & Shoes</Link></small>
            <small><Link to="#" className="cat">Home & Living</Link></small>
            <small><Link to="#" className="cat">Wedding & Party</Link></small>
            <small><Link to="#" className="cat">Toys & Entertainment</Link></small>
            <small><Link to="#" className="cat">Art & Collectibles</Link></small>
            <small><Link to="#" className="cat">Craft Supplies & Tools</Link></small>
            <small><Link to="#" className="cat">Vintage</Link></small>
        </div>
    )
}
