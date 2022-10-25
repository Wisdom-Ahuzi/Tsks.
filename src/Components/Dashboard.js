import React, { useEffect } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import Header from './Header';
import Sidebar from './Sidebar';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';



const Dashboard = ({authentication, name,email,password,logout,handleClose,closeId,extendId,side}) => {

    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token');
        if (!authToken) {
            navigate('/SignIn');
        }
    },[])

    const dashItems= [
        {
            icon:require("../assets/Desktop/design.png"),
            word: "design",
            to:"/Design"
        },
        {
            icon:require("../assets/Desktop/school.png"),
            word: "school",
            to:"/School"
        }
        
    ]

  return (
    <div className='Dashboard' id={extendId}>    
        <Header logout={logout} handleClose = {handleClose}/>
        <Sidebar closeId= {closeId} side = {side}/>
        <div className="innerDashboard">
           <div className="dashboardInfo">
                <h4>Dashboard</h4>
                <h2>Hey, <br /> {sessionStorage.getItem("Name")}</h2>
                <Button className='black' variant="contained">Daily Overview</Button>
                {dashItems.map(item => {
                    return(
                    <div className="overview" key={uuidv4()}>
                        <div className="overviewHead">
                            <img src={item.icon} alt="Goto Dashboard"  /> 
                            <p>{item.word}</p>
                        </div>
                        <div className="overviewLink">
                            <NavLink to={item.to}> Go to {item.word} <img src={require("../assets/Desktop/logout.png")} alt="GoTo" title="GoTo" /> </NavLink>
                        </div>
                    </div>
                    )
                })}
           </div>
        </div>
    </div>
  )
}

export default Dashboard