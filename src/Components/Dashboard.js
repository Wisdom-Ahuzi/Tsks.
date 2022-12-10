import React, { useEffect,useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import Header from './Header';
import Sidebar from './Sidebar';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import {db} from "../Components/firebaseConfig";
import {query,collection, onSnapshot} from "firebase/firestore";
import { getAuth } from 'firebase/auth';


const Dashboard = ({logout,handleClose,closeId,extendId,side,name}) => {


    const authenticatio = getAuth();


    const[dashSchool,setDashSchool] = useState([]);
    const[dashDesign,setDashDesign] = useState([]);

    useEffect(() => {
        const q = query(collection(db,`${sessionStorage.getItem("currentuserId")}-SchoolGeneral`));
        const unSubscribe = onSnapshot(q,(querySnapshot) => {
            let todoArr = [];
            querySnapshot.forEach(doc => {
                todoArr.push({...doc.data(),id: doc.id})
            });
            setDashSchool(todoArr);
        })
        return () => unSubscribe() 
    },[]);

    useEffect(() => {
        const q = query(collection(db,`${sessionStorage.getItem("currentuserId")}-DesignGeneral`));
        const unSubscribe = onSnapshot(q,(querySnapshot) => {
            let todoArr = [];
            querySnapshot.forEach(doc => {
                todoArr.push({...doc.data(),id: doc.id})
            });
            setDashDesign(todoArr);
        })
        return () => unSubscribe() 
    },[]);


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
            word: "Design",
            to:"/Design",
            texts:dashDesign.map(dash => {
                return(
                    <div key={uuidv4()}>
                        <p >{dash.text}</p>
                        <span>{dash.day}</span>
                    </div>
                )
            })
        },
        {
            icon:require("../assets/Desktop/school.png"),
            word: "School",
            to:"/School",
            texts:dashSchool.map(dash => {
                return(
                    <div key={uuidv4()}>
                        <p >{dash.text}</p>
                        <span>{dash.day}</span>
                    </div>
                )
            })
        }
        
    ]


  return (
    <div className='Dashboard' id={extendId}>    
        <Header logout={logout} handleClose = {handleClose}/>
        <Sidebar closeId= {closeId} side = {side}/>
        <div className="innerDashboard">
           <div className="dashboardInfo">
                <h4>Dashboard</h4>
                <h2>Hey, <br /> {sessionStorage.getItem("userDisplayName")}</h2>
                
                <Button className='black' variant="contained">Daily Overview</Button>
                {dashItems.map(item => {
                    return(
                    <div className="overview" key={uuidv4()}>
                        <div className="overviewHead">
                            <img src={item.icon} alt="Goto Dashboard"  /> 
                            <p>{item.word}</p>
                        </div>
                        <div className="overviewBody">
                            <span>{item.texts}</span>
                        </div>
                        <div className="overviewLink">
                            <NavLink to={item.to}> Go to {item.word} <img src={require("../assets/Desktop/goto.png")} alt="GoTo" title="GoTo" /> </NavLink>
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