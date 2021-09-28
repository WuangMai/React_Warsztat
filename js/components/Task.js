import React from 'react';

const Task = ({data}) => {
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
                            <i className="fas fa-plus-circle ml-1"></i>
                        </button>

                        <button className="btn btn-dark btn-sm">
                            Finish
                            <i className="fas fa-archive ml-1"></i>
                        </button>
                    </div>
                </div>

          {/*      <ul className="list-group list-group-flush">*/}
          {/*          <li className="list-group-item d-flex justify-content-between align-items-center">*/}
          {/*              <div>*/}
          {/*                  Domyślny wygląd operacji*/}
          {/*              </div>*/}

          {/*              <div>*/}
          {/*                  <button className="btn btn-outline-success btn-sm mr-2">*/}
          {/*                      Add time*/}
          {/*                      <i className="fas fa-clock ml-1"></i>*/}
          {/*                  </button>*/}

          {/*                  <button className="btn btn-outline-danger btn-sm"><i className="fas fa-trash"></i></button>*/}
          {/*              </div>*/}
          {/*          </li>*/}

          {/*          <li className="list-group-item d-flex justify-content-between align-items-center">*/}
          {/*              <div>*/}
          {/*                  Wygląd operacji po wciśnięciu "Add time"*/}
          {/*              </div>*/}

          {/*              <form>*/}
          {/*                  <div className="input-group input-group-sm">*/}
          {/*                      <input type="number"*/}
          {/*                             className="form-control"*/}
          {/*                             placeholder="Spent time in minutes"*/}
          {/*                             style={{width: "12rem"}}/>*/}
          {/*                      <div className="input-group-append">*/}
          {/*                          <button className="btn btn-outline-success"><i className="fas fa-save"></i></button>*/}
          {/*                          <button className="btn btn-outline-dark"><i className="fas fa-times false"></i>*/}
          {/*                          </button>*/}
          {/*                      </div>*/}
          {/*                  </div>*/}
          {/*              </form>*/}
          {/*          </li>*/}

          {/*          <li className="list-group-item d-flex justify-content-between align-items-center">*/}
          {/*              <div>*/}
          {/*                  Wygląd operacji po zapisie czasu*/}

          {/*                  <span className="badge badge-success badge-pill ml-2">*/}
          {/*  2h 15m*/}
          {/*</span>*/}
          {/*              </div>*/}

          {/*              <div>*/}
          {/*                  <button className="btn btn-outline-success btn-sm mr-2">*/}
          {/*                      Add time*/}
          {/*                      <i className="fas fa-clock ml-1"></i>*/}
          {/*                  </button>*/}

          {/*                  <button className="btn btn-outline-danger btn-sm"><i className="fas fa-trash"></i></button>*/}
          {/*              </div>*/}
          {/*          </li>*/}
          {/*      </ul>*/}
            </section>
        </>
    );
};

export default Task;