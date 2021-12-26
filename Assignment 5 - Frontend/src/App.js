import React, { useReducer } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import CreateTask from '../src/components/CreateTask';
import Filter from '../src/components/Filter';
// import TodoList from '../src/components/TodoList';
import Todo from '../src/components/Todo';
import logo from './logo.svg';

const initialState = {
    taskList: [],
    filter: 'all',
};

const reducer = (state, action) => {


    switch (action.type) {

        case "filter":
            return { ...state, filter: action.payload };


        case "taskAdd":
            return { ...state, taskList: [...state.taskList, action.payload] };

        case "edit_task": {

            state.taskList[action.payload.ind].data = action.payload.data;
            return {
                ...state,
                taskList: state.taskList,
            }
        }

        case "edit_mode": {

            state.taskList[action.payload.ind].editMode = action.payload.mode;

            return {
                ...state,
                taskList: state.taskList,
            }
        }


        case "done_task": {

            state.taskList[action.payload.ind].isDone = action.payload.value;

            return {
                ...state,
                taskList: state.taskList,
            }
        }

        case "delete_task":
            return {
                ...state,
                taskList: state.taskList.filter((item, index) => item.id !== action.payload)
            }

        default:
            return state;
    }


};


const App = () => {


    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="App">

            <div className="container">
                <div className="row">
                    <div className="col-md-3" />

                    <div className="col-md-6 bg-white rounded">

                        <div className="text-center ">
                            <div className="logo">
                                <img src={logo} alt="logo" />
                            </div>
                            <h2>Simple Todo App 📝</h2>
                            <hr />
                        </div>

                        <CreateTask taskAdd={{ state, dispatch }} />

                        <Filter filterTask={{ state, dispatch }} />

                        {/* <TodoList taskFun={{ state, dispatch }} /> */}
                        <Todo taskFun={{ state, dispatch }} />

                    </div>

                    <div className="col-md-3" />
                </div>
            </div>
        </div>
    );
}

export default App;