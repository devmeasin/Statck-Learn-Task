import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { v4 as uuid } from 'uuid';

const CreateTask = ({taskAdd}) => {

    const [createTask, setCreateTask] = useState('');

    let {state, dispatch} = taskAdd;

    const notifySuccess = () => toast.success('✔️ Task Add Success' , { theme: "colored" });
    const notifyError = () => toast.error('🙄 Empty Input Field!' , { theme: "dark" });

    const addTaskHandler = (event) => {
        event.preventDefault();
        if(createTask.length > 0) {
            dispatch({type: 'taskAdd', payload: {id : uuid() , data : createTask , editMode : false, isDone : false , }})
            setCreateTask('');
            notifySuccess();
        } else {
            notifyError();
        }
        
    }


    const addTaskHandlerEnter = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            dispatch({type: 'taskAdd', payload: {id : uuid() , data : createTask , editMode : false, isDone : false}})
            setCreateTask('');
        }

    }

    return (
        
        <div>
            <form onSubmit={addTaskHandler}>
                <div className="row">
                    <label htmlFor="createTask" className="form-label">
                        <strong>Enter Your Task Name -</strong>
                    </label>
                    <div className='col-9'>

                        <input
                            value={createTask}
                            type="text"
                            id="createTask"
                            className="form-control"
                            placeholder="✍️ What do you need to do today?"
                            onChange={(event) => {
                                setCreateTask(event.target.value)
                            }}

                            onKeyDown={(event) => addTaskHandlerEnter(event)}
                            
                            />
                    </div>
                    <div className="col-3">
                        <button type="submit" className="btn btn-primary">Add New+</button>
                    </div>
                </div>
            </form>
            <ToastContainer
               position="top-right"
               autoClose={3000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
            />
        </div>
    )
}

export default CreateTask;
