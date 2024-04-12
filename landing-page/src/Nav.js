import React from 'react';
import SpotlightLogo from './SpotlightLogo.svg'

const Nav = () => {
  return (
    <nav className='Nav'>
        <div className='left-nav-item-container'>
        <img src={SpotlightLogo} className="spotlight-logo" alt="spotlight logo" />
        </div>
        <div className='right-nav-item-container'>
            <h1 className='right-nav-item inter-font'>FAQs</h1>
            <h1 className='right-nav-item inter-font'>Join The Waitlist</h1>
        </div>
    </nav>
  )
}

export default Nav