import React, {useEffect, useState} from 'react';
import Operation from "./Operation";
import {getOperations} from "../api/operations";

const Task = ({data}) => {
    const [operations, setOperations] = useState([]);

    useEffect(() => {
        getOperations(data.id, setOperations);
    }, []);

    return (
        <>
            <section className="card mt-5 shadow-sm">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <div>
                        <h5>{data.title}</h5>
                        <h6 className="card-subtitle text-muted">{data.description}</h6>
                    </div>

                    <div>
                        <button className="btn btn-info btn-sm mr-2">
                            Add operation
                            <i className="fas fa-plus-circle ml-1"/>
                        </button>

                        <button className="btn btn-dark btn-sm">
                            Finish
                            <i className="fas fa-archive ml-1"/>
                        </button>
                    </div>
                </div>

                <ul className="list-group list-group-flush">
                    {operations.map(el => <Operation key={el.id} singleOperation={el}/>)}
                </ul>
            </section>
        </>
    );
};

export default Task;