import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const side = [
    {
        image:require("../assets/Desktop/school.png"),
        text:"School",
        alt:"School Image"
    },
    {
        image:require("../assets/Desktop/personal.png"),
        text:"Personal",
        alt:"Personal Image"
    },
    {
        image:require("../assets/Desktop/design.png"),
        text:"Design",
        alt:"Design Image"
    },
    {
        image:require("../assets/Desktop/grocery.png"),
        text:"Grocery",
        alt:"Grocery Image"
    }
]

const Sidebar = ({closeId}) => {


  return (
    <div className='SideBar' id={closeId}>
        <div className="sidebarItems">
            <p>Collections</p>
            {side.map(tab => {
                return(
                    <span key={uuidv4()}>
                        <img src={tab.image} alt={tab.alt}/>
                        <p>{tab.text}</p>
                    </span>
                )
            })}
        </div>
    </div>
  )
}

export default Sidebar