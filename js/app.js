import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {getTasks, setTask} from "./api/tasks";
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";
import {getOperations} from "./api/operations";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({});
    const [operations, setOperations] = useState({});

    useEffect(() => {
        getTasks(setTasks);

    }, []);

    // useEffect(()=>{
    //     getOperations(setOperations);
    // },[]);

    useEffect(() => {
        if (newTask.title) {
            setTask(newTask, setTasks);
        }
    }, [newTask]);

    return (
        <>
            <NewTask onNewTask={setNewTask}/>
            <TaskList tasks={tasks}/>
        </>
    );
};


ReactDOM.render(<App/>, document.querySelector("#app"));