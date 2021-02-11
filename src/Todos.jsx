import axios from "axios";
import { useEffect, useState } from "react";
import loader from "./assets/loader.gif";
import { Link } from "react-router-dom";
const Todos = () => {
   const [todos, setTodos]= useState();
   
   useEffect(() => {
    let mounted = true;
    axios.get(`https://jsonplaceholder.typicode.com/todos` )
    .then(res => {
      const responseTodos = res.data;
      if (mounted) {
     setTodos( responseTodos);
      }
    })  

    return () => {
        mounted = false;
      };
}, [])

    return (
      <div>
  <h3  style={{textAlign: 'center',}}>Todo list</h3>
{
todos ? 

<div>
{todos.map(todo =>{
const {id,completed, title}= todo;
return (
  <div key={id} >
    <Link to={`/todo/${id}`}> <h2>{title }</h2>  </Link>
  <p>{`Completed: ${completed}`}</p><br/>
  </div>
)}
)}
</div>
    
 : 

 <img src={loader} alt="loader"  /> 
 
 }
      </div>
     
      );
}
 
export default Todos;
