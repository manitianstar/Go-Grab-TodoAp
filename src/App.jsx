import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState,useReducer } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

const todoItemsReducer=(currTodoItems,action)=>{
  let newTodoItems=currTodoItems;
  if(action.type==='NEW_ITEM'){
   newTodoItems=[...currTodoItems, {name: action.payload.itemName,dueDate: action.payload.itemDueDate}]
  }
  else if(action.type==='DELETE_ITEM'){
    newTodoItems=currTodoItems.filter((item)=>item.name!==action.payload.itemName)
  }
  return newTodoItems;
}

function App() {
  
  //const [todoItems,setTodoItems]=useState([]);
 const[todoItems,dispachTodoItems]=useReducer(todoItemsReducer,[]);
  const handleNewItem=(itemName,itemDueDate)=>{
    const newItemAction={
     type: "NEW_ITEM",
     payload:{
      itemName,
      itemDueDate,
     }
    };
    dispachTodoItems(newItemAction);
  //  console.log(`new item added: ${itemName} Date:${itemDueDate}`);
  
  }
  const handleDeleteItem=(todoItemName)=>{

  const deleteItemAction={
    type: "DELETE_ITEM",
    payload:{
     itemName:todoItemName,
    }
   };
   dispachTodoItems(deleteItemAction);
  }
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
     <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;