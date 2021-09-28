import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {getTasks, setTask} from "./api/tasks";
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({});

    useEffect(() => {
        getTasks(setTasks);

    }, [])

    useEffect(() => {
        if (newTask.title) {
            setTask(newTask, setTasks);
        }
    }, [newTask])

    return (
        <>
            <NewTask onNewTask={setNewTask}/>
            <TaskList tasks={tasks}/>
        </>
    );
};


ReactDOM.render(<App/>, document.querySelector("#app"));