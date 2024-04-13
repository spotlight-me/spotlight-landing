import React, { useEffect } from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import { Application } from '@splinetool/runtime';
import SpotlightLogo from './SpotlightLogo.svg';

const FAQ = () => {
    useEffect(() => {
        const canvas = document.getElementById('canvas3d');
        
        console.log('Canvas:', canvas);
        if (canvas) {
          const app = new Application(canvas);
          app.load('https://prod.spline.design/1q1Z0dMWvfM2Ca2N/scene.splinecode');
        } else {
          console.error('Canvas element not found');
        }
      }, []);

    return (
    <div className="App faq">
        <nav className='Nav'>
            <Link to="/"><img src={SpotlightLogo} className="spotlight-logo" alt="spotlight logo" /></Link>
        </nav>
        <Dropdown />
    </div>
    )
}

export default FAQ