import axios from "axios";
import { useEffect, useState } from "react";


const TodoList = () => {
   const [todos, setTodos]= useState();
   useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`)
    .then(res => {
      const responseTodos = res.data;
     setTodos( responseTodos);
    })  
}, [])

    return (
      <div>
  <h1>Todo list</h1>
{todos && todos.map(todo =>{
const {id,userId, title}= todo;
return (
  <div key={id}>
  <h5>{title}</h5>
  <h6>Assigned to user: {userId}</h6>
  </div>
)
}

)}
      </div>
     
      );
}
 
export default TodoList;