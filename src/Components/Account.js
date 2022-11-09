import React, { useState,useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { useNavigate, NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import{v4 as uuidv4} from "uuid";
import { display } from '@mui/system';
import { getStorage, ref } from "firebase/storage";

const Account = ({logout,disName,email,handleClose,closeId,extendId, side,name}) => {

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
      name:name,
      edit : "Edit",
      navigate: "/UpdateDisplayName"
    },
    {
      text:"Email",
      name:email,
      edit : "Edit",
      navigate: "/UpdateEmail"

    },
    {
      text:"Password",
      name:".......",
      edit : "Change",
      navigate: "/UpdatePassword"
    }
  ] 



  

  return (
    <div className='Account' id={extendId}>
        <Header logout={logout} handleClose = {handleClose}/>
        <Sidebar closeId= {closeId} side = {side}/>
        <div className="myAccount">
          <div className="accountDets">
            <span className='myAccountSpan'>
              <NavLink to="/Dashboard"> <img src={require("../assets/Desktop/back.png")} alt="Goto Dashboard" title="Dashboard" /> </NavLink>
              <p>My Account</p>
            </span>

            <div className='accountImage'>
              <img src={require("../assets/Desktop/profile.jpeg")} alt="" />
              {/* <input type="file" name="" id=""  /> */}
              {/* <button></button> */}
              <p>{name}</p>
            </div>

            <div className="accountItems">
            {accountDetails.map(account => {
              return(
                <div key={uuidv4()}>
                  <span>
                    <p>{account.text}</p>
                    <p>{account.name}</p>
                  </span>

                  <NavLink to={account.navigate} >
                    <Button className='edit' variant="contained">{account.edit}</Button>
                  </NavLink>
                </div>
              )
            })}

            </div>
            <div className="pro">
             <div className="first">
              <span>
                <p>Subscription</p>
                <p>Tsks Free</p>
              </span>

              <NavLink to="/">
                <Button variant="contained" title="subscribe" className='black' >Upgrade to Pro</Button>
              </NavLink>
             </div>
            <div className="proBenefits">
              <NavLink to="/">See the pro Benefits <img src={require("../assets/Desktop/goto.png")} alt="goto" /></NavLink>
            </div>
            </div>
            <Button className='signOut' onClick={logout} variant="contained" title="Logout" >Sign Out</Button>
          </div>
        </div>
      </div>
  )
}

export default Account