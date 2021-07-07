import React from 'react'
import './Banner.css'
export default function Banner() {
    return (
        <div className="banner">
           <p className="one">Find things you'll love. Support independent sellers. Only on Etsy.</p> 
           <h3 className="two">Everyday finds</h3>
           <div className="images">
               <div className="img_div">
                    <img className="img" src="https://images.unsplash.com/photo-1606306823929-94540e36f1e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fG1hc2tzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="..." />
                    <div className="banner_img_text">
                        <h5>Face Mask <span className="arrow">&#8594;</span></h5>
                    </div>
               </div>
               <div className="img_div">
                    <img className="img" src="https://images.unsplash.com/photo-1521478706270-f2e33c203d95?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lmdCUyMGlkZWFzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="..." />
                    <div className="banner_img_text">
                        <h5>Jewellery  <span className="arrow">&#8594;</span></h5>
                    </div>
               </div>
                <div className="img_div">
                    <img className="img" src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2FsbCUyMGRlY29yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="..." />
                    <div className="banner_img_text">
                        <h5>Home Decor  <span className="arrow">&#8594;</span></h5>
                    </div>
                </div>
                <div className="img_div">
                    <img className="img" src="https://images.unsplash.com/photo-1481391319762-47dff72954d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHNlbGYlMjBjYXJlJTIwZ2lmdCUyMGhhbXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="..." />
                    <div className="banner_img_text">
                        <h5>Gifts  <span className="arrow">&#8594;</span></h5>
                    </div>
                </div>
           </div>

        </div>
    )
}
