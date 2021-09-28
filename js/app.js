import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {getTasks} from "./api/tasks";
import NewTask from "./components/NewTask";
import Task from "./components/Task";

const App = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        getTasks(setTasks);

    }, [])
    return (
        <>
            <NewTask/>
            <Task/>
        </>
    );
};


ReactDOM.render(<App/>, document.querySelector("#app"));