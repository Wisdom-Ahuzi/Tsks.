import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from "react-router-dom";

const Header = ({logout,handleClose}) => {



  return (
    <div className='Header'>
        <div className="headerOne">
            <img onClick={handleClose}  src={require("../assets/Desktop/hamburger.png")} alt="Hamburger" title='Hamburger' />
            <li className="dashboardHeader">
                <NavLink to="/Dashboard"><img src={require("../assets/Desktop/dashboard.png")} alt="Dashboard Icon" title='Dashboard Icon'/></NavLink>
                <NavLink to="/Dashboard">Dashboard</NavLink>
            </li>
            <li className="collectionHeader">
              <NavLink to="/Collections"><img src={require("../assets/Desktop/collections.png")} alt="Collections Icon" title="Collections Icon" /></NavLink>
              <NavLink to="/Collections">Collections</NavLink>
            </li>
        </div>
        <Outlet/>

        <div className="headerTwo">
            <NavLink to="/Account" className="acc"><img src={require("../assets/Desktop/addTask.png")} alt="My Account" title="My Account" /></NavLink>
            <img onClick={logout} src={require("../assets/Desktop/logout.png")} alt="Logout" title="Logout" />
        </div>
    </div>
  )
}

export default Header