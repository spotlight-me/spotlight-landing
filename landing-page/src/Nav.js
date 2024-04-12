import React from 'react';
import SpotlightLogo from './SpotlightLogo.png'

const Nav = () => {
  return (
    <nav className='Nav'>
        <img src={SpotlightLogo} className="spotlight-logo" alt="spotlight logo" />
    </nav>
  )
}

export default Nav