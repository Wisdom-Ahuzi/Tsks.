import React, { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const UpdateAccount = ({setDisName,handleUpdate,disName,setName}) => {

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token');
        if (!authToken) {
            navigate('/SignIn');
        }
    },[]);

    let navigate = useNavigate();

    console.log(disName);
  return (
    <div className='Sign'>
        <div className="disName">
            <h3>Update Display Name</h3>
            <div className="authenticate">   
            <TextField
                
                id="outlined-basic" 
                placeholder="Display Name"
                type="Text"
                variant="outlined" 
                onChange = {(e) => {
                    setName(setDisName(e.target.value));
                }}
            />
            
            <Button className='black' variant="contained" onClick={handleUpdate}>Update Display Name</Button>
            </div>
        </div>
    </div>
  )
}

export default UpdateAccount