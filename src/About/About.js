import React from 'react';
import './About.css'

const About = () => <section id="sobre">
  <div class="video-background">
    <div class="video-foreground">
      <iframe src="https://www.youtube.com/embed/4L5u4oUP0Y0?controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1&playlist=W0LHTWG-UmQ" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
  <div className='about-content'>
    <div className='container'>
        <div className='columns'>
          <span className='giant-text-bg'>SOBRE A HUBCON</span>
          <div class='about-text'>
            <h3 className='title'>sobre a hubcon_</h3>
            <p className='body'>A hubcon é um evento de desenvolvimento e tecnologia que não se limita a um tema ou área, trazendo um dia incrível de evento com vários especialistas da comunidade.</p>
          </div>
        </div>
    </div>
  </div>
</section>

export default About;