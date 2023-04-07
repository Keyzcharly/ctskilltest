import React from 'react';
import logo from './images/logo.PNG';
import Slider from './Slider';

const background2 = () => {

  return (
    <div className='background2' id='History'>
        <div className='nav2'>
            <img src={logo} alt="logo" className='logo'/>
            <a href='#Team'>02. Team</a>
            <a href='#History'>01. History</a>
        </div>
        <div className="banner">
            <div className="container">
            <h2><span>01. </span>History</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum quia iste molestias praesentium repudiandae quibusdam itaque porro soluta molestiae, Iusto cum quia iste molestias praesentium repudiandae quibusdam itaque porro soluta molestiae?</p>
            </div>
        </div>
        <div className='overlay'>
          <Slider />
        </div>
    </div> 
  )
}

export default background2