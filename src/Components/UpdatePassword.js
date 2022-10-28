import React, {useState,useEffect} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { getAuth, updatePassword } from "firebase/auth";


const UpdatePassword = () => {

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token');
        if (!authToken) {
            navigate('/SignIn');
        }
    },[]);

    let navigate = useNavigate();

    const [UpdateWord,setUpdateWord] = useState("");

    const handleUpdatePassword = () =>{


        const auth = getAuth();
        const user = auth.currentUser;

        updatePassword(user, UpdateWord).then(() => {
            navigate('/Account');
        }).catch((error) => {
            console.log("Password error: ",error);
        });

    }


  return (
    <div className='Sign'>
        <div className="disName">
            <h3>Update Password</h3>
            <div className="authenticate">   
                <TextField
                id="outlined-basic" 
                placeholder="Password"
                type="Password"
                variant="outlined" 
                onChange = {(e) => {
                    setUpdateWord(e.target.value);
                }}
                />
                {/* <span className='loginErrors'>{errors.emailError}</span>                */}
                <Button className='black' variant="contained" onClick={handleUpdatePassword}>Update Password</Button>
            </div>
        </div>
    </div>
  )
}

export default UpdatePassword