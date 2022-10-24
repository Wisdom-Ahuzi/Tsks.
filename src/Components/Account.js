import React, { useState,useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { useNavigate, NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import{v4 as uuidv4} from "uuid";
import { display } from '@mui/system';

const Account = ({logout,displayName,lmail,handleClose,closeId,extendId}) => {

  const [displayMail, setDisplayMail] = useState({
    display:"",
    mail:""
  })


  let navigate = useNavigate();
  useEffect(() => {
      let authToken = sessionStorage.getItem('Auth Token');
      if (!authToken) {
          navigate('/SignIn');
      }
  },[]);

  const accountDetails = [
    {
      text:"Display Name",
      name:displayName,
      edit : "Edit"
    },
    {
      text:"Email",
      name:lmail,
      edit : "Edit"
    },
    {
      text:"Password",
      name:".......",
      edit : "Change"
    }
  ] 



  

  return (
    <div className='Account' id={extendId}>
        <Header logout={logout} handleClose = {handleClose}/>
        <Sidebar closeId= {closeId}/>
        <div className="myAccount">
          <div className="accountDets">
            <span className='myAccountSpan'>
              <NavLink to="/Dashboard"> <img src={require("../assets/Desktop/back.png")} alt="" /> </NavLink>
              <p>My Account</p>
            </span>

            <div className='accountImage'>
              <img src={require("../assets/Desktop/profile.jpeg")} alt="" />
              <p>{displayName}</p>
            </div>

            <div className="accountItems">
            {accountDetails.map(account => {
              return(
                <div key={uuidv4()}>
                  <span>
                    <p>{account.text}</p>
                    <p>{account.name}</p>
                  </span>

                  <NavLink to="" >
                    <Button className='edit' variant="contained">{account.edit}</Button>
                  </NavLink>
                </div>
              )
            })}

            </div>
            <Button className='signOut' onClick={logout} variant="contained">Sign Out</Button>
          </div>
        </div>
      </div>
  )
}

export default Account