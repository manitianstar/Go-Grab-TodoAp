import { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
function AddTodo({onNewItem}) {

    // const [todoName,setTodoName]=useState("")
    // const [dueDate,setdueDate]=useState("")
    const todoNameElement=useRef();
    const DueDateElement=useRef();
    return (
      <div className="container text-center">
        <div className="row kg-row">
          <div className="col-6">
            <input type="text" ref={todoNameElement} placeholder="Enter Todo Here" />
          </div>
          <div className="col-4">
            <input type="date" ref={DueDateElement} 
            />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success kg-button" onClick={()=>{
              const todoName=todoNameElement.current.value;
              const dueDate=DueDateElement.current.value;
              todoNameElement.current.value="";
              DueDateElement.current.value="";
                onNewItem(todoName,dueDate)
                }}>
              <BiMessageAdd />
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default AddTodo;