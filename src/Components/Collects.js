import {React, useRef, useState} from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import{v4 as uuidv4} from "uuid";

const Collects = ({title}) => {


    const[tasks,setTasks]=useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks([...tasks,{name:taskRef.current.value}]);
        taskRef.current.value = "";
    }

    const taskRef = useRef(null);

    const handleAddTask = (e) => {
        taskRef.current.value = e.target.value;
    }



  return (
    <div className="innerSchool">
        <div className="schoolDets">
            <span className='schoolHeader'>
                <NavLink to="/Collections"> <img src={require("../assets/Desktop/back.png")} alt="Goto Dashboard" title="Dashboard" /> </NavLink>
                <p>{title}</p>
            </span>

            <span>
                <img src={require("../assets/Desktop/back.png")} alt="Goto Dashboard" title="Dashboard" />
                <form onSubmit={handleSubmit}>
                    <input type="text" ref={taskRef} placeholder='Add a Task'  onChange={(e) => {handleAddTask(e)}} />
                </form>
            </span>

            <h4>{tasks.map(task => (
                <p key={uuidv4()}>{task.name}</p>
            ))}</h4>
        </div>
    </div>
  )
}

export default Collects