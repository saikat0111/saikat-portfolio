// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'

import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <h1>Saikat Ray</h1>
            <p>I am a Singer, YouTuber and Music Producer from India, With 5+ years off Music Industry Experience.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">Developed By <a className='text-2xl underline text-orange-600' href="https://dibakarbera.pages.dev">Dibakar Bera</a> © 2024  <a className='text-2xl'>Saikat Ray</a> . All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
