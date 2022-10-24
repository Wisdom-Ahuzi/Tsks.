import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import{sendPasswordResetEmail} from "firebase/auth";

const SignIn = ({setEmail, setPassword,handleSign, errors, email, authentication}) => {

 
  return (
    <div className='Sign'>
        <div className="signIn">
            <h3>Sign in.</h3>
            <div className="authenticate">   
                <TextField
                  id="outlined-basic" 
                  placeholder="Email"
                  type="Email"
                  variant="outlined" 
                  onChange = { (e)  =>  setEmail(e.target.value)}
                />
                <TextField
                  id="outlined-password-input"
                  type="password"
                  placeholder='Password'
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                /> 
                  <span className='loginErrors'>{errors.emailError}</span> 
                  <span className='loginErrors'>{errors.passwordError}</span>
              
                <NavLink to="" >
                    <Button className='black' variant="contained" onClick={handleSign}>Sign in</Button>
                </NavLink>
            </div>
            <p>Don't have an account? <span> <NavLink to="/SignUp" >Create Account</NavLink> <br /> <br /> <NavLink> Forgot Password?</NavLink></span></p>
        </div>
    </div>
  )
}

export default SignIn