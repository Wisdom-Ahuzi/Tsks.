import React, { useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { useNavigate, NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import{v4 as uuidv4} from "uuid";

const Account = ({logout,email,handleClose,closeId,extendId, side,name}) => {

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
              <img src="https://wallpaper.dog/large/17058403.png" alt="" />
             <div>
              <p>{name}</p>
                <span>
                  <p>Free</p>
                </span>
             </div>
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
                <p>Developer</p>
                <p>Wisdom </p>
              </span>

              <a href="https://github.com/Wizzy-05" target= "_blank" rel="noreferrer noopener">
                <Button variant="contained" title="subscribe" className='black' >See Github</Button>
              </a>
             </div>
            <div className="proBenefits">
              <a href="https://github.com/Wizzy-05" target= "_blank" rel="noreferrer noopener">Visit the developer <img src={require("../assets/Desktop/goto.png")} alt="goto" /></a>
            </div>
            </div>
            <Button className='signOut' onClick={logout} variant="contained" title="Logout" >Sign Out</Button>
          </div>
        </div>
      </div>
  )
}

export default Account