import React from 'react';
import Task from "./Task";

const TaskList = ({tasks}) => {
    return (
        <>
            {
                tasks.map(el => <Task key={el.id} data={el} />)
            }
        </>
    );
};

export default TaskList;