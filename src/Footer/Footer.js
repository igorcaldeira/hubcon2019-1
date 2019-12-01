import React from 'react';
import './Footer.css';

import una from './una.png';
import ioasys from './ioasys.png';
import nata from './nata.png';

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
            <a href='https://www.una.br'><img alt='una logo' className='suport-image' src={una} /></a>
            <a href='https://www.ioasys.com.br'><img alt='ioasys logo' className='suport-image' src={ioasys} /></a>
            <a href='https://www.nata.house'><img alt='nata house logo' className='suport-image' src={nata} /></a>
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