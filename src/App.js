
import { useState } from 'react';
import './App.css';

function App() {
const [count, setCount]= useState(0)
const minus = ()=>{
  if(count <=0){
    return 
  }else{
    setCount(count-1)
  }
}
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={()=>setCount(count +1)} className='btn plus'>+<br/>increase </button>
      <button onClick={minus} className='btn minus'>-<br/>decrease</button>
    </div>
  );
}

export default App;
