import React from 'react'
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <div className='div'>

      </div>
        <nav>
          <div className="navOne">
            <img src={require('../assets/Desktop/Logo.png')} alt="" />
            <NavLink to="">Features</NavLink>
          </div>

          <div className='navTwo'>
            <NavLink to="/SignIn">Login</NavLink>
            <span>
              <NavLink to="/SignUp">Sign up</NavLink>
            </span>
          </div>
        </nav>


      <header>
        <h2>Tsks, just tasks<span>.</span></h2>
        <p>
          keep track of the daily tasks in life and get that satisfaction upon completion.
        </p>
        <div className="buttons">
          <NavLink to="/SignUp">
            <Button className='purple' variant="contained">Get Started</Button>
          </NavLink>

          <NavLink to="" >
            <Button className='black' variant="contained">Learn More</Button>
          </NavLink>
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