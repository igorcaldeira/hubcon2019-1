import React from 'react';
import una from './una.png';
import ioasys from './ioasys.png';
import './Footer.css';

const Footer = () => <section id="footer">
  <div className='container'>
    <div className='footer-columns'>
      <div className='content-left'>
        <div className='content'>
          <b>CONTATO _</b><br/>
          Instagram _ @hubcon<br/>
          email _ hubconevento@gmail.com
          <div className='content-left'>
            <p><b>APOIADORES _</b></p>
            <img alt='una logo' className='suport-image una-logo' src={una} />
            <img alt='ioasys logo' className='suport-image ioasys-logo' src={ioasys} />
          </div> 
        </div> 
      </div>
      <div className='content-right'>
        <div className='media'>
          <div>
            <div className='social'>Social</div>
            <div className='lateralBar'></div>
          </div>
          <div className='hubcon'><h1><b>#HUBCON2019</b></h1></div>
        </div>
      </div>
    </div>
  </div>
</section>

export default Footer;