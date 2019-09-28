import React from 'react';
import logo from '../logo.svg';
import galaxy from './galaxy.gif';
import './Hero.css'

const Hero = () => <section id="inicio">
  <div className='container'>
    <div className='hero-columns'>
      <div className='logo-content'>
        <img src={logo} />
      </div>
      <div className='geom-content'>
        <div className='formats'>
          <div className='geometric-formats-big'>
            <img src={galaxy} />
          </div>
          <div className='geometric-formats-small' />
        </div>
      </div>
    </div>
  </div>
</section>

export default Hero;