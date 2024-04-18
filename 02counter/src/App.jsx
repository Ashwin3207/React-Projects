import { useEffect, useState } from "react"
import './App.css'


function App() {
 
  
const [counter,setCounter]= useState(0);

const addValue = () =>
{const butt1 =document.getElementById('but1');
if(counter===100)
{
  butt1.display=none;
}
  setCounter((prevCounter=>prevCounter+1)); // callback like this doesnt make batching 
}


const removeValue= ()=>
{
  setCounter(counter-1);
}
  return (
   <>
   <h1>React Course {counter}</h1>
   <h2>Counter Value : {counter}</h2>
   <button onClick={addValue} id ="but1">Add Value</button>
   <button onClick={removeValue}>Remove Value </button>
   <p>footer : {counter}</p>
   </>
  )
}

export default App
