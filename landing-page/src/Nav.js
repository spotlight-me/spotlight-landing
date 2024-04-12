import React from 'react';
import SpotlightLogo from './SpotlightLogo.png'

const Nav = () => {
  return (
    <nav className='Nav'>
        <div className='left-nav-items'>
        <img src={SpotlightLogo} className="spotlight-logo" alt="spotlight logo" />
        </div>
        <div className='right-nav-items'>
            
        </div>
    </nav>
  )
}

export default Nav