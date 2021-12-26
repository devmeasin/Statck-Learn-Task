import React from 'react';

const Filter = ({filterTask}) => {

    const {state, dispatch} = filterTask;

    const filterTaskHandler = (filterData) => {   
        dispatch({type: 'filter', payload: filterData});
    }


    return (
        <div>
            <ul className="nav nav-pills todo-nav">
                <li className="nav-item all-task active font-weight-bold">
                    <button onClick={() => filterTaskHandler('all')} className="nav-link"><i className="bi bi-reply-fill"></i>All</button>
                </li>

                <li className="nav-item completed-task font-weight-bold">
                    <button onClick={() => filterTaskHandler('completed')} className="nav-link">Completed <i className="bi bi-chat-square-quote-fill"></i></button>
                </li>

                <li className="nav-item active-task font-weight-bold">
                    <button onClick={() => filterTaskHandler('incomplete')} className="nav-link">inCompleted <i className="bi bi-chat-square-quote"></i></button>
                </li>
            </ul>
            <hr/>
        </div>
    )
}

export default Filter
