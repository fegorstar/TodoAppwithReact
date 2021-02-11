import { useParams } from "react-router-dom";
import axios from "axios";
import loader from "./assets/loader.gif";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Todo = () => {
    const { id } = useParams();
    const [todosDetails, setTodosDetails]= useState();
    useEffect(() => {
        let mounted = true;
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}` )
    .then(res => {
      const responseTodos = res.data;
      if (mounted) {
      setTodosDetails( responseTodos);
      }
    }) 
    return () => {
        mounted = false;
      }; 
}, [id])
const {id: todoID,completed, title}= todosDetails || {};

return (
    <div>
<h3  style={{textAlign: 'center',}}>Todo list</h3>

{
todosDetails ? 

<div key={todoID} >
<h2>{title}</h2>
<p>{`Completed: ${completed}`}</p><br/>
<Link to="/">Go Home</Link>
</div>

  
: 

<img src={loader} alt="loader"  /> 

}


    </div>
   
    );
}

export default Todo;