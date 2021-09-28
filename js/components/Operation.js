import React, {useState} from 'react';

const Operation = ({singleOperation}) => {
    const [showingForm, setShowingForm] = useState(false);

    return (
        <>
            {
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div>{singleOperation.description}
                        {singleOperation.timeSpent > 0 &&
                        <span className="badge badge-success badge-pill ml-2">{singleOperation.timeSpent}</span>}
                    </div>
                    <div>
                        {!showingForm && (<>
                            <button className="btn btn-outline-success btn-sm mr-2"
                                    onClick={() => setShowingForm(true)}>
                                Add time
                                <i className="fas fa-clock ml-1"/>
                            </button>
                            <button className="btn btn-outline-danger btn-sm"><i className="fas fa-trash"/></button>
                        </>)}
                    </div>

                    {showingForm && (
                        <form>
                            <div className="input-group input-group-sm">
                                <input type="number"
                                       className="form-control"
                                       placeholder="Spent time in minutes"
                                       style={{width: "12rem"}}/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-success">
                                        <i className="fas fa-save"/></button>
                                    <button className="btn btn-outline-dark" onClick={() => setShowingForm(false)}>
                                        <i className="fas fa-times false"/>
                                    </button>
                                </div>
                            </div>
                        </form>)}

                </li>
            }
        </>
    );
};

export default Operation;