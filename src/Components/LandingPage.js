import React from 'react'
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import {v4 as uuidv4} from "uuid";

const LandingPage = (handleSign) => {

  const tsksPeople = [
    {
      image:require("../assets/Mobile/back.png"),
      profession:"STUDENT",
      text:"Take notes and write theses as you like with our tools designed for students. Study has never been so easy."
    },
    {
      image:require("../assets/Mobile/teacher.png"),
      profession:"TEACHER",
      text:"Add fun to your courseware. Collect student information and assign homework with ease."
    },
    {
      image:require("../assets/Mobile/businessuser.png"),
      profession:"BUSINESS USER",
      text:"Make it easy to manage documents and files, take meeting minutes, and create roadshow presentations."
    },
    {
      image:require("../assets/Mobile/finance.png"),
      profession:"FINANCE",
      text:"Simplify the process of salary calculation, cost and profit analysis, and financial statements preparation."
    }
  ]

  return (
    <div className='LandingPage'>
      <div className='div'>

      </div>
        <nav>
          <div className="navOne">
            <img src={require('../assets/Desktop/Logo.png')} alt="" />
            <a href='#features'>Features</a>
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

      <div className="expertise" id="features">
        <h2>Harness Expertise, Unleash Innovations</h2>
        <p>
          Whether you are in the office, school, or at home, TSKS can always meet your requirements for instant creativity and collaboration in daily-life scenarios. We will always help you convey passion, inspire innovation, and stand out among peers, whether you are a business professional or a student.
        </p>

        <Button className='black' variant="contained" onClick={handleSign}>Explore Tsks</Button>

      </div>

      <div className="tsksPeople" >
        {
          tsksPeople.map((career) => (
            <div key={uuidv4()}>
              <img src={career.image} alt={career.profession} />
              <h4>{career.profession}</h4>
              <p>{career.text}</p>
            </div>
          ))
        }
      </div>

        <footer>
          <div className="innerfoot">
            <img src={require("../assets/Desktop/Logo.png")} alt="" />
            <div className="socials">
              <a href="/"><img src={require("../assets/Mobile/github.png")} alt="" /></a>
              <a href="/"><img src={require("../assets/Mobile/twitter.png")} alt="" /></a>
              <a href="/"><img src={require("../assets/Mobile/linkedin.png")} alt="" /></a>
          </div>
          </div>
        </footer>
      <div className="divs">
      </div>
    </div>
  )
}

export default LandingPage