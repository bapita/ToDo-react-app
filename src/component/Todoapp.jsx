import React, {useState} from 'react';
import todo1 from "../images/todo1.svg";
import todo from "../images/todo.svg";

const Todoapp = () => {
    const [inputData, setInputData] = useState("");
    const[task, setTask] = useState([]);
    const[toggleSubmit, setToggleSubmit] = useState(true);
    const[isEditItem, setIsEditItem] = useState(null);

/************** Add Task ***************/
    const addTask = () => {
        if(!inputData) {
            alert("Empty feild can not be a task. LOL!")
        }else if(inputData && !toggleSubmit){
            setTask(
                task.map((currentElem) => {
                    if(currentElem.id === isEditItem) {
                        return {
                            ...currentElem,
                            name: inputData
                        }
                    }
                    return currentElem;
                })
            )
                setToggleSubmit(true);
                setInputData('');
                setIsEditItem(null);
        }
        else{
            const allInputData = {
                id: new Date().getTime().toString(), // to get unique ID 
                name: inputData
            }
            setTask([...task,allInputData]); // to save previous data's state we used spread operator i.e. ...
            setInputData('');
        }
    }

/************** Edit Task ***************/
    const editTask = (index) => {
        let newEdittask = task.find((currentElem) => {
            return currentElem.id === index
        })
        setToggleSubmit(false);
        setInputData(newEdittask.name);
        setIsEditItem(index);
    }

/************** Delete Task ***************/
    const deleteTask = (index) => {
        const updatedTasks = task.filter((currElm) => {
            return currElm.id !== index;
        })
        setTask(updatedTasks);
    }


/************** Delete / Remove All ***************/
    const removeAll = () => {
        return setTask([]);
    }
/************** End of Functions ***************/    
    return(
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt="" /><img src={todo1} alt="" />
                        <figcaption>Add your List Here 📓</figcaption>
                    </figure>
                    <div className="addItems">
                        <input
                        type="text"
                        placeholder=" ✍️ Write Tasks Here"
                        value={inputData}
                        onChange={(event) =>  setInputData(event.target.value) } />
                        {
                            toggleSubmit ? <i className="fa fa-plus add-btn" title="Add Tasks" onClick={addTask}></i> : 
                            <i className="far fa-edit add-btn" title="Edit Task" onClick={addTask}></i> 
                        }
                        
                    </div>
                    <div className="showItems">

                        {
                            task.map((currentElement) => {
                                return(
                                    <>
                                        <div className="eachItem" key={currentElement.id}>
                                            <h3>{currentElement.name}</h3>
                                            <div className="todo-btn">

                                                <i className="far fa-edit add-btn"
                                                title="Edit Tasks"
                                                onClick={() => editTask(currentElement.id)}></i>
                                            
                                                <i className="far fa-trash-alt add-btn"
                                                title="Delete Tasks"
                                                onClick={() => deleteTask(currentElement.id)}></i>
                                        </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                        
                    </div>

                    {/* {Clear all Tasks} */}
                    <div className="showItems">
                        <button
                        className="btn effect04"
                        data-sm-link-text="REMOVE ALL"
                        onClick={removeAll}><span>CHECK LIST</span></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Todoapp;