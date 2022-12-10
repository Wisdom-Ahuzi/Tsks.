import React, {useState,useEffect} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { getAuth, updateEmail } from "firebase/auth";


const UpdateEmail = () => {

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token');
        if (!authToken) {
            navigate('/SignIn');
        }
    },[]);

    let navigate = useNavigate();

    const [updateMail,setUpdateMail] = useState("");

    const handleUpdateMail = () =>{
        const auth = getAuth();
        updateEmail(auth.currentUser, updateMail)
        .then(() => {
            sessionStorage.getItem("userEmail")
            sessionStorage.setItem("userEmail",updateMail)
            navigate('/Account');
        }).catch((error) => {
            console.log("error mailUpdate:",error);
        });

    }


  return (
    <div className='Sign'>
        <div className="disName">
            <h3>Update Email</h3>
            <div className="authenticate">   
                <TextField
                  id="outlined-basic" 
                  placeholder="Email"
                  type="Email"
                  variant="outlined" 
                  onChange = {(e) => {
                    setUpdateMail(e.target.value);
                }}
                />
                {/* <span className='loginErrors'>{errors.emailError}</span>                */}
                <Button className='black' variant="contained" onClick={handleUpdateMail}>Update Email</Button>
            </div>
        </div>
    </div>
  )
}

export default UpdateEmail