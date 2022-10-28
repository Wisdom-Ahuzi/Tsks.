import { areArraysEqual } from '@mui/base';
import {React, useRef, useState} from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import{v4 as uuidv4} from "uuid";

const Collects = ({title}) => {


    const[tasks,setTasks]=useState([]);
    const[del,setDel] = useState("");
    const[num,setNum] = useState(0);
    const[undone,setUndone] = useState([]);
    const[completed,setCompleted] = useState([]);
    const[completedNum, setCompletedNum] = useState(0);
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
        setNum(0);
        setCompletedNum(0);


       const filtered = tasks.filter((completedTask) => {
        if (task === completedTask) {
            return completedTask
        }else{
            // console.log(completedTask);
        }
       })

       filtered.forEach((fil) => {
            setCompleted([...completed,fil]);

       })
    }



    
  return (
    <div className="innerSchool">
        <div className="schoolDets">
            <span className='schoolHeader'>
                <NavLink to="/Collections"> <img src={require("../assets/Desktop/back.png")} alt="Dashboard" title="Dashboard" /> </NavLink>
                <p>{title}</p>
            </span>

            <span>
                <img src={require("../assets/Desktop/addTask.png")} alt="Add Tasks" title="Add Tasks" />
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
                    <img src={require("../assets/Desktop/concept.png")} alt="" />
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
                            defaultChecked />
                            <del >{com.name}</del>
                            <img src={require("../assets/Desktop/concept.png")} alt="" />
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