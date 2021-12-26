import React from 'react';
import TodoList from './TodoList';


const Todo = ({taskFun}) => {

    const {state, dispatch} = taskFun;
    
    const doneTask = (taskInd) => {
        let isTrue = state.taskList[taskInd].isDone;
        dispatch({type: 'done_task', payload: {ind : taskInd , value : !isTrue}});
    }

    const editMode = (taskInd) => {
        let isTrue = state.taskList[taskInd].editMode;
        dispatch({type: 'edit_mode', payload: {ind : taskInd , mode : !isTrue}});
    }

    const deleteTask = (taskInd , ) => {
        dispatch({type: 'delete_task', payload: taskInd});
    }
    
    const funObj = {doneTask , editMode , deleteTask};
    

    return (

        <TodoList funObj = {funObj} taskFun={taskFun} />
    )
}

export default Todo;
