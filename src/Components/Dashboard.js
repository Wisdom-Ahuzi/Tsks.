import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = ({authentication, name,email,password}) => {

    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token');
        if (authToken) {
            navigate('/Dashboard')
        }

        if (!authToken) {
            navigate('./SignIn');
        }
    },[])

    const user = authentication.currentUser;
    if (user !== null) {
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
      const uid = user.uid;
      console.log(displayName,email);
    }

    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/LandingPage');
    }

  return (
    <div>
        <h1>WELCOME TO THE DASHBOARD PAGE</h1>
        <p>{name}</p>
        <p>{email}</p>
        <p>{password}</p>
        <button onClick={handleLogout}></button>
    </div>
  )
}

export default Dashboard