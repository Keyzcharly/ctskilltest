import React from 'react';
import Section2 from './Section2';
import logo from './images/logo.PNG'

const Background3 = () => {
  return (
    <>
        <div id='Team'>
            <Section2 />
            <div className='background3' >
                <div className='nav3'>
                    <a href='#Team'>Mountain 1</a>
                    <a href='#History'>Mountain 2</a>
                </div>
                <div className="banner2">
                    <div className="container2">
                        <h2 className='header3'>Schedule</h2>
                        <br/>
                        <div style={{display: 'flex', justifyContent: 'space-around'}}>
                            <p>25 Nov 2016 </p>
                            <p style={{marginLeft: '50px'}}> Vestibulum Viverra</p>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-around'}}>
                            <p>28 Nov 2016 </p>
                            <p style={{marginLeft: '50px'}}> Vestibulum Viverra</p>
                        </div>
                        <br />
                        <div style={{display: 'flex', justifyContent: 'space-around'}}>
                            <p>18 Dec 2016 </p>
                            <p style={{marginLeft: '50px'}}> Vestibulum Viverra</p>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-around'}}>
                            <p>7 Jan 2017 </p>
                            <p style={{marginLeft: '50px'}}> Vestibulum Viverra</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='nav4'>
                <img src={logo} alt="logo" className='logo'/>
                <p>Copyright 2016. All rights reserved</p>
            </div>
        </div>
        
    </>
    
  )
}

export default Background3