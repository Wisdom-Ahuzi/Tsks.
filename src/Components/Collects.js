import { areArraysEqual } from '@mui/base';
import {React, useMemo, useRef, useState} from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import{v4 as uuidv4} from "uuid";
import { collection, addDoc } from "firebase/firestore"; 

const Collects = ({title}) => {

    const dates = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const date = new Date();
    const day = dates[date.getUTCDay()];

    const[tasks,setTasks]=useState([]);
    const[num,setNum] = useState(null);
    const[undone,setundone] = useState([]);
    const[completed,setCompleted] = useState([]);
    const[completedNum, setCompletedNum] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks([...tasks,{name:taskRef.current.value}]);
        taskRef.current.value = "";
        setNum(num + 1);
    }

    const taskRef = useRef(null);

    const handleAddTask = (e) => {
        taskRef.current.value = e.target.value;
    }

    const handleDone = (task) => {
        setNum(num-1);
        setCompletedNum(completedNum+1);
        
       const filtered = tasks.filter((completedTask) => {
        if (task === completedTask) {
            const indexArray = tasks.indexOf(completedTask);
            tasks.splice(indexArray,1);
            return completedTask
        }
       })

       filtered.forEach((fil) => {
            setCompleted([...completed,fil]);
       })
    }


    const handleDeleteTask = (com) => {
        setCompletedNum(completedNum-1);
       completed.filter(potentialDelete => {
            if (com === potentialDelete) {
                const deleteIndex = completed.indexOf(potentialDelete);
                return completed.splice(deleteIndex,1);
            }
        });
    }


    const handleReAddedTask = (com) => {
        setNum(num + 1);
        setCompletedNum(completedNum-1)
        setTasks([...tasks,com])
        const deleteIndex = completed.indexOf(com);
        completed.splice(deleteIndex,1);
    }
    
  return (
    <div className="innerSchool">
        <div className="schoolDets">
            <span className='schoolHeader'>
                <NavLink to="/Collections"> <img src={require("../assets/Desktop/back.png")} alt="Dashboard" title="Dashboard" /> </NavLink>
                <p>{title}</p>
            </span>

            <span>
                <img src={require("../assets/Desktop/addTask.png")} alt="Add Tasks" title="Add Tasks" onClick={handleSubmit} />
                <form onSubmit={handleSubmit}>
                    <input type="text" ref={taskRef} placeholder='Add a Task'  onChange={(e) => {handleAddTask(e)}} />
                </form>
            </span>
            <h3>Tasks - {num}</h3>
            <h4>{tasks.map(task => (
                <div key={uuidv4()} className="tasks">
                    <input 
                    type="checkbox"
                    name=""
                    onChange={(e) => {handleDone(task)}}
                    id="" />
                    <p >{task.name}</p>
                    <img src={require("../assets/Desktop/calendar.png")} alt="Date Added" title='Date Added' />
                    <p>{day}</p>
                </div>
            ))}
            </h4>

            <h3>Completed - {completedNum}</h3>
            <h4>
               {
                completed.map((com) => {
                    return(
                        <div key={uuidv4()} className="complete" >
                            <input 
                            type="checkbox"
                            defaultChecked
                            onChange={() => handleReAddedTask(com)}
                             />
                            <del >{com.name}</del>
                            <img src={require("../assets/Desktop/calendar.png")} alt="Date Completed" title='Date Completed' />
                            <p>{day}</p>
                            <img onClick={() => {handleDeleteTask(com)}} src={require("../assets/Desktop/trash.png")} alt="" />
                        </div>
                    )
                })
               }
            </h4>
        </div>
    </div>
  )
}

export default Collects