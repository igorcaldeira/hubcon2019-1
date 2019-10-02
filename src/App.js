import React from 'react'
import Navbar from './Navbar/index'
import Hero from './Hero/index'
import About from './About/index'
import Talks from './Talks/index'
import Map from './Map/index'
import Footer from './Footer/index'
import './App.css'

const App = () =>  <>
  <div className="app">
    <Navbar />
    <Hero />
    <About />
    <Talks />
    <Map />
    <Footer />
  </div>
  <div className='sympla-wrapper'>
    <div id="sympla-widget-670145" height="auto" ></div>
  </div>
</>

export default App;
