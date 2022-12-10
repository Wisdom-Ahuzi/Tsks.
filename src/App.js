import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";
import Error from "./Components/Error";
import Account from './Components/Account';
import Collections from "./Components/Collections";
import { firebaseApp } from "./Components/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { useState,useEffect } from "react";
import School from "./Components/School.js";
import Personal from "./Components/Personal";
import UpdateDisplayName from "./Components/UpdateDisplayName";
import UpdateEmail from "./Components/UpdateEmail";
import UpdatePassword from "./Components/UpdatePassword";
import Design from "./Components/Design";
import Work from "./Components/Work";
import {db} from "./Components/firebaseConfig";
import {setDoc,doc,serverTimestamp} from "firebase/firestore";
import Variant from "./Components/Variant";
import House from "./Components/House";


function App() {

  const authentication = getAuth();
  const navigate = useNavigate();


  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (!authToken) {
      navigate('/LandingPage')
    }
  },[])

  const[email,setEmail] = useState("");
  const[password,setPassword] = useState(" ");
  const[name,setName] = useState("");

  //Errors in signing up or logging in
  const[errors,setErrors] = useState({
    emailError:"",
    passwordError:"",
    emailInUse:""
  })

  //Login and sign up
  const handleSign =  (id) => {
    if (id === 1) {
     createUserWithEmailAndPassword(authentication, email, password)
      .then(async (response) => {
        navigate('./Dashboard');
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
        setName(authentication.currentUser.displayName);
        sessionStorage.setItem("userDisplayName", authentication.currentUser.displayName);
        sessionStorage.setItem("userEmail",email);
        sessionStorage.setItem("currentuserId", authentication.currentUser.uid);

        // console.log(response);

        updateProfile(authentication.currentUser, {
          displayName: name
        })

        name.timestamp = serverTimestamp();
        email.timestamp = serverTimestamp();

        await setDoc(doc(db,"users",name), authentication.currentUser.uid);
        sessionStorage.setItem("currentuserId", authentication.currentUser.uid);

      })      
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          setErrors((prev) => {
            return{...prev,emailInUse:"Email Already In Use"}
          })
        }else{
          setErrors((prev) => {
            return{...prev,emailInUse:""}
          })
        }   
        
      })
    }


    if (id === 2) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/Dashboard');
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
          setName(authentication.currentUser.displayName);
          sessionStorage.setItem("userDisplayName", authentication.currentUser.displayName);
          sessionStorage.setItem("userEmail",email);
          sessionStorage.setItem("currentuserId", authentication.currentUser.uid);
         })
        .catch((error) => {
          if(error.code === 'auth/wrong-password'){
            setErrors((prev) => {
              return{...prev,passwordError:"Please Check the Password"}
            })
          }else{
            setErrors((prev) => {
              return{...prev,passwordError:""}
            })
          }
          if(error.code === 'auth/user-not-found'){
            setErrors((prev) => {
              return{...prev,emailError:"Please Check the Email"}
            })
          }else{
            setErrors((prev) => {
              return{...prev,emailError:""}
            })
          }
        });
    }
  }

  //Log Out
  const handleLogout = () => {
    sessionStorage.removeItem('Auth Token');
    sessionStorage.removeItem('currentuserId');
    sessionStorage.removeItem('userEmail');
    sessionStorage.removeItem('userDisplayName');
    navigate('/LandingPage');
  }

  //Close and open Tab
  const[closeId,setCloseId] = useState("");
  const[extendId,setExtendId] = useState("");
  const handleClose = () => {
    if (closeId === "") {
      setCloseId("close");
      setExtendId("extend")
    }else {
      setCloseId("");
      setExtendId("")
    }
  }
 
  //Collections
  const side = [
    {
        image:require("./assets/Desktop/school.png"),
        text:"School",
        alt:"School Image",
        title:"School "
    },
    {
        image:require("./assets/Desktop/personal.png"),
        text:"Personal",
        alt:"Personal Image",
        title:"Personal "
    },
    {
        image:require("./assets/Desktop/design.png"),
        text:"Design",
        alt:"Design Image",
        title:"Design "
    },
    {
        image:require("./assets/Desktop/grocery.png"),
        text:"Work",
        alt:"Grocery Image",
        title:"Grocery "
    },
    {
      image:require("./assets/Desktop/variant.png"),
      text:"Variant",
      alt:"Variant Image",
      title:"Varient"
    },
    {
      image:require("./assets/Desktop/house.png"),
      text:"House",
      alt:"House Image",
      title:"House "
    }
  ]

  //Update Display Name
  const [disName,setDisName] = useState("");

  const handleUpdate = () =>{
    const auth = getAuth();
    updateProfile(auth.currentUser, {
    displayName: disName
    }).then(() => {
      sessionStorage.getItem("userDisplayName")
      sessionStorage.setItem("userDisplayName",disName)
      navigate('/Account');
      console.log(auth.currentUser);
      setName(disName);
    }).catch((error) => {
        console.log("error:",error);
    });
  }  

    return (
      <div className="App">
          <Routes>
            <Route
              path="*"
              element={<Error/>}
            />
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/Dashboard" element={<Dashboard handleClose = {handleClose} side = {side} closeId= {closeId} extendId= {extendId} name = {name} authentication = {authentication} disName = {disName}  logout = {handleLogout}/> }></Route>
            <Route path="Account" element={<Account handleClose = {handleClose} side = {side} name= {name} closeId= {closeId} extendId= {extendId} disName = {disName} email = {email}   logout = {handleLogout}/>}></Route>    
            <Route path="Collections" element={<Collections handleClose = {handleClose} side = {side} closeId= {closeId}  extendId= {extendId}/>}></Route>    
            <Route path="School" element={<School handleClose = {handleClose} side = {side} closeId= {closeId} extendId= {extendId}/>}></Route>    
            <Route path="Personal" element={<Personal handleClose = {handleClose} side = {side} closeId= {closeId} extendId= {extendId}/>}></Route>    
            <Route path="Design" element={<Design handleClose = {handleClose} side = {side} closeId= {closeId} extendId= {extendId}/>}></Route>    
            <Route path="Variant" element={<Variant handleClose = {handleClose} side = {side} closeId= {closeId} extendId= {extendId}/>}></Route>    
            <Route path="House" element={<House handleClose = {handleClose} side = {side} closeId= {closeId} extendId= {extendId}/>}></Route>  
            <Route path="Work" element={<Work handleClose = {handleClose} side = {side} closeId= {closeId} extendId= {extendId}/>}></Route>    
            <Route path="UpdateDisplayName" element={<UpdateDisplayName setName = {setName} setDisName = {setDisName} disName = {disName}  handleUpdate = {handleUpdate}/>}></Route>
            <Route path="UpdateEmail" element={<UpdateEmail/>}></Route>
            <Route path="UpdatePassword" element={<UpdatePassword/>}></Route>
            <Route path="/LandingPage" element={<LandingPage/>} />
            <Route path="/SignIn" element={<SignIn setEmail = {setEmail} errors = {errors} setPassword = {setPassword} email = {email} handleSign = {() => handleSign(2)}/>} ></Route>
            <Route path="/SignUp" element={<SignUp setName = {setName} errors = {errors}  setEmail = {setEmail} setPassword = {setPassword} handleSign = {() => handleSign(1)}/>}></Route>
          </Routes>
      </div>
    );
}

export default App;
