import { useState } from "react";
import { useEffect } from 'react';
const Counter = () => {
    const [count, setCount]= useState(0); 

    
  useEffect(() => {
    console.log('use effect ran');
    console.log (count);
}, [count])


    return (
<div>
<p>The Counter is: {count}</p>
<button onClick={ () =>setCount(count+1)}>Increment</button>
<button onClick={ () =>setCount(count+1)}>Decrement</button>
</div>

      );
}
 
export default Counter;