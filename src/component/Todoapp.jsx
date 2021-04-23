import React, {useState} from 'react';
import todo1 from "../images/todo1.svg";
import todo from "../images/todo.svg";

const Todoapp = () => {
    const [inputData, setInputData] = useState("");
    const[task, setTask] = useState([]);

    const addTask = () => {
        if(!inputData) {
            alert("Empty feild can not be a task. LOL!")
        }else{
            setTask([...task,inputData]); // to save previous data's state we used spread operator i.e. ...
            setInputData('');
        }
    }

    const deleteTask = (id) => {
        const updatedTasks = task.filter((currElm, index) => {
            return index !== id;
        })
        setTask(updatedTasks);
    }

    const removeAll = () => {
        return setTask([]);
    }
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
                        <i className="fa fa-plus add-btn" title="Add Tasks" onClick={addTask}></i>
                    </div>
                    <div className="showItems">

                        {
                            task.map((currentElement,index) => {
                                return(
                                    <>
                                        <div className="eachItem" key={index}>
                                            <h3>{currentElement}</h3>
                                            <i className="far fa-trash-alt add-btn"
                                            title="Delete Tasks"
                                            onClick={() => deleteTask(index)}></i>
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