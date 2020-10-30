import React , {useState} from 'react';
import './App.css';
import Message from './Message';

function App() {

  let [count,setCount] = useState(0)
  let [lastcount,setLastCount] =useState(count)
  return (
    <div >
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

     </div>
     
    </div>
  );
}

export default App;
