import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './Nav';
import { Application } from '@splinetool/runtime';

function App() {
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
    <div className="App">
      <Nav />
      <canvas id="canvas3d" style={{ width: '100vw', height: '100vh' }}></canvas>
    </div>
  );
}

export default App;
