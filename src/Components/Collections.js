import {React, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header';
import Sidebar from './Sidebar';
const Collections = ({logout,handleClose,closeId,extendId}) => {
    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token');
        if (!authToken) {
            navigate('/SignIn');
        }
    },[])

  return (
    <div className='Collections' id={extendId}>
        <Header logout={logout} handleClose={handleClose}/>
        <Sidebar closeId= {closeId}/>
        Collections Page
    </div>
  )
}

export default Collections