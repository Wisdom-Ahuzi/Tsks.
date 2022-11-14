import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';

const SignUp = ({setName,setEmail, setPassword,handleSign,errors }) => {
  
  return (
    <div className='Sign'>
        <div className="signIn">
            <h3>Create an account</h3>
            <h5>Let's get you started on your free account.</h5>
            <div className="authenticate">   
                <TextField
                  id="outlined-name-input"
                  type="text"
                  variant="standard" 
                  placeholder='Name'
                  onChange={(e) => setName(e.target.value)}
                />   
                <TextField 
                 id="outlined-basic" 
                 placeholder="Email" 
                 variant="standard" 
                 onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  id="outlined-password-input"
                  type="password"
                  placeholder='Password'
                  autoComplete="current-password"
                  variant="standard" 
                  onChange={(e) => setPassword(e.target.value)}
                />
                  <span className='loginErrors'>{errors.emailInUse}</span>
                <NavLink to="" >
                    <Button className='black' variant="contained" onClick={handleSign}>Sign up</Button>
                </NavLink>
            </div>
            <p>Already have an account? <span> <NavLink to="/SignIn" >Log in</NavLink> <br /> <br /></span></p>
        </div>
    </div>
  )
}

export default SignUp