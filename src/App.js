import { render } from '@testing-library/react';
import React , {useState}  from 'react';
import './App.css';
import Message from './Message';

function App() {
  
  let [count,setCount] = useState(0);
  let [lastcount,setLastCount] = useState(count);
  let [isMorning, setMorning] = useState(false); 

  return (
    <div className= {'dayMode ${isMorning ? "nightMode" : ""}'}>
      <h1>Day Time = {isMorning ? 'Morning' : 'Night'}</h1>
      <Message counter={count} lastcounted={lastcount+1}/>
     <br />
     <div className='buttondiv'>
      
     <button onClick={
       ()=> setCount(count +1,setLastCount(count))
       
     }>
       Update Counter
     </button>
     <button onClick={
       ()=> setCount(0) 
     }
     >
       Reset
     </button>

     <button onClick ={

       ()=> setMorning(!isMorning)
     }>
        Change Mode
     </button>

     </div>
     
    </div>
  );
}

export default App;
