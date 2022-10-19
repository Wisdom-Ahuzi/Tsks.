import React from 'react'
import Button from '@mui/material/Button';

const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <div className='div'>

      </div>
        <nav>
          <div className="navOne">
            <img src={require('../assets/Desktop/Logo.png')} alt="" />
            <a href="/">Features</a>
          </div>

          <div className='navTwo'>
            <a href="/">Login</a>
            <span>
              <a href="/">Sign up</a>
            </span>
          </div>
        </nav>

      <header>
        <h2>Tsks, just tasks<span>.</span></h2>
        <p>
          keep track of the daily tasks in life and get that satisfaction upon completion.
        </p>
        <div className="buttons">
          <Button variant="contained">Get Started</Button>
          <Button variant="contained">Learn More</Button>
        </div>
      </header>

      <div className="LandingImage">
        <img src={require('../assets/Desktop/todoPreview.webp')} alt="" />
      </div>

      <div className="divs">

      </div>
    </div>
  )
}

export default LandingPage