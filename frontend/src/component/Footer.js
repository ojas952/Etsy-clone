import axios from 'axios';
import React from 'react'
import './Footer.css'
export default function Footer() {
    async function fun() {
        const mail=document.getElementById('inp').value;
        const p=document.getElementById('suscribe_msg_p');
        if(mail!=='') {
            const hide=document.getElementById('hide');
            const retry_btn=document.getElementById('retry_btn');
            hide.classList.add('hide');
            const loading=document.getElementById('loading');
            loading.style.display='inline';
            const msg=await axios.post(`/suscribed/${mail}`);
            loading.style.display='none';
            const element=document.getElementById('suscribe_msg');
            element.classList.add('show');
            if(msg.data==='Please enter a correct mail') {
                p.innerHTML=msg.data;
                retry_btn.style.display='inline';
            }
            else {
                p.innerHTML=msg.data;
            }
        }
        else {
            p.innerHTML="Please enter a mail"
        }
    }
    return (
        <div className="footer">
            <div className="suscribe_line">
                <h3>Yes! Send me exclusive offers, unique gift ideas, and personalised tips for shopping and selling on Etsy.</h3>
            </div>
            <div id="hide" className="suscribe_button">
                <input id="inp" className="suscribe_input" type='text' placeholder="Enter Your Email" />
                <button className="suscribe_btn" onClick={fun}>Subscribe</button>
            </div>
            <div className="parent">
                <div id="loading" className="loading">

                </div>
                <div id="suscribe_msg" className="suscribe_msg">
                    <p id="suscribe_msg_p"></p>
                    <a href="/" id="retry_btn">Retry</a>
                </div>
            </div>
        </div>
    )
}
