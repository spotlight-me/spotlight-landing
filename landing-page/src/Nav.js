import React from 'react';
import SpotlightLogo from './SpotlightLogo.svg';
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='Nav'>
        <div className='left-nav-item-container'>
        <Link to="/"><img src={SpotlightLogo} className="spotlight-logo" alt="spotlight logo" /></Link>
        </div>
        <div className='right-nav-item-container'>
            <h1 className='right-nav-item inter-font'><Link className="reset-link" to="/faq">FAQs</Link></h1>
            <h1 className='right-nav-item inter-font'>Join The Waitlist</h1>
        </div>
    </nav>
  )
}

export default Nav