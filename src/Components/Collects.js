import {React, useEffect, useRef, useState} from 'react';
import { NavLink } from 'react-router-dom';
import{v4 as uuidv4} from "uuid";
import {db} from "../Components/firebaseConfig";
import {query,collection, onSnapshot, addDoc,doc, deleteDoc} from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const Collects = ({title, General, Completed }) => {

    const dates = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const date = new Date();
    const day = dates[date.getUTCDay()];

    const[tasks,setTasks]=useState([]);
    const[completed,setCompleted] = useState([]);
    const[num,setNum] = useState(0);
    const[completedNum, setCompletedNum] = useState(0);
    const taskRef = useRef(null);
    const [valid,setValid] = useState("Add a Task");
    const authentication = getAuth();
    const[searchValue,setSearchValue] = useState("");
    const[searchId,setSearchId] = useState("showsearch");


    useEffect(() => {
        const q = query(collection(db, `${sessionStorage.getItem("currentuserId")}-${Completed}`));
        const unSubscribeTwo = onSnapshot(q, (querySnapshot) => {
            let todoArrComplete = [];
            querySnapshot.forEach(doc => {
                todoArrComplete.push({ ...doc.data(), id: doc.id });
            });
            setCompleted(todoArrComplete);
        });
        return () => unSubscribeTwo();
    },[]);


    useEffect(() => {
        const q = query(collection(db,`${sessionStorage.getItem("currentuserId")}-${General}`));
        const unSubscribe = onSnapshot(q,(querySnapshot) => {
            let todoArr = [];
            querySnapshot.forEach(doc => {
                todoArr.push({...doc.data(),id: doc.id})
            });
            setTasks(todoArr);
        })
        return () => unSubscribe() 
    },[]);

    const handleReAddedTask = async (com) => {
        await deleteDoc(doc(db, `${authentication.currentUser.uid}-${Completed}`,com.id)); 
        setCompletedNum(completed.length - 1);
        setNum(tasks.length + 1);

        await addDoc(collection(db,`${authentication.currentUser.uid}-${General}`), {
            text:com.text.text,
            day:day
        })
    }
        
    const handleExtend = () =>{
        if (searchId === "") {
            setSearchId("showsearch");
        }else{
            setSearchId("");
        }
    }
    
    const handleDone = async (task,id) => {
        await deleteDoc(doc(db, `${authentication.currentUser.uid}-${General}`,id)); 

        setCompletedNum(completed.length + 1);
        setNum(tasks.length - 1);

        tasks.forEach(async one => {
        if (one == task) {
            setCompleted([...completed,one]);
            await addDoc(collection(db,`${authentication.currentUser.uid}-${Completed}`), {
                text:one,
                day:day
            })
        }
        })

        
    }

    const handleDeleteTask = async (id) => {
        setCompletedNum(completed.length - 1);
        await deleteDoc(doc(db, `${authentication.currentUser.uid}-${Completed}`,id)); 
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        if (taskRef.current.value === "") {
            setValid("Enter a valid input");
            return
        }else{
            setValid("Add a Task");
        }

        setNum(tasks.length + 1);

        await addDoc(collection(db,`${authentication.currentUser.uid}-${General}`), {
            text:taskRef.current.value.toLowerCase(),
            day:day
        })

                
        taskRef.current.value = "";
    } 

    return (
    <div className="innerSchool">
        <div className="schoolDets">
            <span className='schoolHeader'>
                <NavLink to="/Collections"> <img src={require("../assets/Desktop/back.png")} alt="Dashboard" title="Dashboard" /> </NavLink>
                <p>{title}</p>
                <input type="text" value={searchValue} onChange={(e) => {setSearchValue(e.target.value)}} className='searchInput'id={searchId} />
                <img src={require("../assets/Desktop/search.png")} alt="" className='searchImage' title='Search'  onClick={handleExtend}/>
            </span>

            <span>
                <img src={require("../assets/Desktop/addTask.png")} alt="Add Tasks" title="Add Tasks" onClick={handleSubmit} />
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" ref={taskRef} placeholder={valid} />
                </form>
            </span>
            <h3>Tasks - {num}</h3>
            <h4>
                {tasks.filter(user => 
                user.text.includes(searchValue)).map(task => (
                <div key={uuidv4()} className="tasks">
                    <input 
                    type="checkbox"
                    name=""
                    onChange={() => {handleDone(task,task.id)}}
                    id="" />
                    <p >{task.text}</p>
                    <img src={require("../assets/Desktop/calendar.png")} alt="Date Added" title='Date Added' />
                    <p>{task.day}</p>
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
                            <del >{com.text.text}</del>
                            <img src={require("../assets/Desktop/calendar.png")} alt="Date Completed" title='Date Completed' />
                            <p>{day}</p>
                            <img src={require("../assets/Desktop/trash.png")} alt="" onClick={() =>{handleDeleteTask(com.id)}}/>
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