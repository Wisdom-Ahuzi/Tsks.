import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';

const SignUp = ({setName,setEmail, setPassword,handleSign,errors }) => {
 
  return (
    <div className='Sign'>
        <div className="signIn">
            <h3>Sign up.</h3>
            <div className="authenticate">   
                <TextField
                  id="outlined-password-input"
                  type="text"
                  placeholder='Display Name'
                  onChange={(e) => setName(e.target.value)}
                />   
                <TextField 
                 id="outlined-basic" 
                 placeholder="Email" 
                 variant="outlined" 
                 onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  id="outlined-password-input"
                  type="password"
                  placeholder='Password'
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                  <span className='loginErrors'>{errors.emailInUse}</span>
                <NavLink to="" >
                    <Button className='black' variant="contained" onClick={handleSign}>Sign up</Button>
                </NavLink>
            </div>
            <p>Already have an account? <span> <NavLink to="/SignIn" >Sign In</NavLink> <br /> <br /> <NavLink to=""> Forgot Password?</NavLink></span></p>
        </div>
    </div>
  )
}

export default SignUp