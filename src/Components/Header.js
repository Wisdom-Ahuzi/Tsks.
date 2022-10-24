import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


const Header = ({logout,handleClose}) => {


  return (
    <div className='Header'>
        <div className="headerOne">
            <img onClick={handleClose}  src={require("../assets/Desktop/hamburger.png")} alt="Hamburger" />
            <li className="dashboardHeader">
                <NavLink to="/Dashboard"><img src={require("../assets/Desktop/dashboard.png")} alt="Dashboard Icon" /></NavLink>
                <NavLink to="/Dashboard">Dashboard</NavLink>
            </li>
            <li className="collectionHeader">
                    <NavLink to="/Collections"><img src={require("../assets/Desktop/collections.png")} alt="Collections Icon" /></NavLink>
                    <NavLink to="/Collections">Collections</NavLink>
            </li>

            <li className="collectionHeader">
                  <NavLink to="/Account"><img src={require("../assets/Desktop/collections.png")} alt="Collections Icon" /></NavLink>
                  <NavLink to="/Account">Account</NavLink>
            </li>
        </div>

        <div className="headerTwo">
            <img src={require("../assets/Desktop/search.png")} alt="Search Icon" />
            <img onClick={logout} src={require("../assets/Desktop/logout.png")} alt="Dashboard Icon" />
        </div>
    </div>
  )
}

export default Header