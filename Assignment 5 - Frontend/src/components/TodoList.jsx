import React, { useEffect, useState } from 'react';

const TodoList = ({funObj ,taskFun}) => {

    const [editTask, setEditTask] = useState('');
    const {state, dispatch} = taskFun;

    const shortArray = (shortData) => {
        if(shortData === 'completed') {
            return state?.taskList.filter((item) => item.isDone === true);
        } else if(shortData === 'incomplete') {
            return state?.taskList.filter((item) => item.isDone !== true);
        } else {
            return state?.taskList;
        }
    }


    let loopData = shortArray(state.filter)

    useEffect(()=> {
        loopData = shortArray(state.filter);
    }, [state.filter]);

    const  {doneTask , editMode , deleteTask} = funObj;
    
    // item list editTaskHandler using onCLick
    const editTaskHandler = (taskInd) => {
        editMode(taskInd);
        let data = state?.taskList[taskInd]?.data;
        setEditTask(data);
        dispatch({type: 'edit_task', payload: {ind : taskInd , data : editTask}})

    }

    // item list editTaskHandler using Enter key
    const editTaskHandlerEnter = (event, taskInd) => {

        if (event.key === 'Enter') {
             editMode(taskInd);
             let data = state?.taskList[taskInd]?.data;
             setEditTask(data);
             dispatch({type: 'edit_task', payload: {ind : taskInd , data : editTask}})
        }

    }

    console.log(shortArray(state.filter))
   
    return (

        <div className="todo-list">
            {
              loopData.length ?  loopData.map((task, ind) => (

                        <div className="todo-item" key={ind}>
                                  <div className="row py-2">
                                   <div className="col-8">
                                      {
                                          !task.editMode ? 
                                              <h6 onClick ={() => editTaskHandler(ind)} className="p-1 m-0">
                                                 {
                                                     !task.isDone ? <strong>{task?.data}</strong> : <strong><del>{task?.data}</del></strong>
                                                 } 
                                              </h6> : 
                                          <div className="mb-3">
                                              <input type="text" className="form-control" value = {editTask} onChange={(event) => setEditTask(event.target.value)} onKeyDown={(event) => editTaskHandlerEnter(event , ind)}/>
                                           </div>
                                      } 
                                   </div>
                                   <div className="col-4">
   
                                       <div className="action_area text-right">
   
                                           <button type="button" className="btn btn-primary" onClick ={() => editTaskHandler(ind)}> 
                                               {
                                               task.editMode ? 
                                               <i className="bi bi-eye-slash"></i> :
                                               <i className="bi bi-pencil-square"></i>
                                               }
                                               
                                           </button>
                                           <button type="button" className={`btn ${!task.isDone ? 'btn-success' : 'btn-warning'} mx-2`} onClick ={() => doneTask(ind)} > {
                                                      !task.isDone ?
                                                      <i className="bi bi-check2-circle"></i>
                                                      :
                                                      <i className="bi bi-check2-all"></i>
                                                  }
                                           </button>
                                           <button type="button" className="btn btn-danger" onClick={() => {deleteTask(task.id)}}>
                                               <i className="bi bi-trash"></i>
                                           </button>
                                       </div>
                                   </div>
                               </div>
                        </div> 
                )) : 

                <h3 className="text-center text-waring">😎Data not Found! 🤔</h3>
            }

        </div>
    )
}

export default TodoList;