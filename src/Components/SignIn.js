import React, {  } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';


const SignIn = ({setEmail, setPassword,handleSign, errors}) => {

 
  return (
    <div className='Sign'>
        <div className="signIn">
            <h3>Welcome back</h3>
            <h5>Welcome back! please fill in your details.</h5>
            <div className="authenticate">   
                <TextField
                  id="outlined-basic" 
                  placeholder="Email"
                  type="Email"
                  variant="standard"
                  onChange = { (e)  =>  setEmail(e.target.value)}
                />
                <TextField
                  id="outlined-password-input"
                  type="password"
                  placeholder='Password'
                  autoComplete="current-password"
                  variant="standard"
                  onChange={(e) => setPassword(e.target.value)}
                />
                  <span className='loginErrors'>{errors.emailError}</span> 
                  <span className='loginErrors'>{errors.passwordError}</span>
              
                <NavLink to="" >
                    <Button className='black' variant="contained" onClick={handleSign}>Log in</Button>
                </NavLink>
            </div>
            <p>Don't have an account? <span> <NavLink to="/SignUp" >Sign up for free</NavLink></span></p>
        </div>
    </div>
  )
}

export default SignIn