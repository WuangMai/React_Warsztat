import React, {useEffect, useState} from 'react';
import Operation from "./Operation";
import {deleteOperation, getOperations, setOperation} from "../api/operations";

const Task = ({data}) => {
    const [operations, setOperations] = useState([]);
    const [activeForm, setActiveForm] = useState(false);
    const [newOperation, setNewOperation] = useState({description: "", timeSpent: 0})

    useEffect(() => {
        getOperations(data.id, setOperations);
    }, []);

    function handleSubmit(e, id) {
        e.preventDefault();
        setOperation(id, newOperation, setOperations);
        setActiveForm(false);
    }

    function handleInput(e) {
        setNewOperation(prev => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    function deleteAction(id) {
        deleteOperation(id).then(() => getOperations(data.id, setOperations));
    }

    return (
        <>
            <section className="card mt-5 shadow-sm">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <div>
                        <h5>{data.title}</h5>
                        <h6 className="card-subtitle text-muted">{data.description}</h6>
                    </div>

                    <div>
                        {data.status === "open" && (
                            <button className="btn btn-info btn-sm mr-2" onClick={() => setActiveForm(!activeForm)}>
                                Add operation
                                <i className="fas fa-plus-circle ml-1"/>
                            </button>)}

                        {data.status === "open" && (<button className="btn btn-dark btn-sm">
                            Finish
                            <i className="fas fa-archive ml-1"/>
                        </button>)}

                        {operations.length <= 0 && (
                            <button className="btn btn-outline-danger btn-sm ml-2">
                                <i className="fas fa-trash false"/>
                            </button>)}
                    </div>
                </div>

                {activeForm && (<div className="card-body">
                    <form onSubmit={e => handleSubmit(e, data.id)}>
                        <div className="input-group">
                            <input type="text"
                                   className="form-control"
                                   name="description"
                                   placeholder="Operation description"
                                   value={newOperation.description}
                                   onChange={e => handleInput(e)}
                            />

                            <div className="input-group-append">
                                <button className="btn btn-info">
                                    Add
                                    <i className="fas fa-plus-circle ml-1"/>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>)}
                <ul className="list-group list-group-flush">
                    {operations.map(el => <Operation key={el.id} singleOperation={el}
                                                     onDeleteOperation={deleteAction}/>)}
                </ul>
            </section>
        </>
    );
};

export default Task;