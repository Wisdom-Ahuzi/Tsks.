import {React, useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Header from './Header';
import Sidebar from './Sidebar';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';


const Collections = ({logout,handleClose,closeId,extendId, side}) => {
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
        <Sidebar closeId= {closeId} side = {side}/>
        <div className="CollectionDets">
         <div className="innerCollectionDets">
            <h3>Collections</h3>
            <Button className='black' variant="contained">All Collections</Button>
            <div className="collectionItems">
            {side.map(item => {
              return(
                <NavLink to={"/" + item.text} key={uuidv4()}>
                  <div className="collects">
                    <img src={item.image} alt={item.alt} title={item.title}/>
                    <p>{item.text}</p>
                  </div>
                </NavLink>
              )
            })} 
            </div>
         </div>
        </div>
    </div>
  )
}

export default Collections