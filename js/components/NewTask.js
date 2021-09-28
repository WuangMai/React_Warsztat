import React, {useState} from 'react';

const NewTask = ({onNewTask}) => {
    const [task, setTask] = useState({title: "", description: "", status: "open"});

    function handleSubmit(e) {
        e.preventDefault();
        if (typeof onNewTask === "function") {
            onNewTask(task);
        }
    }

    function handleInput(e) {
        setTask(prev => {
                return {
                    ...prev, [e.target.name]: e.target.value
                }
            })
    }

    return (
        <div className="card shadow">
            <div className="card-body">
                <h1 className="card-title">New task</h1>
                <form onSubmit={e => handleSubmit(e)}>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               name="title"
                               placeholder="Title"
                               value={task.title}
                               onChange={e => handleInput(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               name="description"
                               placeholder="Description"
                                value={task.description}
                               onChange={e => handleInput(e)}
                        />
                    </div>
                    <button className="btn btn-info">
                        Add task
                        <i className="fas fa-plus-circle ml-1"></i>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewTask;