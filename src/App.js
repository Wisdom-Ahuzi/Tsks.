import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";
import { firebaseApp } from "./Components/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';


import { useState,useEffect } from "react";
 
function App() {
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/Dashboard')
    }
  }, [])


  const[email,setEmail] = useState("");
  const[password,setPassword] = useState(" ");
  const[name,setName] = useState("");
  
  const[errors,setErrors] = useState({
    emailError:"",
    passwordError:"",
    emailInUse:""
  })
  const authentication = getAuth();

  const handleSign = (id) => {

    if (id === 1) {
      createUserWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
        navigate('./Dashboard');

        console.log(response);

        updateProfile(authentication.currentUser, {
          displayName: name
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
          console.log("Unable to update name");
        });

      })
      
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          // toast.error('Email Already in Use');
          setErrors((prev) => {
            return{...prev,emailInUse:"Email Already In Use"}
          })
        }   
        
      })
    }

    if (id === 2) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/Dashboard');
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          if(error.code === 'auth/wrong-password'){
            // toast.error('Please check the Password');
            setErrors((prev) => {
              return{...prev,passwordError:"Please Check the Password"}
            })
          }
          if(error.code === 'auth/user-not-found'){
            // toast.error('Please check the Email');
            setErrors((prev) => {
              return{...prev,emailError:"Please Check the Email"}
            })
          }
  
        });
    
    }

  }

  return (
    <div className="App">
        <Routes>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/Dashboard" element={<Dashboard authentication = {authentication} name = {name} email = {email} password = {password}/>}></Route>
          <Route path="/LandingPage" element={<LandingPage/>} />
          <Route path="/SignIn" element={<SignIn setEmail = {setEmail} errors = {errors} setPassword = {setPassword} handleSign = {() => handleSign(2)}/>} ></Route>
          <Route path="/SignUp" element={<SignUp setName = {setName} errors = {errors}  setEmail = {setEmail} setPassword = {setPassword} handleSign = {() => handleSign(1)}/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
